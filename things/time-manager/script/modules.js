// require jQuery
localStorage.version="v0.1.0.0";
var negMode=false;
function pad(n, width, z) {
	z = z || '0';
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

var C;
function color() {
	for (var i=1; i<=$("*").length; i++) {
		if ($($("*")[i-1]).is("[color]")) {
			$element = $($("*")[i-1]);
			C=$element.attr("color");
			$element.css("border-color",C);
			$element.css("color", C);
		}
	}
}

function loop() {
	if (isNaN(localStorage.time)) {
		localStorage.time=0;
	} else if (localStorage.time>9999999.9) {
		localStorage.time=9999999.9;
	} else if (localStorage.time<-9999999.9) {
		localStorage.time=-9999999.9;
	}
	if (localStorage.time>=0) {
		$(".timeA").text(Math.floor(localStorage.time));
		$(".timeB").text(Math.floor(localStorage.time%1*10)%10);
	} else {
		$(".timeA").text(Math.abs(Math.ceil(localStorage.time)));
		$(".timeB").text(Math.abs(Math.ceil(localStorage.time%1*10)%10));
	}
	if (!negMode && localStorage.time<0) {
		negMode=true;
		$("*").addClass("inverted"); //negative mode
	} else if (negMode && localStorage.time>=0) {
		negMode=false;
		$("*").removeClass("inverted");	// positive mode
	}
	color();
	$(".version").text(localStorage.version);
}