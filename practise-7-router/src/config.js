export const payload = {
    titles: ["Gladiator", "Jhon Wick", "Judge Dredd", "Fight Club"],
    releases_years: [2000, 2014, 2012, 2000],
    budget: [103000000, 30000000, 53000000, 27000000],
    box_office: [460500000, 86000000, 18000000, 50000000]
  };
  

  export const mapFilms = filmsObj => {
   return Object.entries(filmsObj).reduce((acum, [key, values]) => {
        return acum.map((filmData, index) => ({...filmData, [key]: values[index]}))
    },[{}, {}, {}, {}]);
  }

//   [{title, release_year, budget, box_office}, ...]