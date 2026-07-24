import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { validadorContrasenas } from './validadores/validador-contrasenas';

interface UsuarioRegistrado {
  nombreCompleto: string;
  correoElectronico: string;
  nombreUsuario: string;
  edad: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  formulario: FormGroup;
  usuarioRegistrado: UsuarioRegistrado | null = null;
  constructor(private formularioBuilder: FormBuilder) {
    this.formulario = this.formularioBuilder.group({
      nombreCompleto: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      correoElectronico: [
        '',
        [
          Validators.required,
          Validators.email
        ]
      ],

      nombreUsuario: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9_]+$')
        ]
      ],

      contrasena: [
        '',
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],

      confirmarContrasena: [
        '',
        Validators.required
      ],

      edad: [
        '',
        [
          Validators.required,
          Validators.min(15),
          Validators.max(90)
        ]
      ],

      terminos: [
        false,
        Validators.requiredTrue
      ]

    },
    {
      validators: validadorContrasenas
    });
  }

  get controles() {
    return this.formulario.controls;
  }

  registrar(): void {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }

    this.usuarioRegistrado = {
      nombreCompleto: this.formulario.value.nombreCompleto,
      correoElectronico: this.formulario.value.correoElectronico,
      nombreUsuario: this.formulario.value.nombreUsuario,
      edad: this.formulario.value.edad
    };
    console.log(this.usuarioRegistrado
    );
  }
}