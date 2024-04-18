function validarusuario(input) {
  const errors = {};
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexnumber = /.*\d.*/;

  //validacion user name
  if (!regexEmail.test(input.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (!input.email) {
    errors.email = "El usuario no puede estar vacio";
  }
  if (input.email.length > 35) {
    errors.email = "Debe tener menos de 35 caracteres";
  }

  //validacion del password
  if (!regexnumber.test(input.password)) {
    errors.password = "La contrasena debe tener un numero";
  }
  if (input.password.length < 6) {
    errors.password = "Debe tener mas de 6 caracteres";
  }
  if (input.password.length > 12) {
    errors.password = "Debe tener máximo 12 caracteres";
  }
  //console.log(errors);
  return errors;
}
export default validarusuario;
