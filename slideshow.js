
// $.ajax({
//   url: "https://api.nasa.gov/planetary/apod?api_key=0alrIgXZeFKGC2gBnBAqYpve5IFog9D1iymGVVkT"
// }).done(showSLides);



$(document).ready(function() {

  //next button click
  let nextImage = () => {
    let activeImg = $("IMG.active");
    activeImg.removeClass(" active");
    if (activeImg.next().length === 0) {
      $(".slider IMG:first ").addClass("active");
    } else {
      activeImg.next().addClass("active");
    }
  };

  //prev button click
  let prevImage = () => {
    let activeImg = $("IMG.active");
    activeImg.removeClass(" active");
    if (activeImg.prev().length === 0) {
      $(".slider IMG:last ").addClass("active");
    } else {
      activeImg.prev().addClass("active");
    }
  }

$("#prev").click(prevImage);
$("#next").click(nextImage);

});



// function nextImage() {
//   console.log("next image");
//   var currentImage = $( "figure.visible" );
//   currentImage.removeClass("visible");
//   if (currentImage.next().length === 0) {
//     $("#container figure:first").addClass("visible");
//   } else {
//     currentImage.next().addClass("visible");
//   }





// setInterval(function() { 
//   $('#slideshow > div:first')
//     .fadeOut(1000)
//     .next()
//     .fadeIn(1000)
//     .end()
//     .appendTo('#slideshow');
// },  3000);

// $(function() {
//     setInterval( "slideSwitch()", 5000 );
// });