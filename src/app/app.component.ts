import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Structure Directives';
  isLoggedIn: boolean = false;
  user: string = "Jenny";

  names: string[] = ['Amy','Dave','John'];

  grade: string = 'B';
}
