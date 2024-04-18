const cleanVideogameDB = (results) => {
  //console.log('results clean:',results)
  if (results.length !== 0) {
    const {
      id,
      name,
      description,
      image,
      launchDate,
      rating,
      platforms,
      genres,
    } = results;
   
    const newRating = [];
    const roundRating = Math.round(rating);
    for (i = 1; i < roundRating + 1; i++) {
      newRating.push("⭐");
    }
    const genresFlat = genres.map((genre) => genre.name).join(', ');

    return {
      id,
      name,
      description,
      platforms,
      image,
      launchDate,
      rating,
      newRating,
      genres: genresFlat,
    };
    
  } else {
    return {};
  }
};

module.exports = cleanVideogameDB;
