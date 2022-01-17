// Class principal of gallery
class Gallery {
  constructor(id, typeOfArt) {
    this.id = [id];
    this.typeOfArt = typeOfArt;
  }


  galleryFunction() {
    return this.id + " is " + this.typeOfArt + " beautiful Art in the museum";
  }
}

