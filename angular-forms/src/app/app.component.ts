import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReusableFormGroupsOriginalComponent } from '../components/reusable-form-groups/reusable-form-groups-original/reusable-form-groups-original.component';
import { ReusableFormGroupsComponent } from '../components/reusable-form-groups/reusable-form-groups/reusable-form-groups.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReusableFormGroupsOriginalComponent, ReusableFormGroupsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-forms';
}
