import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '@angular/material';
import { AppComponent } from './app.component';

import { HttpModule, JsonpModule } from '@angular/http';
import { PolicieComponent } from './policie/policie.component';
import {PoliciesService} from "./policies.service";
import { RouterModule, Routes } from '@angular/router';
import { PoliciesReadonlyComponent } from './policies-readonly/policies-readonly.component';

const appRoutes: Routes = [
  { path: 'policies', component: PolicieComponent },
  { path: 'readonly', component: PoliciesReadonlyComponent },

  { path: '',
    redirectTo: '/readonly',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PolicieComponent,
    PoliciesReadonlyComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    JsonpModule
  ],
  providers: [PoliciesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
