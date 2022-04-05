import { Component, Input } from '@angular/core';
import { User } from 'src/app/interfaces/apiResponse';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styles: [],
})
export class ProfileCardComponent {
  @Input() users: User[] = [];
}
