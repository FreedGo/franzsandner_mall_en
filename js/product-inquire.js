$(function() {
	//正品查询1.0.1，点击搜索向后台请求
	var fa = $('.inquire-sub'),
		loader = $('.loaders');
		fa.click(function(event) {
			var fb = $('#search-con').val();
			loader.show();
			$.ajax({
				url: '/e/zjk/zhengpin.ajax.php',
				type: 'post',
				dataType: 'text',
				data: {'title': fb},
			})
			.done(function(msg) {
				loader.hide();
				console.log("success");
				console.log({'inquiresub': fb});
				console.log(msg);
				$('.inquire-output-msg').show();
				if (msg==1) {
					$('.p1').hide();
					$('.inquire-output-msg tbody').empty();
					$('.p2').empty().html('未查詢到信息，請您致電查詢：400-696-2818')
				}
				else {
					$('.p1').hide();
					$('.inquire-output-msg tbody').empty().append(msg);
					$('.p2').empty().html('恭喜，您查詢的產品為法蘭山德正品！');

				}
			})
			.fail(function() {
				loader.hide();
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
		});


});