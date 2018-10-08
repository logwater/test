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

//input框的获取焦点和失去焦点
$('.je-txt').focus(function(){//获取焦点
	$(this).css('border','1px solid #c1c1c1');
})
$('.je-txt').blur(function(){//失去焦点
	$(this).css('border','1px solid #e9e9e9');
	if ($('.je-txt').val()==""||$('.je-txt').val().length<4||$('.je-txt').val().length>16) {
			$('.je-usertip').html("账号长度为4-16且不为空")
			$('.je-usertip').css({'font-size':'10px','color':'red'});
		}else{
			$('.je-usertip').html("请进行下一步");
			$('.je-usertip').css({'font-size':'10px','color':'lime'});
		}
})
$('.je-txt1').focus(function(){//获取焦点
	$(this).css('border','1px solid #c1c1c1');
})
$('.je-txt1').blur(function(){//失去焦点
	$(this).css('border','1px solid #e9e9e9');
	if ($('.je-txt1').val()==""||$('.je-txt1').val().length<6||$('.je-txt1').val().length>14) {
			$('.je-passtip').html("密码长度为6-14且不为空");
			$('.je-passtip').css({'font-size':'10px','color':'red'})
		}else{
			$('.je-passtip').html("密码输入成功")
			$('.je-passtip').css({'font-size':'10px','color':'lime'})
		}
})



//提交登录
txt.onsubmit=function(a){
	var flag=true;	
	//处理输入账号的input
		if ($('.je-txt').val()==""||$('.je-txt').val().length<4||$('.je-txt').val().length>16) {
			$('.je-usertip').html("账号长度为4-16且不为空")
			$('.je-usertip').css({'font-size':'10px','color':'red'});
			flag=false;
		}else{
			$('.je-usertip').html("请进行下一步");
			$('.je-usertip').css({'font-size':'10px','color':'lime'});
		}
		//处理输入密码的input
		if ($('.je-txt1').val()==""||$('.je-txt1').val().length<6||$('.je-txt1').val().length>14) {
			$('.je-passtip').html("密码长度为6-14且不为空");
			$('.je-passtip').css({'font-size':'10px','color':'red'})
			flag=false;
		}else{
			$('.je-passtip').html("密码输入成功")
			$('.je-passtip').css({'font-size':'10px','color':'lime'})
		}
		if (flag) {
			alert('登录成功！')
		}
		if(!flag){
			a.preventDefault();
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