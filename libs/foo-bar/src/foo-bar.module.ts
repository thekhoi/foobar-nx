import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooBarComponent } from './foo-bar.component';
@NgModule({
  declarations: [FooBarComponent],
  imports: [CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: FooBarComponent },
      {
        path: 'baz',
        pathMatch: 'full',
        loadChildren: './foo-baz/foo-baz.module#FooBazModule'
      }
    ])]
})
export class FooBarModule {
}
