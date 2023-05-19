import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorEmail } from '../../services/validator-email.service';
import { ObservablePropertiesService } from 'src/app/services/observable-properties.service';
import { GeneralValidatorService } from '../../services/general-validator.service';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RegisterPost } from 'src/app/interfaces/userData.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  emailTaken: boolean = false;
  profileImg: string = '../../../../assets/img/blank-profile-picture-973460_960_720.webp';
  showLoader: boolean = false;

  register!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private obsService: ObservablePropertiesService,
    private emailValidator: ValidatorEmail,
    private generalValidator: GeneralValidatorService,
    private authService: AuthService,
    private router: Router
    ) {
    this.obsService.$emailTaken.subscribe(res => this.emailTaken = res);
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.register = this.fb.group({
      companyName: [ '', [Validators.required, Validators.minLength(4)] ],
      fullName: [ '', [Validators.required, Validators.minLength(6), Validators.pattern('([a-zA-Z]+) ([a-zA-Z]+)')] ],
      email: [ '', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')], [this.emailValidator] ],
      emailConfirm: [ '', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')] ],
      password: [ '', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,16}$')] ],
      passwordConfirm: [ '', [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,16}$')] ]
    }, {
      validators: [
        this.generalValidator.validEqualFields('email','emailConfirm'),
        this.generalValidator.validEqualFields('password','passwordConfirm'),
      ]
    })
  }

  createUser( form: FormGroup ) {
    this.showLoader = true;
    const data = {
      empresa: form.value.companyName.trim(),
      nombre: form.value.fullName.trim(),
      correo: form.value.email.trim(),
      password: form.value.password,
    }

    this.authService.createUser( data ).subscribe( (res: RegisterPost) => {
      this.showLoader = false;
      if( res.ok ) {
        Swal.fire({
          icon: 'success',
          title: '¡Usuario creado!',
          text: 'Su usuario fue creado con exito, haga click en el boton para ir al login.'
        }).then(res => {
          if(res.isConfirmed) this.router.navigate(['core/login']);
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ha ocurrido un error en la creación de su usuario, comunciarse con soporte para recibir ayuda.',
          footer: '<a href="">Click aqui para ir a la sección de soporte</a>',
          showConfirmButton: false
        });
      }
    })
  }

  asignImage( event: any ) {
    console.log(event);
    // this.profileImg = event.target.files[0].name;
  }
}
