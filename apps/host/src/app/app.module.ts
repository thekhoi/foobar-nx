import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
  BrowserModule,
  RouterModule.forRoot([{path: 'foo-bar', loadChildren: '@todolist-nx/foo-bar#FooBarModule'}], {initialNavigation: 'enabled'})],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
