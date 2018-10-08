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

//section
$('textarea').focus(function(){//留言框获取焦点时修改border
	$(this).css('border','1px solid #c1c1c1');
})
$('textarea').blur(function(){//留言框失去焦点
	$(this).css('border','1px solid #e9e9e9');
})
$('.ophone').focus(function(){
	$(this).css('border','1px solid #c1c1c1');
})
$('.ophone').blur(function(){
	$(this).css('border','1px solid #e9e9e9');
})
$('.je-bigbox1').children('input').focus(function(){
	$(this).css('border','1px solid #c1c1c1');	
})

$('.je-bigbox1').children('input').eq(0).blur(function(){//第一个input失去焦点时进行提示
	$(this).css('border','1px solid #e9e9e9');
	if ($('.je-bigbox1').children('input').eq(0).val()==""||$('.je-bigbox1').children('input').eq(0).val().length<4||$('.je-bigbox1').children('input').eq(0).val().length>16) {
		$('.je-bigbox1').children('span').eq(0).html('账号长度为4-16且不为空')
		$('.je-bigbox1').children('span').eq(0).css('font-size','12px')
	}else{
		$('.je-bigbox1').children('span').eq(0).html('输入成功')
		$('.je-bigbox1').children('span').eq(0).css({'font-size':'12px','color':'lime'})
	}
})
$('.je-bigbox1').children('input').eq(1).blur(function(){
	$(this).css('border','1px solid #e9e9e9');
	if ($('.je-bigbox1').children('input').eq(1).val()==""||$('.je-bigbox1').children('input').eq(1).val().length<6||$('.je-bigbox1').children('input').eq(1).val().length>14) {
		$('.je-bigbox1').children('span').eq(1).html('密码长度为6-14且不为空')
		$('.je-bigbox1').children('span').eq(1).css('font-size','12px')
	}else{
		$('.je-bigbox1').children('span').eq(1).html('输入成功')
		$('.je-bigbox1').children('span').eq(1).css({'font-size':'12px','color':'lime'})
	}
})
$('.je-bigbox1').children('input').eq(2).blur(function(){
	$(this).css('border','1px solid #e9e9e9');
	if ($('.je-bigbox1').children('input').eq(2).val()==""||$('.je-bigbox1').children('input').eq(2).val().length<6||$('.je-bigbox1').children('input').eq(2).val().length>14) {
		$('.je-bigbox1').children('span').eq(2).html('密码长度为6-14且不为空')
		$('.je-bigbox1').children('span').eq(2).css('font-size','12px')
	}else{
		$('.je-bigbox1').children('span').eq(2).html('输入成功')
		$('.je-bigbox1').children('span').eq(2).css({'font-size':'12px','color':'lime'})
	}
	if ($('.je-bigbox1').children('input').eq(1).val()!=$('.je-bigbox1').children('input').eq(2).val()) {
		$('.je-bigbox1').children('span').eq(2).html('密码不一致');
		$('.je-bigbox1').children('span').eq(2).css({'font-size':'12px','color':'red'});
	}
})
$('.je-bigbox1').children('input').eq(3).blur(function(){
	$(this).css('border','1px solid #e9e9e9');
	if ($('.je-bigbox1').children('input').eq(3).val()==""||$('.je-bigbox1').children('input').eq(3).val().length<2||$('.je-bigbox1').children('input').eq(3).val().length>7) {
		$('.je-bigbox1').children('span').eq(3).html('姓名长度为2-7且不为空')
		$('.je-bigbox1').children('span').eq(3).css('font-size','12px')
	}else{
		$('.je-bigbox1').children('span').eq(3).html('输入成功')
		$('.je-bigbox1').children('span').eq(3).css({'font-size':'12px','color':'lime'})
	}
})
$('.je-bigbox1').children('input').eq(4).blur(function(){
	$(this).css('border','1px solid #e9e9e9');
})
$('.je-bigbox1').children('input').eq(5).blur(function(){
	$(this).css('border','1px solid #e9e9e9');
	if ($('.je-bigbox1').children('input').eq(5).val()==""||$('.je-bigbox1').children('input').eq(5).val().length!=11) {
		$('.je-bigbox1').children('span').eq(4).html('电话长度为11且不为空')
		$('.je-bigbox1').children('span').eq(4).css('font-size','12px')
		flag=false;
	}else{
		$('.je-bigbox1').children('span').eq(4).html('输入成功')
		$('.je-bigbox1').children('span').eq(4).css({'font-size':'12px','color':'lime'})
	}
})


