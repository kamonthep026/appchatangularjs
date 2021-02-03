import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.scss']
})
export class ChatRoomComponent implements OnInit {
  @ViewChild('chatContent') chatContent: ElementRef;
  scrollTop: number = null;

  chatForm: FormGroup;
  nickName = '';
  roomName = '';
  message = '';
  users = [];
  chats = [
    {
      date: "03/02/2021 09:40:11",
      message: "ok",
      nickName: "Lobs",
      roomName: "Angular",
      type: "message"
    }
  ];
  chat$: Observable<any>;
  newMsg: string;


  constructor(
    // public cs: ChatService,
    // private route: ActivatedRoute,
    // public auth: AuthService
  ) {}

  ngOnInit() {
    // const chatId = this.route.snapshot.paramMap.get('id');
    // const source = this.cs.get(chatId);
    // this.chat$ = this.cs.joinUsers(source);
    this.scrollBottom();
  }

  submit(chatId) {
    if (!this.newMsg) {
      return alert('you need to enter something');
    }
    // this.cs.sendMessage(chatId, this.newMsg);
    this.newMsg = '';
    this.scrollBottom();
  }

  trackByCreated(i, msg) {
    return msg.createdAt;
  }

  private scrollBottom() {
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 500);
  }

}
