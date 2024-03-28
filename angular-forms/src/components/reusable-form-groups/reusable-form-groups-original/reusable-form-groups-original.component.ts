import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import {MatFormField, MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-reusable-form-groups-original',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormField,
    ReactiveFormsModule,
    JsonPipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reusable-form-groups-original.component.html'
})
export class ReusableFormGroupsOriginalComponent {
  fb = inject(FormBuilder);
  form = this.fb.group({
    name: this.fb.control(''),
    contact: this.fb.group({
      email: this.fb.control(''),
      phone: this.fb.control('')
    })
  })
}
