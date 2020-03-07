import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { IonicModule } from '@ionic/angular';

import { AddDependentPage } from './add-dependent.page';

const routes: Routes = [
  {
    path: '',
    component: AddDependentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [AddDependentPage]
})
export class AddDependentPageModule {}
