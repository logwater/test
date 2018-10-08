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

//对价格的两个框进行获取焦点和失去焦点，改变确定框的显示或者隐藏和input框的边框粗细和颜色
$('.ring-box5').children('input').focus(function(){
	$(this).css('border','2px solid #f13a3a');
	$(this).siblings('input').css('border','1px solid #d6d6d6');
	$('.obtn').css('display','inline-block');
	$('.ring-box5').css({'background-color':'white','box-shawdow':'1px 1px 6px rgba(0,0,0,0.2)'});
	
})
$('.ring-box5').children('input').blur(function(){
	$(this).css('border','1px solid #d6d6d6');
	$(this).siblings('input').css('border','1px solid #d6d6d6');
	$('.obtn').css('display','none');
	$('.ring-box5').css('background-color','#f5f5f5');
})


//鼠标移入移出：对箭头
$('.a2-pic').mouseenter(function(){
	$('.up').css('display','none')
	$('.down').css('display','block')
})
$('.a2-pic').mouseleave(function(){
	$('.up').css('display','block')
	$('.down').css('display','none')
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