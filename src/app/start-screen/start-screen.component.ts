import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [],
  templateUrl: './start-screen.component.html',
  styleUrls: ['./start-screen.component.scss'] // <-- hier das "s" ergänzen und Array!
})
export class StartScreenComponent {

  constructor(private router: Router) { }
newGame() {
  this.router.navigate(['/game']);
}
}
