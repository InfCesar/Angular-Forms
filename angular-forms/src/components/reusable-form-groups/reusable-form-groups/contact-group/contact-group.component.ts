import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-contact-group',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './contact-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // providers: [] wouldnt work
  // viewProviders is the last place where @Host of the formGroupName directive is allowed to search for the ControlContainer instance
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: ()=>inject(ControlContainer, {skipSelf: true})
    }
  ]
})
export class ContactGroupComponent implements OnInit {
  controlContainer = inject(ControlContainer);
  readonly childGroupName = 'contact';
  
  get parentFormGroup(): FormGroup {
    return <FormGroup>this.controlContainer.control;
  }

  // The child component is responsible for both adding and removing the child group
  // This unifies the model and the view, as they are both defined inside the same component
  ngOnInit(): void {
    this.parentFormGroup.addControl(this.childGroupName, new FormGroup({
      email: new FormControl(''),
      phone: new FormControl(''),
    }))
  }

  ngOnDestroy() {
    this.parentFormGroup.removeControl(this.childGroupName);
  }
}
