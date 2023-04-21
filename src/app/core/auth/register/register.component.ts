import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  register!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.register = this.fb.group({
      username: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      emailConfirm: ['', Validators.required],
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    })
  }

  createUser(form: FormGroup) {

  }
}
