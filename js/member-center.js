/*
 * By Freed 
 * flyxz@126.com
 * 2016-6-27
*/
$(function() {
	// 个人中心-账户管理1.0，修改信息切换按钮
	var fa = $('.edi-msg-type'),//上方按钮
		fb = $('.show-member-msg-down'),//下方切换
		fc;//上方按钮index值
		fa.on('click', function(event) {
			fc = $(this).index();
			$(this).addClass('current').siblings('li').removeClass('current');
			fb.eq(fc).addClass('db').siblings('div').removeClass('db');
		});
	// 个人中心-订单管理1.0，点击去支付弹支付框
	var fd = $('.order-list-msg-down-left4 a'),
		fe = $('.shutUp');
		fd.on('click', function(event) {
			$(this).parents('.order-list-msg').siblings('.payWrap').show();
		});
		fe.on('click', function(event) {
			$(this).parent().hide();
		});
	//不同的付款方式
		// 支付宝支付点击事件
		$('.alipay').click(function(event) {

			$('.payImg').css('borderColor', '#ccc');
			$('.payImg1').css('borderColor', '#cb7047');
			// 填写支付宝表单提交url
			$('.payInfo').attr('action', '1.php');

		});
		// 微信支付点击事件
		$('.txpay').click(function(event) {

			$('.payImg').css('borderColor', '#ccc');
			$('.payImg2').css('borderColor', '#cb7047');
			// 填写微信表单提交url
			$('.payInfo').attr('action', '2.php');

		});
		// 网银支付点击事件
		$('.ccbpay').click(function(event) {

			$('.payImg').css('borderColor', '#ccc');
			$('.payImg3').css('borderColor', '#cb7047');
			// 填写建行表单提交url
			$('.payInfo').attr('action', '3.php');

		});


		// 订单选择地址提交1.0.1选择公司发票显示填写抬头框
		var ff = $('.invoice-change'),//发票选择下拉菜单
			fg = $('.company-invoice'),//公司发票抬头填写框
			fh = $('.invoice-explain');//发票内容说明
			ff.on('change',  function(event) {
				if (ff.val()==0) {
					fg.fadeOut(200);
					fh.fadeOut(200);
				}
				else if(ff.val()==1) {
					fg.fadeOut(200);
					fh.fadeIn(200);
				}
				else if(ff.val()==2){
					fg.fadeIn(200);
					fh.fadeIn(200);
				}
			});
		// 管理地址省级自动获取
		//首先封装页面加载获取当前所在城市信息的函数
	function getCurrentCity(){
		var subCity1;
		// 第一步,向高德API发送请求并获得访问者所在省份
         $.ajax({
            type: "get",
//             url: "http://webapi.amap.com/maps/ipLocation?key=4a84cf8078fb847fd4072da2dbc9b6b7",//自己申请的高德key，2000次每天
	         url:'http://restapi.amap.com/v3/ip?key=7a178998b6550b21f6a2fb88d3285fcd',
             dataType: 'text',
             // contentType:'application/x-www-form-urlencoded;charset=UTF-8',
             success: function(data) {
                 //转换为JSON对象
                 var jsonObj = eval("(" + data.replace('(','').replace(')','').replace(';','') + ")");
                 //当前城市
                 // $("#shenfen>p").html('当前:'+jsonObj.province);
                 console.log(jsonObj);
                 subCity1=jsonObj.province;
                 subCity1=subCity1.substring(0,subCity1.length-1);//拼接字符串，减去最后一位子副
                 console.log(subCity1);
                 subCity2=jsonObj.city;
                 console.log(subCity2);
                // 第二步，自动更改省级和市级地址
                // $('#shenfen p').html(subCity1);
                // $('#sfdq_tj').val(subCity1);
                // $('#chengshi p').html(subCity2);
                // $('#csdq_tj').val(subCity2);
                for (var i = 0; i < $('.m_zlxg1 li').length; i++) {
                	if ($('.m_zlxg1 li').eq(i).html()==subCity1) {
                		$('.m_zlxg1 li').eq(i).trigger('click');
                		console.log(i);
                		$('.m_zlxg1').hide();
                	}
                	// console.log(i);

                }
            }
         });

	// 自定义函数结束				
     }

     //页面加载完毕调用自己封装的函数来获取当前所在城市信息
		window.onload=function(){
			getCurrentCity();
		}

		// 点击关闭物流信息
		$('.look-express-colse').on('click', function(event) {
			 $(".look-express-detaill-warp").empty();
			 $('.look-express-colse').hide();
		});


















});