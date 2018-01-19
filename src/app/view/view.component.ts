import { Component, OnInit } from '@angular/core';
import { CurrentViewService } from '../shared/current-view.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  constructor(public curView: CurrentViewService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res => {
      const postId = res.get('postId');
      if (postId == null) {
        this.curView.view = 'catalog';
        this.curView.id = 0;
      } else {
        this.curView.view = 'specific';
        this.curView.id = Number(postId);
      }

      this.curView.board = res.get('board');
    });
  }
}
