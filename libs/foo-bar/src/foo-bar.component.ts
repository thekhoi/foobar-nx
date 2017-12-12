import { Component } from '@angular/core';

@Component({
    template: `<h1>hello world</h1>
    <a [routerLink]="['./baz']">test</a>
    <hr/><router-outlet></router-outlet>`
})
export class FooBarComponent {

}
