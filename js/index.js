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

//var otop4=$('.head .headtwo .top4');
//var otop5=$('.head .headtwo .top5');
//$('.head .headtwo .top4').hover(function(){
//	if (otop4.is(':hidden')) {
//		$('.head .hide_one').stop().slideDown(500)
//	} else{
//		$('.head .hide_one').stop().show()
//	}
//},function(){
//	$('.head .hide_one').stop().slideUp()
//})
//$('.head .headtwo .top5').hover(function(){
//	if (otop5.is(':hidden')) {
//		$('.head .hide_two').stop().slideDown(500)
//		
//	} else{
//		$('.head .hide_two').stop().show()
//	}
//},function(){
//	$('.head .hide_two).stop().slideUp()
//})

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

//轮播图
var num=0;
function go(){
	timer=setInterval(function(){
		num++;
		$('.carousel>.one').stop().css('transform','rotateY('+(-num*120)+'deg)');
	},4000)
}
var hiddenProperty = 'hidden' in document ? 'hidden' :
	'webkitHidden' in document ? 'webkitHidden' :
	'mozHidden' in document ? 'mozHidden' :
	null;
var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');
var onVisibilityChange = function(){
	if (!document[hiddenProperty]) {
		console.log('页面激活');
		go()
	}else{
		console.log('页面非激活');
		clearInterval(timer)
	}}
document.addEventListener(visibilityChangeEvent, onVisibilityChange);
//go()
$('.carousel').hover(function() {
	clearInterval(timer)
}, function() {
	go()
});
$('.carousel .right').click(function(event) {
	num++;
	$('.carousel>.one').css('transform','rotateY('+(-num*120)+'deg)');
});
$('.carousel .left').click(function(event) {
	num--;
	$('.carousel>.one').css('transform','rotateY('+(-num*120)+'deg)');
});

//精选裸钻
$('.category1 li a').hover(function() {
	$(this).children('div').stop().fadeIn(500)
}, function() {
	$(this).children('div').stop().fadeOut(500)
});

//钻石对戒——黄金特色
$(".category2 li[class!='one'] img").hover(function(){
	$(this).stop().animate({'margin':'0px 0px 0px -10px'},500);
	$(this).css('cursor','pointer')
},function(){
	$(this).stop().animate({'margin':'0px'},500);
})

//三级联动
var num1; 
var num2;
var provinces=["宁夏回族自治区","内蒙古自治区","天津","香港","广东省","北京","江西省","西藏自治区","广西壮族自治区","山东省",
				"陕西省","海外","海南省","黑龙江省","云南省","上海","甘肃省","吉林省","澳门","湖南省",
				"新疆维吾尔自治区","四川省","贵州省","台湾","重庆","河北省","浙江省","河南省","山西省","江苏省",
				"湖北省","安徽省","青海省","福建省"];
var cities=[["银川","石嘴川","吴忠","固原","中卫"],["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","阿拉善","巴彦淖尔","兴安","锡林郭勒","乌兰察布"],["天津"],["沈阳","锦州","丹东","阜新","营口","鞍山","大连","本溪","抚顺","葫芦岛","朝阳","铁岭","盘锦","辽阳"],["新界","香港岛","九龙"],["潮州","揭阳","广州","深圳","韶关","汕头","珠海","江门","佛山","茂名","云浮","湛江","肇庆","河源","汕尾","梅州","惠州","东莞","清远","阳江","中山"],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],
			["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],
			["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],
			["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""],["","","","","","","",""]];
var countires=[[["龙湖区","新郑区"],["金明区","南关区"],["老城","洛龙"],["商水","周口"]],[["迎泽区","万柏林区","小店区","杏花岭区"],["城区","矿区"],["南边区","小北沟"]],[["莱山区","福山区","芝罘区"],["市南","市北"],["市中区","天桥区"],["文登市","乳山市"]]];
$(function(){
    for(var i=0;i<provinces.length;i++){
    $("#province").append("<option>"+provinces[i]+"</option>");
    }
    $("#province").change(function(){
        $("#city").children().not(":eq(0)").remove();
        num1=$(this).children("option:selected").index();
        var acity1=cities[num1-1];
        for(var j=0;j<acity1.length;j++){
        $("#city").append("<option>"+acity1[j]+"</option>");
        }
    $("#city").change(function(){
        $("#area").children().not(":eq(0)").remove();
        num2=$(this).children("option:selected").index();
        var contries1=countires[num1-1][num2-1];
        for( var z=0;z<contries1.length;z++){
        $("#area").append("<option>"+contries1[z]+"</option>");
        }
        });
        });
    });