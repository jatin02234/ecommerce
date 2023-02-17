import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { CardComponent } from './card/card.component';
import { BrezzaComponent } from './home/brezza/brezza.component';
import { CretaComponent } from './home/creta/creta.component';
import { HarrierComponent } from './home/harrier/harrier.component';
import { HexaComponent } from './home/hexa/hexa.component';
import { HomeComponent } from './home/home.component';
import { I10Component } from './home/i10/i10.component';
import { NexonComponent } from './home/nexon/nexon.component';
import { PunchComponent } from './home/punch/punch.component';
import { TigorComponent } from './home/tigor/tigor.component';
import { VenueComponent } from './home/venue/venue.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  
  {
    path: 'Home',canActivate:[AuthGuardGuard], children: [
      { path: '', component:HomeComponent },
      { path: 'nexon', component: NexonComponent },
      { path: 'creta', component: CretaComponent },
      { path: 'punch', component: PunchComponent },
      { path: 'i10', component: I10Component },
      { path: 'harrier', component: HarrierComponent },
      { path: 'tigor', component: TigorComponent },
      { path: 'hexa', component: HexaComponent },
      { path: 'venue', component: VenueComponent },
      { path: 'brezza', component: BrezzaComponent },
    ]
  },
  // { path: 'Home/:id', component:HomeComponent,canActivate:[AuthGuardGuard] },
  { path: 'Card',canActivate:[AuthGuardGuard], component: CardComponent },
  { path: 'Signup', component: SignupComponent },
  { path: 'Login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
