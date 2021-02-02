import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/header/header.component';
import { MessageSendComponent } from './modules/chat/components/message-send/message-send.component';
import { ChatComponent } from './modules/chat/chat.component';
import { MessageListComponent } from './modules/chat/components/message-list/message-list.component';
import { MessageItemComponent } from './modules/chat/components/message-item/message-item.component';
import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { SimplebarAngularModule } from 'simplebar-angular';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    MessageSendComponent,
    ChatComponent,
    MessageListComponent,
    MessageItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxBootstrapIconsModule.pick(allIcons),
    SimplebarAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
