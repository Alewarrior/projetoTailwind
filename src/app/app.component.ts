import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Tooltip, initTWE } from 'tw-elements'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projetoTailwind';
  ngOnInit() {
    initTWE({ Tooltip });
}

  }
