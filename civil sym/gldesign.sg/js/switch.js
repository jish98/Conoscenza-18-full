(function(){

window.Dom=Dom=
{	
	addEvent:function(s,fn){this.attachEvent?this.attachEvent('on'+s,fn):this.addEventListener(s,fn,false);return this;},//æ·»åŠ äº‹ä»¶[äº‹ä»¶(è¦åŽ»æŽ‰å‰é¢çš„on),æ–¹æ³•]
	delEvent:function(s,fn){this.detachEvent?this.detachEvent('on'+s,fn):this.removeEventListener(s,fn,false);return this;},//åˆ é™¤äº‹ä»¶[äº‹ä»¶(è¦åŽ»æŽ‰å‰é¢çš„on),æ–¹æ³•]
	addDom:function(node,tag,first){var o=node.createElement(tag);first?node.insertBefore(o,node.firstChild):node.appendChild(o);return o;},//åˆ›å»ºå­èŠ‚ç‚¹[èŠ‚ç‚¹ï¼Œè¦åˆ›å»ºçš„TAGï¼Œæ’å…¥ä½ç½®]
	delDom:function(node,obj){node.removeChild(obj);},//åˆ é™¤å­èŠ‚ç‚¹[çˆ¶èŠ‚ç‚¹ï¼Œè¦åˆ é™¤èŠ‚ç‚¹]
	addImg:function(url){var img=new Image();img.src=url;return img;},//åˆ›å»ºç¼“å­˜å›¾ç‰‡[å›¾ç‰‡åœ°å€]
	winh:function(){return Math.min(document.documentElement.clientHeight,document.body.clientHeight);},//è¿”å›žæµè§ˆå™¨å¯ç”¨é«˜
	mouseX:function(event){return (event.pageX || (event.clientX +l(document)));},//è¿”å›žé¼ æ ‡çš„Xåº§æ ‡
	mouseY:function(event){return (event.pageY || (event.clientY +t(document)));}//è¿”å›žé¼ æ ‡çš„Yåº§æ ‡
}
Fun.xcopy(Dom,Element);

})();

