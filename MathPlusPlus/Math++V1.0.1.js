//Math++.js
//Developed By Elijah629.
try {
if (!document) {
    console.log("Math++ Requires a Document To Use");
	throw "Math++ Needs A HTML Document";
}
console.log("[Math++] LOADING...");
window.onload = (event) => {
    console.log("[Math++] The page has fully loaded");
    console.log("[Math++] Library Loaded Succesfully");
    console.log("M++ V 1.0.0");
    console.log("-----------------");
};
Math.add = (x) => {
    if (!x.some(isNaN)) {
        var xr = x.reduce(function(a, b) {
            return a + b;
        });
        return xr;
    } else {
        console.log("[Math++] Must Be A Numeric Equation.");
        return null;
    }
};
Math.div = (x) => {
    if (!x.some(isNaN)) {
        var xr = x.reduce(function(a, b) {
            return a / b;
        });
        return xr;
    } else {
        console.log("[Math++] Must Be A Numeric Equation.");
        return null;
    }
};
Math.mult = (x) => {
    if (!x.some(isNaN)) {
        var xr = x.reduce(function(a, b) {
            return a * b;
        });
        return xr;
    } else {
        console.log("[Math++] Must Be A Numeric Equation.");
        return null;
    }
};
Math.sub = (x) => {
    if (!x.some(isNaN)) {
        var xr = x.reduce(function(a, b) {
            return a - b;
        });
        return xr;
    } else {
        console.log("[Math++] Must Be A Numeric Equation.");
        return null;
    }
};
Math.m = (x, m) => {
    if (!x.some(isNaN)) {
        if (m == "M" || m == "m") {
            var xm = x.reduce(function(a, b) {
                return a * b;
            });
            return xm;
        } else if (m == "A" || m == "a") {
            var xa = x.reduce(function(a, b) {
                return a + b;
            });
            return xa;
        } else if (m == "S" || m == "s") {
            var xs = x.reduce(function(a, b) {
                return a - b;
            });
            return xs;
        } else if (m == "d" || m == "D") {
            var xd = x.reduce(function(a, b) {
                return a / b;
            });
            return xd;
        } else {
            console.log("[Math++] ERROR NOT A CORRECT VALUE");
            return null;
        }
    } else {
        console.log("[Math++] Must Be A Numeric Equation.");
        return null;
    }
};
Math.VmRm = (x) => {
    return x;
};
Math.count = (s, f, e, m = "") => {
    e.innerHTML = "";
    if (m == "true") {
        f++;
        for (var i = s; i < f; i++) {
            var o;
            o = i + "<br>";
            e.innerHTML += o;
        }
    } else if (m == "false") {
        f++;
        for (var i = s; i < f; i++) {
        var o;
		o = i + " ";
            e.innerHTML += o;
        }
    } else {
        console.log("[Math++] Error Incorect / No Value");
        return null;
    }
};
//m=Multiplyer Of Numbers. G = From 0 - G Range. E = Element to Post data to r = round options U for up D for down a is line <br>'s True Or False
Math.cRandom = (m, g, e, r, a) => {
    e.innerHTML = "";
    if (!isNaN(m) && !isNaN(g)) {
        if (r == "u" || r == "U") {
            if (a == "false") {
                for (var i = 0; i < m; i++) {
                    var x = Math.ceil((Math.random() * g) + 1);
                    e.innerHTML += x;
                }
            } else if (a == "true") {
                for (var i = 0; i < m; i++) {
                    var x = Math.ceil((Math.random() * g) + 1);
                    var z;
                    z = x + "<br>";
                    e.innerHTML += z;
                }
            }
        } else if (r == "d" || r == "D") {
            if (a == "true") {
                for (var i = 0; i < m; i++) {
                    var x = Math.floor((Math.random() * g) + 1);
                    var z;
                    z = x + "<br>";
                    e.innerHTML += z;
                }
            } else if (a == false) {
                for (var i = 0; i < m; i++) {
                    var x = Math.floor((Math.random() * g) + 1);
                    e.innerHTML += x;
                }
            } else {
                console.log("Must Be A Correct Value");
                return null;
            }
        } else {
            console.log("Must Be A Correct Value");
            return null;
        }
    } else {
        console.log("First 2 Values (m and g) Must Be Numbers");
        return null;
    }
};
	Math.circle = (r=0,sc="black",lw=1,fc="black") => {
	var canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
    var context = canvas.getContext("2d");
	var rtc = r * 1.1 + lw / 2;
	var ltc = r * 1.1 + lw / 2;
	canvas.height = r * 2.2 + lw;
	canvas.width = r * 2.2 + lw;
    context.beginPath();
    context.arc(rtc, ltc, r, 0, 2 * Math.PI, false);
    context.fillStyle = fc;
    context.fill();
    context.lineWidth = lw;
    context.strokeStyle = sc;
    context.stroke();
	};
	Math.square = (h=0,w=0,fc="black") => {
	var canvas = document.createElement('canvas');
	document.body.appendChild(canvas);
	canvas.height = h;
	canvas.width = w;
	var context = canvas.getContext("2d");
	context.fillStyle = fc;
	context.fillRect("","",w,h);
	};} catch (err) {
		if (!document) {
			throw "Math++ Needs A HTML Document";
		}
		console.log("[Math++] ERROR: " + err.message)
	}
// ------------------------------------------- //