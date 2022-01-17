// Class secundary of PiecesGallery with extends to Gallery 
class PiecesGallery extends Gallery {
  constructor(id, typeOfArt, name, year, description, author) {
    super(id, typeOfArt);
    this.name = name;
    this.year = year;
    this.description = description;
    this.author = author;
  };

  getPieces(){
    return this.name + this.year + this.description + this.author
  }
};

