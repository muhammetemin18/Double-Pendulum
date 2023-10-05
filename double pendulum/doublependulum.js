var canvas=document.getElementById("canvas");
var canvas2=document.getElementById("canvas2");
var ctx=canvas.getContext("2d");
var ctx2=canvas2.getContext("2d");

var width=canvas.width;
var height=canvas.height;

var r1=200;
var r2=200;
var m1=20;
var m2=20;
var a1=Math.PI/2;
var a2=Math.PI/4;

var g=1;

var a1_v=0;
var a2_v=0;

ctx.translate(400,50)
ctx2.translate(400,50)

function draw(){

	ctx.clearRect(-400,-50,width,height)


	var num1=-g*(2*m1+m2)*Math.sin(a1);
	var num2=-m2*g*Math.sin(a1-2*a2);
	var num3=-2*Math.sin(a1-a2)*m2;
	var num4=a2_v*a2_v*r1+a1_v*a1_v*r1*Math.cos(a1-a2);

	var den=r1*(2*m1+m2-m2*Math.cos(2*a1-2*a2));

	var a1_a=(num1+num2+num3*num4)/den;

	num1=2*Math.sin(a1-a2);
	num2=(a1_v*a1_v*r1*(m1+m2));
	num3=g*(m1+m2)*Math.cos(a1);
	num4=a2_v*a2_v*r2*m2*Math.cos(a1-a2);

	den=r2*(2*m1+m2-m2*Math.cos(2*a1-2*a2));

	var a2_a=(num1*(num2+num3+num4))/den;







	var x1=r1*Math.sin(a1);
	var y1=r1*Math.cos(a1);

	var x2=x1+r2*Math.sin(a2);
	var y2=y1+r2*Math.cos(a2);

	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(x1,y1);
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(x1,y1,m1,0,Math.PI*2);
	ctx.arc(x2,y2,m2,0,Math.PI*2);
	ctx.fill();

	ctx2.lineTo(x2,y2);
	ctx2.moveTo(x2,y2);
	ctx2.stroke();
	a1_v+=a1_a;
	a2_v+=a2_a;
	a1+=a1_v;
	a2+=a2_v;
	a1_v*=0.999;
	a2_v*=0.999;
}

setInterval(draw,1000/50);
ctx2.moveTo(x2,y2);