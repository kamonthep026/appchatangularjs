import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth/auth.service';
import { ChatService } from '../../core/auth/chat.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userChats$;

  constructor(public auth: AuthService, public cs: ChatService) {
   }

  ngOnInit() {
    this.userChats$ = this.cs.getUserChats();
  }
}
