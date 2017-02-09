$(function() {
	// 定义钢琴一级查询
	function chaxunone(data) {
		$('.loader').show();
		$.ajax({
			url: '/e/zjk/gangqin/one.php',
			type: 'post',
			dataType: 'text',
			data: {fenlei1: data},
		})
		.done(function(msg) {
			$('.loader').hide();
			console.log({fenlei1: data});
			console.log(msg);
			$('.list-right-current>ul').empty().append(msg);
			console.log("success");
		})
		.fail(function() {
			$('.loader').hide();
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	}

	// 定义钢琴二级查询
	function chaxuntwo(data) {
		$('.loader').show();
		$.ajax({
			url: '/e/zjk/gangqin/two.php',
			type: 'post',
			dataType: 'text',
			data: {fenlei2: data},
		})
		.done(function(msg) {
			$('.loader').hide();
			$('.list-right-current>ul').empty().append(msg);
			console.log("success");
		})
		.fail(function() {
			$('.loader').hide();
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	}




});