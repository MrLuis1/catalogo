import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;
  errorMsg: string = '';
  showError: boolean = false;
  showLoader: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm()
  }

  checkLogin(form: FormGroup) {
    this.showLoader = true;
    const { email, password } = form.value;
    this.authService.authUser( email, password ).subscribe((res: boolean) => {
      this.showLoader = false;
      if( res ) {
        if( this.showError ) this.showError = false;
        this.router.navigate(['/private'])
      } else this.showError = true;
    })
  }

  initForm(){
    this.login = this.fb.group({
      email: [ '', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')] ],
      password: [ '', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,16}$')] ]
    })
  }
}
