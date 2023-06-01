function getDistance(xA, yA, xB, yB) { 
	var xDiff:Number = xA - xB; 
	var yDiff:Number = yA - yB; 

	return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
}

var distance = getDistance(0, 0, 100, 100);
alert(distance);
