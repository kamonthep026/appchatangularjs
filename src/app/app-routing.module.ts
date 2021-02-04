import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component'
import { ChatRoomComponent } from './modules/chat-room/chat-room.component'
import { HomeComponent } from './modules/home/home.component';
import { AuthGuard } from "./core/auth/auth.guard";
import { LoginComponent } from './modules/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'chats/:id',
        component: ChatRoomComponent,
      },
    ]
    , canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PageNotFoundComponent];
