// Logic of Program
let gallery = new Gallery(0, "sculpture");

let pieces = new PiecesGallery();




function galleryFunction() {
  return alert(this.id[0] + " is " + this.typeOfArt + " beautiful Art in the museum") ;
}


function getPieces(){
  return alert(this.name + this.year + this.description + this.author) ;
};