import { Component } from '@angular/core';
import { CheckService } from '../_services/check.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(public check:CheckService)
{}
}
