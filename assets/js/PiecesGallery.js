// Class secundary of PiecesGallery with extends to Gallery 
class PiecesGallery {
  constructor( name, year, description, author) {
    this.name = name;
    this.year = year;
    this.description = description;
    this.author = author;
  };

  getDescription(){
   return "Esta obra se llama "+ this.name +" fue diseñada en " + this.year +" Esta obra " + this.description + " fue realizado por:  "+ this.author
  }
  
  setDescription(description){
    this.description = description;
  }

};
