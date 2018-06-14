//define functions here

$(document).ready(function(){

// call functions here
// getIt();

});

function getIt(){
  $('p').on('click', function(){
    alert ('hey!')
  })
}

function frameIt(){
 $('img').on('load', function(){
    $("img").addClass("tasty")
  })
}

function pressIt(){
  $('form input:first-child').on('load', function(key){
    if(key.which == 71){
      alert('G has been pressed!')
    }
  })
}