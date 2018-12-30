$(document).ready(function(){

    $("form").submit(function() { //Change
      var th = $(this);
      $.ajax({
          type: "POST",
          url: "mail.php", //Change
          data: th.serialize()
      }).done(function() {
          th.trigger("reset");
          alert("В ближайшее время с Вами свяжется наш специалист");
      });
      return false;
    });


    $('.tabs').slick({
        slidesToShow: 1,
        dots: true,
        fade: true,
        arrows: false
      });
    $('.tabs-nav ol li').on( "click", function() {
        $('.tabs>ul>li').eq( $(this).index() ).click();
    });

    $('.reviews-wrap').slick({
        slidesToShow: 1,
        arrows: false
    });

    $('.left-arr').on('click', function() {
        $('.reviews-wrap').slick('slickPrev');
    });

    $('.right-arr').on('click', function() {
        $('.reviews-wrap').slick('slickNext');
    });

    //Кнопка адаптивного меню
    (function() {

        "use strict";

        var toggles = document.querySelectorAll(".cmn-toggle-switch");

        for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
        };

        function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
        });
        }

    })();


	//----
    $('.tabs-nav ol:last-child li').on('click', function() {
        $(this).next().fadeToggle(300, "linear");
    });
	$('.tabs-bl .tab-ad img.close-btn').on('click', function() {
        $(this).parent().fadeToggle(300, "linear");
    });

    //---
    $('.cmn-toggle-switch').on('click', function() {
        $('.top-menu-ad').fadeToggle(300, "linear");
    });
	//К якорю

	$(function(){
	  $('a[href="http://www.uae-b2b.com/#tabs"]').on('click', function(event) {
		// отменяем стандартное действие

		var
			dn = $('#tabs').offset().top;
		/*
		* sc - в переменную заносим информацию о том, к какому блоку надо перейти
		* dn - определяем положение блока на странице
		*/

		$('html, body').animate({scrollTop: dn}, 1000);

		/*
		* 1000 скорость перехода в миллисекундах
		*/
	  });
	});


	var myHash = location.hash; //получаем значение хеша
	location.hash = ''; //очищаем хеш
	if(myHash[1] != undefined){ //проверяем, есть ли в хеше какое-то значение
	$('html, body').animate(
	{scrollTop: $(myHash).offset().top}
	, 1000); //скроллим за полсекунды
	location.hash = myHash; //возвращаем хеш
	};
});