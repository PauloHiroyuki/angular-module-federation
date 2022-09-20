import { ComponentsModule } from './components/components.module';
import { AppMaterialModule } from './app-material/app-material.module';
import { PipesModule } from './pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    PipesModule,
    ComponentsModule,
    AppMaterialModule
  ]
})
export class SharedModule { }
