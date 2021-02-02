import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from './chat.component';
import { MessageSendComponent } from './components/message-send/message-send.component';
@NgModule({
  declarations: [MessageSendComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: '', component: ChatComponent }]),
  ],
})
export class ChatModule { }
