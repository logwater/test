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