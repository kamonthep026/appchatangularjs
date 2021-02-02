import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component'
import { ChatComponent } from './modules/chat/chat.component'

const routes: Routes = [
  // { path: '', loadChildren: './modules/chat/chat.module@ChatModule' },
  { path: '', component: ChatComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PageNotFoundComponent];
