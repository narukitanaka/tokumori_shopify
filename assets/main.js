$(function () {
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^=#]').click(function () {
		// スクロールの速度
		var speed = 300; // ミリ秒
		// アンカーの値取得
		var href = $(this).attr("href");
		// 移動先を取得
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({ scrollTop: position }, speed, 'swing');
		return false;
	});

  //ハンバーガーメニュー
  $('.hambager').on('click', function () {
		navOpen();
	});
  let navFlg = false;
  function navOpen() {
    if (!navFlg) {
      $('.hambager-content').addClass('is-ham-open');
      $('.mega-menu').addClass('is-megamenu-open');
      $('.header_inner').addClass('is-megamenu-icon');
      navFlg = true;
    } else {
      $('.hambager-content').removeClass('is-ham-open');
      $('.mega-menu').removeClass('is-megamenu-open');
      $('.header_inner').removeClass('is-megamenu-icon');
      navFlg = false;
    }
  }

  //スクロールフェードイン
  const fadeIn = document.querySelectorAll(".fadeIn");
  const options = {
    rootMargin: '0px',
    threshold: 0.6
  };
  const observer = new IntersectionObserver(showElement, options);
  fadeIn.forEach((fadeIn) => {
    observer.observe(fadeIn);
  });
  function showElement(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }

  //mv下でヘッダー切り替え
  $(window).scroll(function () {
    let scroll = $(this).scrollTop();
    // モバイル表示の場合
    if ($(window).width() < 769) {
        // スクロール位置が500より大きい場合
        if (450 < scroll) {
            $('.scroll-header').addClass('header-active');
        } else {
            $('.scroll-header').removeClass('header-active');
        }
    }
    // モバイル表示ではない場合
    else {
        // スクロール位置が650より大きい場合
        if (650 < scroll) {
            $('.scroll-header').addClass('header-active');
        } else {
            $('.scroll-header').removeClass('header-active');
        }
    }
  });

  // 無限スライダー
  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 3, 
    speed: 5000, 
    allowTouchMove: false,
  });
});