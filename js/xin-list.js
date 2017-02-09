/**
 * Created by Freed on 2017/1/9.
 * E-mail:flyxz@126.com.
 * GitHub:FreedGo@github.com.
 */

/**
 * 定义钢琴一级查询
 * @param data
 * @param data2
 */
function chaxunone(data,data2) {
		$('.list-right-current>ul').empty();
		$('.loaders').show();
		$('.list-right-head-title').html(data2);
		$.ajax({
			url: '/e/zjk/gangqin/one.php',
			type: 'post',
			dataType: 'html',
			data: {fenlei1: data},
		})
			.done(function(msg) {
				$('.loaders').hide();
				console.log({fenlei1: data});
				console.log(msg);
				$('.list-right-current>ul').append(msg);
				console.log("success");
			})
			.fail(function() {
				$('.loaders').hide();
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});

	}
/**
 * 查询热门钢琴
 * @param data
 */
function chaxunremen(data) {
	$('.list-right-current>ul').empty();
	$('.loaders').show();
	$.ajax({
		url: '/e/zjk/chanpin/isgood.php',
		type: 'post',
		dataType: 'html',
		data: {fenlei2: data},
	})
		.done(function(msg) {
			if (msg === null || msg === 'null' || msg === ''){
				$('.list-right-current>ul').html('<p>没有更多产品了！</p>');
			}else{
				listsData = eval('('+msg+')');
				//生成页码
				creatpagination(listsData);
				//加载第一页
				loadData(1);
			}
			$('.loaders').hide();
		})
		.fail(function() {
			$('.loaders').hide();
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

}
/**
 * 定义钢琴二级查询
 * @param data
 */
function chaxuntwo(data,obj) {
	$('.list-right-current>ul').empty();
	$('.loaders').show();
	listGroupIndex = obj.parents('.list-group-warp').index();
	$('.list-title-subtitle').attr('data-click',listGroupIndex).children('h3').html(obj.parents('.list-group-warp').find('.all-list-left-title a').html());
	$.ajax({
		url: '/e/zjk/chanpin/xin.two.php',
		type: 'post',
		dataType: 'html',
		data: {fenlei2: data},
	})
		.done(function(msg) {
			if (msg === null || msg === 'null' || msg === ''){
				$('.list-right-current>ul').html('<p>没有更多产品了！</p>');
			}else{
				//json处理
				listsData = eval('('+msg+')');
				//生成页码
				creatpagination(listsData);
				//加载第一页
				loadData(1);
			};
			$('.loaders').hide();
		})
		.fail(function() {
			$('.loaders').hide();
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

}
/**
 * 定义钢琴文章加载
 * @param data
 * @param data2
 */
function chaxunthree(data,obj) {
	$('.list-right-current>ul').empty();
	$('.loaders').show();
	$('.pagination').empty();//清空页码
	listGroupIndex = obj.parents('.list-group-warp').index();
	$('.list-title-subtitle').attr('data-click',listGroupIndex).children('h3').html(obj.parents('.list-group-warp').find('.all-list-left-title a').html());
	$.ajax({
		url: '/e/zjk/zhishi/index.php',
		type: 'post',
		dataType: 'html',
		data: {classid: data},
	})
		.done(function(msg) {
			$('.loaders').hide();
			$('.list-right-current>ul').html(msg);
			console.log("success");
		})
		.fail(function() {
			$('.loaders').hide();
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});

}

/**
 * 页码生成
 * @param obj {json},全局缓存的产品列表
 */
function creatpagination(obj) {
	var pageTotalNum = Math.ceil(obj.length/6);//向上取整
	$('.pagination').empty();
	for (var i = 1 ; i <= pageTotalNum ; i++){
		$('.pagination').append(
			'<li class="page-list-item f-l-l" data-page="' + i +
			'"><a>' + i +
			'</a></li>'
		)
	};
	$('.page-list-item:first').addClass('active');
}
/**
 * 加载数据
 * @param pageNum {number},页码
 */
function loadData(pageNum) {
	$.each(listsData,function (index,val) {
		if (index >= (pageNum-1)*6 && index < pageNum*6 ){
			$('.load-all-product').append(
				'<li class="list-product f-l-l"><a href="' +val.titleurl+
				'"><div class="list-product-title-warp"><h4 class="list-product-title">' + val.title +
				'</h4><div class="list-product-price">$' + val.money +
				'</div></div><div class="list-product-img"><img src="' + val.titlepic +
				'"alt="' + val.title +
				'"></div></a></li>'
			)
		}
	})
}


$(function(){
	//全局变量
	var subtitle = $('.list-title-subtitle'),
		dataClick,//右上角动态按钮的标记值
		listGroupIndex,//左侧目录的index值
		listsData = [];//全局缓存产品数据
	//1.左侧栏一级目录点击
	$('.all-list-left-title').on('click',function(){
		$(this).siblings('dl').stop(true).slideToggle(500);
		$(this).children('.sanjiao').toggleClass('on');
		listGroupIndex = $(this).parent('.list-group-warp').index();
		$('.list-title-subtitle').attr('data-click',listGroupIndex).children('h3').html($(this).children('a').html());
	});

	//2.右上角的标题动态点击
	$('.list-title-subtitle').on('click',function () {
		dataClick = parseInt(subtitle.attr('data-click'));
		$('.list-group-warp').eq(dataClick).children('.all-list-left-title').trigger('click');
	});
	//3.页码点击
	$('.pagination').on('click','.page-list-item',function(){
		$(this).addClass('active').siblings().removeClass('active');
		var pageNum = parseInt($(this).attr('data-page'));
//		console.log(pageNum);
		$('.load-all-product').empty();
		loadData(pageNum);

	})
});