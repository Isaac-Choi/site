var c=document.getElementById('cancan');
var ctx=c.getContext('2d');
var w=c.width;
var h=c.height;
var x,y;
var dx,dy;
var color;
function init(){
	x=w/2;
	y=h/2;
	dx=Math.floor(Math.random()*10);
	dy=Math.floor(Math.random()*10);
	r=20;
	color='firebrick';
}
init();
function clear() {
	ctx.clearRect(0,0,w,h);
}
function hi(x,y,r,color) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle=color;
	ctx.fill();
}
function update() {
	clear();
	hi(x,y,r,color);
	x+=dx;
	y+=dy;
	if((x-r)<0||(x+r)>w){
		dx*=-1;
		color='rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
	}
	if((y-r)<0||(y+r)>h){
		dy*=-1;
		color='rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
	}
	if(((x-r)<0&&(y-r)<0)||((x-r)<0&&(y+r)>h)||((x+r)>w&&(y-r)<0)||((x+r)>w&&(y+r)>h)){
		color='rgb('+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+','+Math.floor(Math.random()*256)+')';
	}
}
setInterval(update,40);
// setInterval(hi,1000)
// hi(w/2,h/2,50,'firebrick');