//提交事件的各种情况
txt1.onsubmit=function(b){
	var flag=true;
	if ($('.je-bigbox1').children('input').eq(0).val()==""||$('.je-bigbox1').children('input').eq(0).val().length<4||$('input').eq(0).val().length>16) {
		$('.je-bigbox1').children('span').eq(0).html('账号长度为4-16且不为空')
		$('.je-bigbox1').children('span').eq(0).css('font-size','12px')
		flag=false;
	}else{
		$('.je-bigbox1').children('span').eq(0).html('输入成功')
		$('.je-bigbox1').children('span').eq(0).css({'font-size':'12px','color':'lime'})
	}
	
	if ($('.je-bigbox1').children('input').eq(1).val()==""||$('.je-bigbox1').children('input').eq(1).val().length<6||$('.je-bigbox1').children('input').eq(1).val().length>14) {
		$('.je-bigbox1').children('span').eq(1).html('密码长度为6-14且不为空')
		$('.je-bigbox1').children('span').eq(1).css('font-size','12px')
		flag=false;
	}else{
		$('.je-bigbox1').children('span').eq(1).html('输入成功')
		$('.je-bigbox1').children('span').eq(1).css({'font-size':'12px','color':'lime'})
	}
	
	if ($('.je-bigbox1').children('input').eq(2).val()==""||$('.je-bigbox1').children('input').eq(2).val().length<6||$('.je-bigbox1').children('input').eq(2).val().length>14) {
		$('.je-bigbox1').children('span').eq(2).html('密码长度为6-14且不为空')
		$('.je-bigbox1').children('span').eq(2).css('font-size','12px')
		flag=false;
	}else{
		$('.je-bigbox1').children('span').eq(2).html('输入成功')
		$('.je-bigbox1').children('span').eq(2).css({'font-size':'12px','color':'lime'})
	}
	
	if ($('.je-bigbox1').children('input').eq(3).val()==""||$('.je-bigbox1').children('input').eq(3).val().length<2||$('.je-bigbox1').children('input').eq(3).val().length>7) {
		$('.je-bigbox1').children('span').eq(3).html('姓名长度为2-7且不为空')
		$('.je-bigbox1').children('span').eq(3).css('font-size','12px')
		flag=false;
	}else{
		$('.je-bigbox1').children('span').eq(3).html('输入成功')
		$('.je-bigbox1').children('span').eq(3).css({'font-size':'12px','color':'lime'})
	}
	
	if ($('.je-bigbox1').children('input').eq(5).val()==""||$('.je-bigbox1').children('input').eq(5).val().length!=11) {
		$('.je-bigbox1').children('span').eq(4).html('电话长度为11且不为空')
		$('.je-bigbox1').children('span').eq(4).css('font-size','12px')
		flag=false;
	}else{
		$('.je-bigbox1').children('span').eq(4).html('输入成功')
		$('.je-bigbox1').children('span').eq(4).css({'font-size':'12px','color':'lime'})
	}
	
	if ($('.je-bigbox1').children('input').eq(1).val()!=$('.je-bigbox1').children('input').eq(2).val()) {
		$('.je-bigbox1').children('span').eq(2).html('密码不一致');
		$('.je-bigbox1').children('span').eq(2).css({'font-size':'12px','color':'red'});
		flag=false;
	}
	if (flag) {
		alert('您已注册成功，请登陆！')
	}
	
	if(!flag){
			b.preventDefault();
	}	
}

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
