// Logic of Program
let gallery = new Gallery();
gallery.initializeGallery();

const galleryPieces = gallery.getPiecesG();

function showAlert(){
  alert(galleryPieces[0].getDescription())
};

function showAlert1(){
  alert(galleryPieces[1].getDescription())
};

function showAlert2(){
  alert(galleryPieces[2].getDescription())
};

function showAlert3(){
  alert(galleryPieces[3].getDescription())
};

function showAlert4(){
  alert(galleryPieces[4].getDescription())
};
