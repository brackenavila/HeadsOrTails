deg=[180,0]
F=function(v,f){return Function(v,f)}
f={
 d:document,
 nw:F('t,a,p,i',
  't=f.d.createElement(t);'+
  'for(i in a)t[i]=a[i];'+
  'return p.appendChild(t)')}
for(i in deg){
	d=f.nw('div',0,币)//硬币: Yìng bì (Coin)
 d.style.transform='rotateY('+deg[i]+'deg) translateZ('+i+'px)'
 i=f.nw('img',{src:'img/'+i+'.jpg'},d)
 w=/webkit/i.test(navigator.userAgent)?'-webkit-':''
 s=('#b{background-image:linear-gradient(#000 80%,#800,#000,#800);overflow:hidden_div,img{position:absolute_#区,#币,#币>*,img{height:500px;width:500px_#区{height:200px;left:600px;width:200px_#币{'+w+'animation:watch 10s infinite;transform-style:preserve-3D;transform:rotateY(0deg)_img{border-radius:60%_label{color:#FFF;font-size:3em_@'+w+'keyframes watch{to{transform:rotateY(1440deg)}').split('_')
 x=f.d.styleSheets[0]
 for(i in s)x.insertRule(s[i],x.cssRules.length)}