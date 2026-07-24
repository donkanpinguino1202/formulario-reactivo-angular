import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validadorContrasenas: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {

  const contrasena = control.get('contrasena');
  const confirmarContrasena = control.get('confirmarContrasena');

  if (!contrasena || !confirmarContrasena) {
    return null;
  }

  if (contrasena.value !== confirmarContrasena.value) {
    return {
      contrasenasNoCoinciden: true
    };
  }

  return null;
};