$(function(){

$('.row20-item').on('click',function(){

var $answer = $(this).find('.row20-answer');

if($answer.hasClass('open')){

$answer.removeClass('open');
$answer.slideUp();
$(this).find('.row20-q-right').html('<i class="fas fa-angle-down"></i>');

}else{

$answer.addClass('open');
$answer.slideDown();
$(this).find('.row20-q-right').html('<i class="fas fa-angle-up"></i>');

}
});

$('.row20-question').hover(function(){

  var $row20qleft = $(this).find('.row20-q-left');

  if($row20qleft.hasClass('line')){
    $row20qleft.removeClass('line');
    $row20qleft.css('text-decoration','none');
  }else{
    $row20qleft.addClass('line');
    $row20qleft.css('text-decoration','underline');
  }

});



$(function(){

  $('.gotop').hide();

  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $('.gotop').fadeIn();
    }else{
      $('.gotop').fadeOut();
}
  });

  $('.gotop').click(function(){
    $('body , html').animate({scrollTop:0},1000);
    return false;
  });
});

$('.header-right p , .row2-center').click(function(){

  var $row19 = $('.row-19').offset().top;

  $('html,body').animate({scrollTop:$row19 - 50},800);
  return false;

});


});
