FPS = 60;

ypos = 0;
radius = 0;

btop = 0;
bottom = 0;

v = 0;
a = 0.5; //
e = 1; //coeff of restitution!

refreshID = null;
ball = null;

firstvel = -1;


render = function() {
	// console.log("in render()")
	// console.log(bottom - ypos);
	if (ypos + radius >= bottom)
	{
		if (firstvel == -1)
			firstvel = -1 * v;
		v = firstvel;
	}
	ball.style.top = Math.min(ypos, bottom) + 'px';
	v += a;
	ypos += v;
}

window.onload = function() {

	ball = document.getElementById('ball');
    bd = document.getElementById('bounce').getBoundingClientRect();
    console.log(bd);
    radius = ball.clientHeight;
	btop = bd.top;
	bottom = bd.bottom;
    ypos = btop - radius;
   

    ball.style.left = bd.left + (bd.right - bd.left)/2 ;
    // ball.style.bottom = bd.bottom;
	ball.style.top = btop;
    
	refreshID = setInterval(render, 1000/FPS);
}