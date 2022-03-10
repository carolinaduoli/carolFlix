var listaFilmes = [
    "https://play-lh.googleusercontent.com/Y1Nnqaxexu0P4AQZAH4Zxeq4iwhnHE1du9sAY3jH6vITNEElRgDtWLzfLnHp0fOcezgD",
    "https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg",
    "https://ingresso-a.akamaihd.net/img/cinema/cartaz/1459-cartaz.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/b/b2/Guardiansgalaxyposter.jpg"
  ];
  
  listaFilmes.push(
    "https://upload.wikimedia.org/wikipedia/pt/thumb/4/4b/Hidden_Figures.jpg/200px-Hidden_Figures.jpg"
  );
  listaFilmes.push(
    "https://sumo.cdn.tv2.no/imageapi/v3/img/60e41d0a498e4191da5493dd-1641220717170?width={width}&height={height}&location=moviePoster&quality={quality}"
  );
  listaFilmes.push(
    "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/6a1f57fce53501b1f58373b5a060c11252b13457a7b59be9063ab47f9f7a6ef1._RI_V_TTW_.jpg"
  );
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }
  