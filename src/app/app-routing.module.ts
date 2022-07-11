import { MainPageComponent } from './components/main-page/main-page.component';
import { AppComponent } from './app.component';
import { CoininfoComponent } from './components/coininfo/coininfo.component';
import { CoinsComponent } from './components/coins/coins.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'coins', component: CoinsComponent},
  {path: 'coininfo/:coin', component: CoininfoComponent},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
