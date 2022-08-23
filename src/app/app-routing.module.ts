import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeAHostComponent } from './become-ahost/become-ahost.component';
import { ContactComponent } from './contact/contact.component';
import { FriendsComponent } from './friends/friends.component';
import { HomeComponent } from './home/home.component';
import { HowWeStartedComponent } from './how-we-started/how-we-started.component';
import { PodsComponent } from './pods/pods.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pods', component: PodsComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'become-a-host', component: BecomeAHostComponent },
  { path: 'how-we-started', component: HowWeStartedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
