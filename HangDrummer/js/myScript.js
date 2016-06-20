var keyData = {
	space: {
		color: "purple",
		shift: "mid",
		sound: new Howl({
				urls: ['sounds/Crop/hang1-a.wav']
		})
	},
	q: {
		color: "purple",
		shift: new Point(0,0),
		sound: new Howl({
				urls: ['sounds/Crop/hang7-csharp.wav']
		})
	},
	w: {
		color: "purple",
		shift: new Point(0,0),
		sound: new Howl({
				urls: ['sounds/Crop/hang7-csharp.wav']
		})
	},
	e: {
		color: "purple",
		shift: new Point(0,0),
		sound: new Howl({
				urls: ['sounds/Crop/hang7-csharp.wav']
		})
	},
	a: {
		color: "green",
		shift: new Point(0,quadyPoint),
		sound: new Howl({
				urls: ['sounds/Crop/hang5-g.wav']
		})
	},
	s: {
		color: "green",
		shift: new Point(0,quadyPoint),
		sound: new Howl({
				urls: ['sounds/Crop/hang5-g.wav']
		})
	},
	d: {
		color: "green",
		shift: new Point(0,quadyPoint),
		sound: new Howl({
				urls: ['sounds/Crop/hang5-g.wav']
		})
	},
	z: {
		color: "yellow",
		loc: "botleft",
		sound: new Howl({
				urls: ['sounds/Crop/hang3-dsharp.wav']
		})
	},
	x: {
		color: "yellow",
		loc: "botleft",
		sound: new Howl({
				urls: ['sounds/Crop/hang3-dsharp.wav']
		})
	},
	c: {
		color: "yellow",
		loc: "botleft",
		sound: new Howl({
				urls: ['sounds/Crop/hang3-dsharp.wav']
		})
	},
	b: {
		color: "yellow",
		loc: "botright",
		sound: new Howl({
				urls: ['sounds/Crop/hang2-d.wav']
		})
	},
	n: {
		color: "yellow",
		loc: "botright",
		sound: new Howl({
				urls: ['sounds/Crop/hang2-d.wav']
		})
	},
	m: {
		color: "yellow",
		loc: "botright",
		sound: new Howl({
				urls: ['sounds/Crop/hang2-d.wav']
		})
	},
	j: {
		color: "yellow",
		loc: "midright",
		sound: new Howl({
				urls: ['sounds/Crop/hang4-fsharp.wav']
		})
	},
	k: {
		color: "yellow",
		loc: "midright",
		sound: new Howl({
				urls: ['sounds/Crop/hang4-fsharp.wav']
		})
	},
	l: {
		color: "yellow",
		loc: "midright",
		sound: new Howl({
				urls: ['sounds/Crop/hang4-fsharp.wav']
		})
	},
	i: {
		color: "yellow",
		loc: "topright",
		sound: new Howl({
				urls: ['sounds/Crop/hang6-asharp.wav']
		})
	},
	o: {
		color: "yellow",
		loc: "topright",
		sound: new Howl({
				urls: ['sounds/Crop/hang6-asharp.wav']
		})
	},
	p: {
		color: "yellow",
		loc: "topright",
		sound: new Howl({
				urls: ['sounds/Crop/hang6-asharp.wav']
		})
	}
};

var circles = [];

var mousePos = view.center + [view.bounds.width / 3, 100];
var position = view.center;
var quadxPoint = view.size.width/3;
var quadyPoint = view.size.widht/3;


var squareRotate = new Path.Rectangle({
	point: [75, 75],
	size: [75, 75],
	strokeColor: 'white'
});

var speed = 20;

function onKeyDown(event){
	if(keyData[event.key]){			
		if(event.key === "space") {
			var newCircle = new Path.Circle(new Point(view.center), 500);
		} else {
			var quadPoint = new Point(quadxPoint, quadyPoint) + keydata[event.key].shift;
			var randomPoint = Point.random();
			var point = quadPoint * randomPoint;



			var newCircle = new Path.Circle(new Point(point), 500);


// quadrant 1 = new Point(view.size.width / 3, view.size.height / 3) * randomPoint;
// quad 2 = quadrant 1 + view.size.width/3
// quad 3 = quadrant 1 + 2*view.size.width/3

		}

		newCircle.fillColor = keyData[event.key].color;
		circles.push(newCircle);

		keyData[event.key].sound.play();
	}

}


function onFrame(event) {
	for (var i=0; i<circles.length; i++ ) {
		circles[i].fillColor.hue += 1;
		circles[i].scale(.9);
	};


	squareRotate.rotate(3);
	squareRotate.position.x += squareRotate.bounds.width / speed;

	if (squareRotate.bounds.left > view.size.width) {
		squareRotate.position.x = -squareRotate.bounds.width;
	}
}

function onMouseMove(event) {
	mousePos = event.point;
}
