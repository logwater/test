//收藏夹
$('.shoucangj').hover(function(){
	$(this).css('color','red')
},function(){
	$(this).css('color','#666666')
})
//删除选中的商品 颜色变红
$('.clearselet').hover(function(){
	$(this).css('color','red')
},function(){
	$(this).css('color','#666666')
})
//移入收藏夹
$('.move').children().eq(0).hover(function(){
	$(this).css('color','red')
},function(){
	$(this).css('color','#666666')
})
//分享
$('.sale').children().eq(0).hover(function(){
	$(this).css('color','red')
},function(){
	$(this).css('color','#666666')
})
//删除单品变红
$('.my-del').hover(function(){
	$(this).css('color','red')
},function(){
	$(this).css('color','#666666')
})

//增加按钮    
var num=1
$('.add').click(function(){
	//获取上一个当前的值 再加1  获取的转化成数值
	var st=parseInt($(this).prev().val())+1
	//上一个的值
	$(this).prev().val(st);	
    var num=$(this).parents('.sec-goods-1').find('.hxl-price').html()
	var sp=st*parseInt(num.substring(1));	
	$(this).parents('.sec-goods-1').find('.ct-price').html('¥'+sp)
	checkNum();   //调用函数
})

//减少按钮
$('.sign').click(function(){	
	var st=parseInt($(this).next().val())-1;
	if (st<1) {
		retuen;
	}
	$(this).next().val(st)
	var num=$(this).parents('.sec-goods-1').find('.hxl-price').html();
	var sp=st*parseInt(num.substring(1));
	$(this).parents('.sec-goods-1').find('.ct-price').html('¥'+sp)
	checkNum();
})

//全选
$('.all-checkbox').click(function(){
   //属性的反值	
	$('input').prop('checked',$(this).prop('checked'))
	//如果这个不选择  总价为0
	if (this.checked==false) {
		$(".set-num").html('0');
    	$('#all-price').html('￥0.00');   
	}
	checkNum();
})

//点击其中一个复选框之后   全选框不选中
$('.my-select').click(function(){
	if (!$(this).prop('checked')) {
		$('.all-checkbox').prop('checked',false)
		//如果全部不点击  结算为0
		$(".set-num").html('0');
    	$('#all-price').html('￥0.00');   
	}
	checkNum();		
})
	


//删除某一项商品
$('.my-del').click(function(){
	if (window.confirm("确认删除商品吗？")) {
		$(this).parent().parent().remove();
	}	
	$(".set-num").html('0');
    $('#all-price').html('￥0.00');
	checkNum();
})

//批量删除
$('.clearselet').click(function(){
	if (window.confirm("确定要删除所选中的商品吗？")) {
		$('.sec-goods-1').each(function(){
		if ($(this).find('input').prop('checked')) {
			$(this).remove();
		}
		//如果删除了全部 内边距100px  距离结算那一行
//		$('section').css('padding-bottom','100px')
	})
	}
	$(".set-num").html('0');
    $('#all-price').html('￥0.00');
	checkNum(); 
})



//件数总计
    function checkNum(){
        var num=0;
        var sum=0;
       
        $(".my-select").each(function(){
        	    var b=$($(this).parents('.sec-goods-1').find('.sl')).val(); 
            	var c=$($(this).parents('.sec-goods-1').find('.hxl-price')).text();
            if(this.checked==true){ 
				var bt=parseInt(b)
				var ct=parseInt(c.substring(1));
				var jiage=bt*ct;
				sum+=jiage;
				num+=bt
       		 $(".set-num").html(num);
       		 $('#all-price').html('￥'+sum);
   			}else {
//  			 var b=$($(this).parents('.sec-goods-1').find('.sl')).val(); 
//  			sum=sum-jiage;
   	
//     			 $(".set-num").html('0');
//  			$('#all-price').html('￥0.00');     	
   	 		} 
   	 		if(num!=0 && sum!=0){
             	if(!$('.pay').hasClass('my-pay')){
               		$('.pay').addClass('my-pay');
            	}
        	}else if($('.pay').hasClass('my-pay')){
                $('.pay').removeClass('my-pay');
           }        
		})
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