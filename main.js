//DOCUMENT READY


$(document).ready(
  function(){
    $('.next').click(
      function(){
        clickNext();
      });

    $('.prev').click(
      function(){
        clickPrev();
      }
    )
  }
);

//CLICK NEXT
function clickNext(){

  var imageActive = $('img.active');
  var imageNext = imageActive.next();
  var circleActive = $('i.active');
  var circleNext = circleActive.next();

  if(imageActive.hasClass('last') == true){
        imageActive.removeClass('active');
        $('img.first').addClass('active');
        circleActive.removeClass('active');
        $('i.first').addClass('active')
      }else{
        imageActive.removeClass('active');
        imageNext.addClass('active');
        circleActive.removeClass('active');
        circleNext.addClass('active');
      }
    }

//CLICK PREV

function clickPrev(){

    var imageActive = $('img.active');
    var imagePrev = imageActive.prev();
    var circleActive = $('i.active');
    var circlePrev = circleActive.prev();

    if(imageActive.hasClass('first') == true){
          imageActive.removeClass('active');
          $('img.last').addClass('active');
          circleActive.removeClass('active');
          $('i.last').addClass('active');
        }else{
          imageActive.removeClass('active');
          imagePrev.addClass('active');
          circleActive.removeClass('active');
          circlePrev.addClass('active');
        }
  }


//NAVIGATION WITH KEYBOARD

$(document).keydown(
  function(){
    if(event.keyCode == 13){
      clickNext();
    } else if(event.keyCode == 46){
      clickPrev();
    }
  }
)


$('i.fa-circle.first').click(
  function(){
   $('img.first').addClass('active');
   $('img').removeClass('active');

}

);
