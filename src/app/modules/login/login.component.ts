import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { ChatService } from '../../core/auth/chat.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userChats$;
  constructor(public auth: AuthService, public cs: ChatService) { }

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
  }
}
