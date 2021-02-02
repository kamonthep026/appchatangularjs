import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  numbers = Array(50).fill(0);
  options = { autoHide: false, scrollbarMinSize: 100 };
  constructor() { }

  ngOnInit(): void {
  }

}
