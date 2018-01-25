/*Always ran when the window is scrolled*/
$(window).scroll(function() {
  /*Check the location of each element*/
  $('.hide-me').each(function(i){
    var bottom_object = $(this).position().top + $(this).outerHeight();
    var bottom_window = $(window).scrollTop() + $(window).height();

    /*if the object is visible fade it in*/
    if (bottom_window > bottom_object) {
      $(this).addClass('animated');
    }
  });
});

/*Scroll Down JS*/
$(function() {
  $('.scroll').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});
/*CTA ANIMATIONS*/
function animate(){
  $('.move').bind('webkitAnimationEnd mozAnimationEnd animationEnd', function() {
    $(this).removeClass('animated');
  })
  $('.move').mouseover(function(){
    $(this).addClass('animated');
  })

  $('.logo2').mouseover(function(){
    $('.arrow1, .arrow2').addClass('animated');
  })
  $('.logo2').mouseout(function() {
    $('.arrow1, .arrow2').removeClass('animated');
  })

  $('#view-about').click(function(){
    $('.about-cta1, .about-cta2').bind('webkitAnimationEnd mozAnimationEnd animationEnd', function() {
      $(this).addClass('hide');
    })
    $('.about-cta1, .about-cta2, .about-hidden').addClass('animated');
  });
}
$(this).mouseover(animate());
