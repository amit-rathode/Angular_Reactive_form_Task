import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LearnformcontrolcomponentComponent } from './learnformcontrolcomponent/learnformcontrolcomponent.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProfileEditorComponent,LearnformcontrolcomponentComponent,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'form_task_day_8';

  registerForm=new FormGroup({
    userName : new FormControl(''),
    emailId :new FormControl(''),
    phoneNumber :new FormControl(''),
    male:new FormControl(''),
    female :new FormControl(''),
    password :new FormControl(''),
    passWord :new FormControl(''),
  });

onSubmit(){
  console.warn(this.registerForm.value);
}


}
