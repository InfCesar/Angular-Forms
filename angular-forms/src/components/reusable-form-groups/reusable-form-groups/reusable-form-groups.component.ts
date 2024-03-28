import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatFormField, MatInputModule} from '@angular/material/input';
import { ContactGroupComponent } from './contact-group/contact-group.component';

@Component({
  selector: 'app-reusable-form-groups',
  standalone: true,
  imports: [
    ContactGroupComponent,
    MatInputModule,
    MatFormField,
    ReactiveFormsModule,
    JsonPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reusable-form-groups.component.html'
})
export class ReusableFormGroupsComponent {
  fb = inject(FormBuilder);
  form = this.fb.group({
    name: this.fb.control(''),
  })
}
