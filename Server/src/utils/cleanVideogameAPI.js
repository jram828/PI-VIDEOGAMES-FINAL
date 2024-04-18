const cleanVideogameAPI = (results) => {
  //console.log('results clean:',results)
  if (results.length!==0) {
  const {
    id,
    name,
    description_raw,
    background_image,
    released,
    rating,
    platforms,
    genres,
    } = results;
    
    const newRating = [];
    const roundRating = Math.round(rating);
    for (i = 1; i < roundRating + 1; i++){
      newRating.push("⭐");
    }
    const platformsFlat = platforms.map((element) => element.platform.name).join(', ')
      // .filter((name, index, arr) => arr.indexOf(name) === index);
    const genresFlat = genres.map((genre) => genre.name).join(', ');

  return {
    id,
    name,
    description: description_raw,
    platforms:platformsFlat,
    image:background_image,
    launchDate:released,
    rating,
    newRating: newRating.join(''),
    genres:genresFlat,
  };
  } else {
    return {};
  }
}

module.exports =cleanVideogameAPI;
