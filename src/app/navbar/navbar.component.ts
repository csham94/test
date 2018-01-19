import { Component, OnInit } from '@angular/core';
import { CurrentViewService } from '../shared/current-view.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public curView: CurrentViewService) { }

  ngOnInit(): void {
  }

  switchBoard(newBoard: string): void {
    this.curView.board = newBoard;
  }

}
