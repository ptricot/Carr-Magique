var size = (0.95*Math.min(window.innerHeight,window.innerWidth)).toString();
document.getElementById("grid").style.width = size+"px";

//Initialisations des variables
var empty = [[0,0,0,0,0,0,0],[0,0,1,1,1,1,1],[0,1,1,1,1,1,1],[0,1,1,1,1,1,1],[0,1,1,1,1,1,1],[0,1,1,1,1,1,1],[0,1,1,1,1,1,1]];
var x = 1;
var y = 1;
var n = 1;

//Fonctions
function clic(nx,ny) {
	if (((Math.abs(x-nx) == 3 && Math.abs(y-ny) == 0) || (Math.abs(x-nx) == 0 && Math.abs(y-ny) == 3) || (Math.abs(x-nx) == 2 && Math.abs(y-ny) == 2)) && (empty[nx][ny] == 1)){
		document.getElementById(x.toString()+":"+y.toString()).parentNode.style = "border:5px solid #000;";
		n=n+1;
		x=nx;
		y=ny;
		empty[nx][ny]=0;
		document.getElementById(nx.toString()+":"+ny.toString()).src = "Img/"+n.toString()+".png";
		document.getElementById(nx.toString()+":"+ny.toString()).parentNode.style = "border:5px solid #890;";
		setTimeout(function(){
			
			if (isnotdead() == 0) {
				if (n==36) {
					alert("Ouaip bravo t'es trop fort !")
				}
				else {
					alert("Perdu ! score :"+n.toString())
				}
				restart();
			}
		}, 50);
	}
}

function isnotdead() {
	var ok = 0;
	if (1 <= x+3 && x+3 <= 6 && empty[x+3][y] == 1) { ok=1 }
	else if (1 <= x-3 && x-3 <= 6 && empty[x-3][y] == 1) { ok=1 }
	else if (1 <= y+3 && y+3 <= 6 && empty[x][y+3] == 1) { ok=1 }
	else if (1 <= y-3 && y-3 <= 6 && empty[x][y-3] == 1) { ok=1 }
	else if (1 <= x+2 && x+2 <= 6 && 1 <= y+2 && y+2 <= 6 && empty[x+2][y+2] == 1) { ok=1 }
	else if (1 <= x+2 && x+2 <= 6 && 1 <= y-2 && y-2 <= 6 && empty[x+2][y-2] == 1) { ok=1 }
	else if (1 <= x-2 && x-2 <= 6 && 1 <= y+2 && y+2 <= 6 && empty[x-2][y+2] == 1) { ok=1 }
	else if (1 <= x-2 && x-2 <= 6 && 1 <= y-2 && y-2 <= 6 && empty[x-2][y-2] == 1) { ok=1 }
	return ok;
	}

function restart () {
	empty = [[0,0,0,0,0,0,0],[0,0,1,1,1,1,1],[0,1,1,1,1,1,1],[0,1,1,1,1,1,1],[0,1,1,1,1,1,1],[0,1,1,1,1,1,1],[0,1,1,1,1,1,1]];
	document.getElementById(x.toString()+":"+y.toString()).parentNode.style = "border:5px solid #000;";
	x = 1;
	y = 1;
	n = 1;
	document.getElementById("1:1").parentNode.style = "border:5px solid #890;";
	for (i=1;i<7;i++) {
		for (j=1;j<7;j++) {
			document.getElementById(i.toString()+":"+j.toString()).src = "Img/empty.png";
			}
		}
	document.getElementById("1:1").src = "Img/1.png";
	}

document.onkeydown = function(e) {
    switch(e.which) {
        case 69: // key e
            clic(x-2,y-2);
            break;
        case 82: // key r
            clic(x-3,y);
            break;
        case 84: // key t
            clic(x-2,y+2);
            break;
        case 68: // key d
            clic(x,y-3);
            break;
        case 71: // key g
            clic(x,y+3);
            break;
        case 88: // key x
            clic(x+2,y-2);
            break;
        case 67: // key c
            clic(x+3,y);
            break;
        case 86: // key v
            clic(x+2,y+2);
            break;
        }
    }

//document.getElementById("test").innerHTML = "OUI";   Test