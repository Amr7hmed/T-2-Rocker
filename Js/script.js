$(document).ready(function(){
  //when scroil
  $(window).scroll(function(){
    var sc= $(this).scrollTop();
    if(sc > 200){
        $('.headnav').addClass('staky');
    }else{
    $('.headnav').removeClass('staky'); 
    } 
})

$('.navspanhide').click(function(){
  $('.navilisttemleft').slideToggle();
});

})