import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooBazComponent } from './foo-baz.component';

@NgModule({
  declarations: [FooBazComponent],
  imports: [CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: FooBazComponent }
    ])]
})
export class FooBazModule {
}
