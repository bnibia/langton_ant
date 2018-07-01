


var DTIME = 200;
var size = 2;
var ctx, w, h;
var grid, i, j, x, y;
var POSX, POSY;
var DIR;
var LEFT = 1;
var RIGHT = 2;
var UP = 3;
var DOWN = 4;


var WHITE = 1;
var BLACK = 0;

window.onload = function ()
{
    
    var canvas = document.getElementById("canvas");
	
	
    if(canvas.getContext) 
    {
        ctx = canvas.getContext("2d");
        
		w = canvas.width/size; 
        h = canvas.height/size; 
		
		grid = [];
				
		for(x=0, i=0;i<canvas.width;i+=size, x++)
		{	
			grid[x] = [];
			
			for(y=0, j=0;j<canvas.height;j+=size, y++)
			{
				let color_state = color(WHITE);
				
				grid[x][y] = WHITE;
				
				ctx.fillStyle = color_state;
				ctx.fillRect(i, j, size, size);
			}
		}
		
		POSX = Math.floor(w/2);
		POSY = Math.floor(h/2);
			  
		DIR = UP;
		window.requestAnimationFrame(draw);
     
    }

};



function color(c)
{
	
	if(c) return "#ffffff";
	return "#000000";
}


function draw()
{
	for(let loop=0;loop<DTIME;loop++)
	{	
		let state = grid[POSX][POSY];
			
		if(state == WHITE)
		{
			grid[POSX][POSY] = BLACK;
			
			ctx.fillStyle = color(BLACK);
			ctx.fillRect(POSX*size, POSY*size, size, size);
			
			//turn right
			switch(DIR)
			{
				case LEFT: go_up(); break; 
				case RIGHT: go_down(); break;
				case UP: go_right(); break;
				case DOWN: go_left(); break;
			}
		}
		else 
		{
			grid[POSX][POSY] = WHITE;
			
			ctx.fillStyle = color(WHITE);
			ctx.fillRect(POSX*size, POSY*size, size, size);
			
			//turn left
			switch(DIR)
			{
				case LEFT: go_down(); break;
				case RIGHT: go_up(); break;
				case UP: go_left(); break;
				case DOWN: go_right(); break;
			}
		}
	}
	
	window.requestAnimationFrame(draw);
        
}




function go_up()
{
	DIR = UP;
	
	POSY--;
	
	if(POSY < 0) POSY = h-1;
	
}
	
function go_down()
{
	DIR = DOWN;
	
	POSY++;
	
	if(POSY > h-1) POSY = 0;
	
}

function go_right()
{
	DIR = RIGHT;
	
	POSX++;
	
	if(POSX > w-1) POSX = 0;
	
}

function go_left()
{
	DIR = LEFT;
	
	POSX--;
	
	if(POSX < 0) POSX = w-1;
	
}
		
        

 
 

 
 
 
 
