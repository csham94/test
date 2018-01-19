import { Component, Input } from '@angular/core';

import { Thread } from '../shared/thread';
import { CurrentViewService } from '../shared/current-view.service';

@Component({
  selector: 'app-thread-item',
  templateUrl: './thread-item.component.html',
  styleUrls: ['./thread-item.component.css']
})
export class ThreadItemComponent {
  @Input() thread: Thread;

  constructor(public curView: CurrentViewService) { }

}