window.Effect=
{

	//æ»šåŠ¨/åˆ‡å±æ•ˆæžœï¼Œ[id,å­å®¹å™¨/å­™å®¹å™¨,æ–¹å‘,é€Ÿåº¦,ä¸ŠæŒ‰é’®,ä¸‹æŒ‰é’®,åˆ†é¡µåˆ‡æ¢æ—¶é—´,æ¯æ¬¡åˆ‡å±çš„æ¡æ•°]
	HtmlMove:function(id,tag,path,rate,upbt,downbt,pgtime,lis)
	{
		var c,mous=false,fg=tag.split('/'),o=$(id),as=o.find(fg[1]),fx=(path=="scrollRight"||path=="scrollLeft")?"scrollLeft":"scrollTop",ow=fx=="scrollTop"?as[0].h():as[0].w();
		o.onmouseover=function(){mous=true;};o.onmouseout=function(){mous=false;}
		if(pgtime==null)
		{
			var mx=ow*as.length,mi=0,oldra=rate,os=o.find(fg[0])[0];os.innerHTML+=os.innerHTML;
			if(upbt){$(upbt).onmousedown=function(){down();rate+=3;};$(upbt).onmouseup=function(){rate=oldra;};}
			if(downbt){$(downbt).onmousedown=function(){up();rate+=3;};$(downbt).onmouseup=function(){rate=oldra;};}
			function up(){clearInterval(c);c=setInterval(function(){if(mous){return;}(o[fx]-rate>0)?(o[fx]-=rate):(o[fx]=mx);},30);}
			function down(){clearInterval(c);c=setInterval(function(){if(mous){return;}(o[fx]+rate<mx)?(o[fx]+=rate):(o[fx]=0);},30);}
			if(path=="scrollTop"||path=="scrollLeft"){down();}else{up();}
		}
		else
		{
			var pw=fx=="scrollTop"?o.h():o.w(),pgli=lis||Math.floor((pw+ow/2)/ow),pg=Math.floor((as.length+(pgli-1))/pgli),pgmx=ow*pgli,now=0,mx,d;
			var os=o.find(fg[0])[0];os.innerHTML+=os.innerHTML;d=setInterval(function(){go_to((path=="scrollTop"||path=="scrollLeft")?true:false);},pgtime);
			if(upbt){$(upbt).onmousedown=function(){clearInterval(d);go_to(true);d=setInterval(function(){go_to(true);},pgtime);}}
			if(downbt){$(downbt).onmousedown=function(){clearInterval(d);go_to(false);d=setInterval(function(){go_to(false);},pgtime);}}
			if(fg[2]){var pf=o.find(fg[2])[0];};function pfs(vs){if(fg[2]){pf.style.display="block";pf.style.left=vs+"px";}};function pfscl(){if(fg[2]){pf.style.display="none";}}
			function go_to(fxs)
			{
				if(mous){return;};var ex;
				if(fxs){if(now<pg){now++;}else{now=1;o[fx]=0;}pfs((now-1)*pgmx);mx=now*pgmx;ex=setInterval(function(){(o[fx]+rate<mx)?(o[fx]+=rate):o[fx]=mx;if(o[fx]==mx){clearInterval(ex);ex=null;pfscl();}},5);}
				else{if(now>0){now--;}else{now=pg-1;o[fx]=pg*pgmx;}pfs((now+1)*pgmx);mx=now*pgmx;ex=setInterval(function(){(o[fx]-rate>mx)?(o[fx]-=rate):o[fx]=mx;if(o[fx]==mx){clearInterval(ex);ex=null;pfscl();}},5);}
			}
		}
	},
	
	//ç¼“å†²ï¼šidï¼Œè¦è®¾ç½®çš„å›¾ç‰‡IDï¼ŒèŠ‚ç‚¹ç§»åŠ¨é€Ÿåº¦ï¼Œè¦ç§»åŠ¨åˆ°çš„ç›®çš„æ”¯æŒï¼š['width:100','height:100','left:100','top:100','opacity:100','scrollTop:100','scrollLeft:100']ï¼Œç§»åŠ¨å®ŒæˆåŽå›žè°ƒæ–¹æ³•åä¸æ”¯æŒå‚æ•°ï¼Œå¯é€‰
	//å¦‚æžœäº‹ä»¶ä¸­æœ‰opacityå±žæ€§ï¼šåˆ™é¡µé¢æ ·å¼ä¸­è¦å®šä¹‰ï¼šopacity:0.1;filter:alpha(opacity=10);
	SpaceTo:function(id,slot,mx,fun)
	{
		var o=$(id),over=0,ar=Array(),len=mx.length,temp;
		for(var i=0;i<len;i++){ar[i]=mx[i].split(":");ar[i]=ar[i].concat(li(ar[i][0]));ar[i][1]=parseInt(ar[i][1]);ar[i][1]>ar[i][2]&&(ar[i][1]+=(slot-1));ar[i][5]=true;}
		clearInterval(window[id+"spaceTo"]);window[id+"spaceTo"]=setInterval(mov,10);
		function mov()
		{
			for(var i=0;i<len;i++)
			{
				if(ar[i][5])
				{
					ar[i][2]+=(temp=Math.floor((ar[i][1]-ar[i][2])/slot));
					ar[i][3][ar[i][0]]=ar[i][0]=='opacity' && !(/*@cc_on!@*/false)?ar[i][2]*0.01:ar[i][2]+ar[i][4];
					if(temp==0){ar[i][5]=false;over++;}
				}
			}
			if(over==len){clearInterval(window[id+"spaceTo"]);if(fun){fun();}}
		}
		
	}
}
function del(){
    $("#a3").removeClass('animation3');
    $("#a4").removeClass('animation4');
    $("#a5").removeClass('animation5');
    $("#a8").removeClass('animation6');
    $("#a9").removeClass('animation7');
    $("#a10").removeClass('animation7');
    $("#a11").removeClass('animation8');
    $("#a12").removeClass('animation9');
    $(".content1 #a20").removeClass('animation20');
    $(".b2_word #a21").removeClass('animation21');
    $(".b2_word #a22").removeClass('animation21');
    $(".b2_word #a23").removeClass('animation20');
    $(".content1 #a24").removeClass('animation22');
}