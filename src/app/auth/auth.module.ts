import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthRouterModule } from './auth-router.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    AuthRouterModule,
    SharedModule,
  ],
})
export class AuthModule {}
