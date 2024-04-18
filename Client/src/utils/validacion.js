const validar=(input)=> {
  const errors = {};

  console.log("INput paltforms: ", input.platforms)
  console.log("INput genres: ", input);
  if (!input.name) {
    errors.name = "Debe ingresar un nombre";
  }
    if (!input.description) {
      errors.description = "Debe ingresar una descripción";
    }
  if (input.description.length > 255) {
    errors.description = "Máximo 255 caracteres";
  }
  if (input.image.length > 255) {
    errors.image = "Máximo 255 caracteres";
  }
  if (input.image.substr(0,4) !== "http") {
    errors.image = "Debe contener una URL";
  }

  if (Number(input.rating)>5) {
    errors.rating = "El rating debe ser menor a 5";
  }
    if (!input.rating) {
      errors.rating = "Debe ingresar un rating";
    }
    if (isNaN(Number(input.rating))) {
      errors.rating = "El rating debe ser un numero";
    }
  if (input.launchDate.length < 10) {
    errors.launchDate = "Debe seleccionar una fecha";
  }
  if (input.genres.length === 0) {
    errors.genres = "Debe seleccionar al menos un género";
  }
    if (input.platforms.length === 0) {
      errors.platforms = "Debe seleccionar al menos una plataforma";
    }
  //console.log(errors);
  return errors;
}
export default validar;
