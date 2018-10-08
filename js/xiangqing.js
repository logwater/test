//头部
$('.head .headtwo .top4').hover(function(){
	$('.head .hide_one').stop().slideDown(500)
},function(){
	$('.head .hide_one').stop().slideUp()
})
$('.head .headtwo .top5').hover(function(){
	$('.head .hide_two').stop().slideDown(500)
},function(){
	$('.head .hide_two').stop().slideUp()
})


/*侧边效果*/
$('.sp-lef>a').hover(function(){
	$(this).children('.inser').show(100)
},function(){
	$('.inser').hide();
})

//二维码出现
$('.my-col').children().eq(1).hover(function(){
	$('.ewm').show(200);
},function(){
	$('.ewm').hide(100);
})

//数量按钮
var num=1;
$('.btn-a').click(function(){
	num+=1
	$('.inp').attr('value',num);
})
$('.btn-b').click(function(){
	num-=1;
	if (num>=0) {
		$('.inp').attr('value',num);
	}else{
		num=0
		$('.inp').attr('value',num);
	}
})

//tab
$('.tab').children().click(function(){
	var num=$(this).index();
//	$('.tab-con').children().eq(num).css({'display',''});
	$('.tab-con').children().eq(num).css('display','block').siblings().css('display','none');
	$(this).addClass('current').siblings().removeClass('current');
//	$('.wl::before').css('right','-6px');
})

//收藏效果
$('.sale01').hover(function(){
	$('.my-icon').css('color','#f13a3a')	
	$(this).children().eq(1).css('color','#f13a3a');
},function(){
	$('.my-icon').css('color','#666')	
	$(this).children().eq(1).css('color','#666');	
})
$('.sale02').hover(function(){
	$('.my-icon2').css('color','#f13a3a')
	$('.sst').children().eq(1).css('color','#f13a3a')
	$('.weixin').css('display','block')
//	$('.sa').css('border','1px solid #eeeeee')
	$('.sst').addClass('sa')
},function(){
	$('.my-icon2').css('color','#666')
	$('.sst').children().eq(1).css('color','#666')
	$('.weixin').css('display','none')
	$('.sst').removeClass('sa')
})

//评价五星
/*$('.list>li').hover(function(){
	$(this).css('color','#f13a3a');
},function(){
	$(this).css('color','#666');	
})*/

//放大镜
$('.fangdajing').hover(function(e){
	$('.small').hide()
	$('.big').show()
},function(){
	$('.small').show()
	$('.big').hide()
})
$('.fangdajing').mousemove(function(e){
	//获取光标距离页面的距离
	var x=e.pageX,
		y=e.pageY;
	//获取父级p的坐标
	var xp=$('.fangdajing').offset().left;
	var yp=$('.fangdajing').offset().top;
	//在p内移动的距离 就是大图移动的反距离
	var lt=x-xp
	var tp=y-yp;
	$('.big').css({'left':-lt+'px','top':-tp+'px'})
})

//侧边栏
//$(window).open(function(){
//	$('aside').slideDown()
//})
$('aside>div').hover(function(){
	$(this).css('background','#c40000')
},function(){
	$(this).css('background','#202020')
})
$('aside>div').hover(function(){
	$(this).children('.moveone').stop().fadeIn(100).css({'transform':'translate(26px,0)','transition':'all 0.5s'})
},function(){
	$(this).children('.moveone').stop().hide().css({'transform':'translate(0,0)'})
})
$('aside .aside3').hover(function(){
	$(this).children('.box1').hide();
	$(this).children('.box2').hide()
},function(){
	$(this).children('.box1').show()
	$(this).children('.box2').show()
})
$('aside .aside4').hover(function(){
	$('.movetwo').stop().show()
},function(){
	$('.movetwo').stop().hide()
})
$('aside .aside6').hover(function(){
	$('.movethree').stop().show()
},function(){
	$('.movethree').stop().hide()
})
$('aside .aside7').click(function(){
	$(window).scrollTop(0)
})
$(window).resize(function(){
	var wh=$(window).height()
	if (wh<520) {
		$('aside .aside5').hide();
		$('aside .aside6').hide();
		$('aside .aside7').hide()
	}else{
		$('aside .aside5').show();
		$('aside .aside6').show();
		$('aside .aside7').show()
	}
})