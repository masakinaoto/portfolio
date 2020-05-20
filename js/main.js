// 


$(function() {

    $('.slicontents').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2,
        autoplay:true,
	    autoplaySpeed:2000,
        arrows: false,
        variableWidth: true,
        dots: true,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       autoplay:true,
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 3,
        //       dots: true,
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       autoplay:true,
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 1,
        //       dots: true,
        //     }
        //   }
        // ]
      });
      $('.page-item-prev').on('click', function(){
        $('.slicontents').slick('slickPrev');
        return false;
      });
      $('.page-item-next').on('click', function(){
        $('.slicontents').slick('slickNext');
        return false;
      });
      $('.page-item-num1').on('click', function(){
        $('.slicontents').slick('slickGoTo', 1);
        return false;
      });
      $('.page-item-num2').on('click', function(){
        $('.slicontents').slick('slickGoTo', 2);
        return false;
      });
      $('.page-item-num3').on('click', function(){
        $('.slicontents').slick('slickGoTo', 3);
        return false;
      });



      (function(){
        var topBtn=$('#pageTop');
        topBtn.hide();
        
         
        
        //◇ボタンの表示設定
        $(window).scroll(function(){
          if($(this).scrollTop()>80){
        
            //---- 画面を80pxスクロールしたら、ボタンを表示する
            topBtn.fadeIn();
        
          }else{
        
            //---- 画面が80pxより上なら、ボタンを表示しない
            topBtn.fadeOut();
        
          }
        });
        
         
        
        // ◇ボタンをクリックしたら、スクロールして上に戻る
        topBtn.click(function(){
          $('body,html').animate({
          scrollTop: 0},500);
          return false;
        
        });
        
        
    })();

    (function() {
        var h = $(window).height();
        $('#loading__wrapper').css('display','none');
        $('#is-loading ,#loading').height(h).css('display','block');

        $(window).on('load', function () {
            $('#is-loading').delay(900).fadeOut(800);
            $('#loading').delay(600).fadeOut(300);
            $('#loading__wrapper').css('display', 'block');
        });
    })();

    (function(){
        var headerHight = 0;
        $("a[href^='#'].smooth").click(function() {
            var speed = 400;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top-headerHight;  $('body,html').animate({scrollTop:position}, speed, 'swing');
            return false;
        });
    })();

});


function stopload(){
    $('#loading__wrapper').css('display','block');
    $('#is-loading').delay(900).fadeOut(800);
    $('#loading').delay(600).fadeOut(300);
}

// ページ読み込み完了後
$(window).on('load', function(){

    setTimeout('stopload()',10000);


    window.sr = ScrollReveal({ reset: true });

    sr.reveal('.scrollreveal-normal', { duration: 2000 }, 1000);
    sr.reveal('.scrollreveal-left', { duration: 2000 }, 1000);
    sr.reveal('.scrollreveal-right', { duration: 2000 }, 1000);
});