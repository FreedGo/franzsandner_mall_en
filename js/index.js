/*
* @Author: Freed
* @Date:   2016-05-22 10:54:43
* @e-mail:flyxz@126.com
* @Last Modified by:   Freed
* @Last Modified time: 2016-05-22 16:08:25
*/
// $(function() {
// // 1.0 首页nav子菜单显示与隐藏	
// 	var m2 = $('#m2'),
// 		m3 = $('#m3'),
// 		m4 = $('#m4'),
// 		m2Son = $('#m2-son'),
// 		m3Son = $('#m3-son'),
// 		m4Son = $('#m4-son'),
// 		mSonWarp = $('.head-nav-main'),
// 		timer1;
// 		// 1.0.1
// 		m2.hover(function() {
// 			mSonWarp.stop(true).slideDown(400);
// 			m2Son.stop(true).show().siblings('.sub').hide();
// 		}, function() {
// 			mSonWarp.stop(true).slideUp(400);
// 		});
// 		m2Son.hover(function() {
// 			mSonWarp.stop();
// 		}, function() {
// 			mSonWarp.stop(true).slideUp(400);
// 		});
// 		// 1.0.2
// 		m3.hover(function() {
// 			mSonWarp.stop(true).slideDown(400);
// 			m3Son.stop(true).show().siblings('.sub').hide();
// 		}, function() {
// 			mSonWarp.stop(true).slideUp(400);
// 		});
// 		m3Son.hover(function() {
// 			mSonWarp.stop();
// 		}, function() {
// 			mSonWarp.stop(true).slideUp(400);
// 		});
			
// 		// 1.0.3
// 		m4.hover(function() {
// 			mSonWarp.stop(true).slideDown(400);
// 			m4Son.stop(true).show().siblings('.sub').hide();
// 		}, function() {
// 			mSonWarp.stop(true).slideUp(400);
// 		});
// 		m4Son.hover(function() {
// 			mSonWarp.stop();
// 		}, function() {
// 			mSonWarp.stop(true).slideUp(400);
// 		});

// 		// 1.1首页的fullpage参数配置

// });


$(function(){
	$('#dowebok').fullpage({
		sectionsColor: ['#C56400', '#C56400','#fff'],
		anchors: ['page1', 'page2', 'page3'],
		menu: '#menu',
		navigation: true,
		afterLoad: function(anchorLink, index){//开屏动画
			if (index == 1) {
				$('.head-warp').slideDown(680)
			};
			if(index == 2){//第二屏开始动画
				$('.section2').find('.index-news-up').eq(0).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.index-news-up').eq(1).delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.index-news-up').eq(2).delay(1000).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section2').find('.index-news-up').eq(3).delay(1500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');

			}
			if(index == 3){//第三屏开始动画
				$('.section3').find('.piano-bg-warp').stop(true).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section3').find('.index-pinao-price').stop(true).delay(500).animate({
					left: '0'
				}, 1500, 'easeOutExpo');
				$('.section3').find('.index-pinao-show-halfpage-warp').stop(true).delay(1000).slideDown(1000);
				$('.section3').find('.halfpage2').stop(true).delay(1000).animate({
					right: '0'
				}, 1500, 'easeOutExpo');
				$('.section3').find('.halfpage1').stop(true).delay(1000).animate({
					right: '0'
				}, 1500, 'easeOutExpo');
			}
			if(index == 4){
				$('.section4').find('.index-violin-show').fadeIn(1000).animate({'width': 1200}, 1000);
				$('.section4').find('.index-violin-show-right').delay(1000).animate({'width': 700}, 1000);
				$('.section4').find('.violin-list-lit').delay(2000).animate({'left': 0}, 1000);
				$('.section4').find('.violin-list-big').delay(3000).animate({'left': 0}, 1000);
			}
			if(index == 5){
				$('.section5').find('.index-jita-show').fadeIn(1000).animate({'width': 1200}, 1000);
				$('.section5').find('.index-jita-show-right').delay(1000).animate({'width': 700}, 1000);
				$('.section5').find('.jita-list-lit').delay(2000).animate({'right': 0}, 1000);
				$('.section5').find('.jita-list-big').delay(3000).animate({'right': 0}, 1000);
			}
		},
		onLeave: function(index, direction){//离屏动画
			if (index == '1') {$('.head-warp').slideUp(680)};
		}
	});
	setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 6000);

   
});