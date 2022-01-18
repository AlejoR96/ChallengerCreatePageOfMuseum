// Class principal of gallery
class Gallery {
  constructor() {

    this.pieces = [];
  }

 getPiecesG(){
   return this.pieces
 }
 
 setPiecesG(pieces){
   this.pieces = pieces;

 }

 initializeGallery(){
   //PieceOne
   let PiecesGalleryOne = new PiecesGallery("La gran ola de Kanagawa", "1830 -1833","es la obra más conocida de Hokusai y la primera de su famosa serie Fugaku sanjūrokkei","Katsushika Hokusai");
   this.pieces.push( PiecesGalleryOne)

   //PieceTwo
   let PiecesGalleryTwo = new PiecesGallery("Washington cruzando el Delaware", "1851","Se exhibe en el Museo Metropolitano de Arte de Nueva York, Estados Unidos. Que mide 3.79 metros de largo por 6.48 de ancho ","Emanuel Leutze");
   this.pieces.push( PiecesGalleryTwo)

   //PieceThree
   let PiecesGalleryThree = new PiecesGallery("El último viaje del «Temerario»","1839","Fue pintado en óleo sobre tela de 91 centímetros de alto por 122 centímetros de ancho, se halla expuesto en la National Gallery de Londres (Reino Unido)","Joseph Mallord William Turner");
   this.pieces.push( PiecesGalleryThree)

   //PieceFour
   let PiecesGalleryFour = new PiecesGallery("La noche estrellada","en junio de 1889","Fue pintado en óleo y representa la vista desde la ventana orientada al este de su habitación de asilo en Saint-Rémy-de-Provence, justo antes del amanecer, con la adición de un pueblo imaginario  "," Vincent van Gogh");
   this.pieces.push( PiecesGalleryFour)

   //PieceFive
   let PiecesGalleryFive = new PiecesGallery("David (Miguel Ángel)","entre 1501 y 1504","es una escultura de mármol blanco de 5,17 metros de altura y 5572 kilogramos de masa, La escultura representa al rey David bíblico en el momento previo a enfrentarse con Goliat"," Vincent van Gogh");
   this.pieces.push( PiecesGalleryFive)

  };
}
