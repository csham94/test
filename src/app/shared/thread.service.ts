import { Injectable } from '@angular/core';
import { Thread } from './thread';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';
import { ReturnStatement } from '@angular/compiler/src/output/output_ast';
import { UrlsService } from './urls.service';

@Injectable()
export class ThreadService {
    private threads: Array<Thread>;

    constructor(private httpClient: HttpClient, public urls: UrlsService) { }

    getThreads(board: string): Observable<Array<Thread>> {
        const apiUrl = this.urls.serverBasePath + '/getPosts';

        const body = new HttpParams()
            .set('boardName', board);
        
        const header = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');

        return this.httpClient
            .post<Array<any>>(apiUrl, body, { headers: header })
            .map(val => {
                const threads: Array<Thread> = [];
                val.map(res => {
                    const thread = {
                        postID: res.postID,
                        commentID: 0,
                        userId: res.user.userID,
                        title: res.title,
                        textContent: res.textContent,
                        imagePath: this.urls.imageBasePath + res.imagePath,
                        postTime: res.postTime
                    };
                    threads.push(thread as Thread);
                });

                return threads;
            });
    }

    getReplies(id: number): Observable<Array<Thread>> {
        const apiUrl = this.urls.serverBasePath + '/getPost';

        const body = new HttpParams()
            .set('postId', id.toString())
            
        const header = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');

        return this.httpClient
            .post<any>(apiUrl, body, { headers: header })
            .map(val => {
                const threads: Array<Thread> = [];

                const thread = {
                    postID: val.postID,
                    commentID: 0,
                    userId: val.user.userID,
                    title: val.title,
                    textContent: val.textContent,
                    imagePath: this.urls.imageBasePath + val.imagePath,
                    postTime: val.postTime
                };
                threads.push(thread as Thread);

                val.replies.map(res => {
                    const reply = {
                        postID: 0,
                        commentID: res.commentID,
                        userId: res.user.userID,
                        title: '',
                        textContent: res.textContent,
                        imagePath: this.urls.imageBasePath + res.imagePath,
                        postTime: res.postTime
                    };
                    threads.push(reply as Thread);
                });

                return threads;
            });
    }
}
