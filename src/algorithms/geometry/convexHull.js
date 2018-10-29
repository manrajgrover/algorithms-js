/**
 * Creates point object
 * @param  {Number} x coordinate x
 * @param  {Number} y coordinate y
 */
function Point(x, y) {
  this.x = x;
  this.y = y;
}

/**
 * Creates changeable object
 * @param  {Number} value value to store
 */
function Changeable(value) {
  this.v = value;
}

/**
 * Calculates convex hull of array of points on plane
 * @param  {Array} points array of points
 * @return {Array}   smallest sorted array of points that belong to convex hull of received points
 *
 * References: https://en.wikipedia.org/wiki/Quickhull
 */
const convexHull = (points) => {
  if (points.length < 3) {
    return points;
  }

  let left = points[0];
  let right = points[0];
  let up = [];
  let down = [];
  let a = new Changeable();
  let b = new Changeable();
  let c = new Changeable();
  for (let i = 1; i < points.length; i++) {
    if (points[i].x < left.x) {
      left = points[i];
    }
  }
  for (let i = 1; i < points.length; i++) {
    if (points[i].x > right.x) {
      right = points[i];
    }
  }

  if (left == right) {
    let up = points[0];
    let down = points[0];
    for (let i = 1; i < points.length; i++) {
      if (points[i].y > left.y) {
        up = points[i];
      }
    }
    for (let i = 1; i < points.length; i++) {
      if (points[i].y < left.y) {
        down = points[i];
      }
    }
    return new Array(up, down);
  }

  calcLineEquation(left, right, a, b, c);
  dividePoints(points, a, b, c, up, down, true);

  let result = convexHullMain(left, right, up, true);
  result.sort(function (a, b) {
    return a.x - b.x;
  });
  let result2 = convexHullMain(left, right, down, false);
  result2.sort(function (a, b) {
    return b.x - a.x;
  });
  result = result.concat(result2);
  result.splice(result.indexOf(left), 1);
  result.splice(result.indexOf(right), 1);
  return result;
}

/**
 * Calculates distance from point to line ax+by+c=0
 * @param  {Number} a coefficient a
 * @param  {Number} b coefficient b
 * @param  {Number} c coefficient c
 * @param  {Point} point point object
 * @return {Array}   distance from point to line ax+by+c=0
 */
function calcDistance(a, b, c, point) {
  return Math.abs(a.v * point.x + b.v * point.y + c.v) / Math.sqrt(a.v * a.v + b.v * b.v);
}

/**
 * Calculates cosine of angle BAC
 * @param  {Point} A point A
 * @param  {Point} B point B
 * @param  {Point} C point C
 * @return {Number}   cosine of angle BAC
 */
function calcCosine(A, B, C) {
  let x1 = B.x - A.x;
  let y1 = B.y - A.y;
  let x2 = C.x - A.x;
  let y2 = C.y - A.y;
  return x1 * x2 + y1 * y2 / (Math.sqrt(x1 * x1 + y1 * y1) * Math.sqrt(x2 * x2 + y2 * y2));
}

/**
 * Calculates equation of line passing through 2 points
 * @param  {Point} point1 point1
 * @param  {Point} point2 point2
 * @param  {Number} a coefficient a
 * @param  {Number} b coefficient b
 * @param  {Number} c coefficient c
 */
function calcLineEquation(point1, point2, a, b, c) {
  a.v = point1.y - point2.y;
  b.v = point2.x - point1.x;
  c.v = point1.x * point2.y - point2.x * point1.y;
}

/**
 * Divides points on 2 arrays: upper and lower than line
 * @param  {Array} points array of points
 * @param  {Number} a coefficient a
 * @param  {Number} b coefficient b
 * @param  {Number} c coefficient c
 * @param  {Array} up array of points that are upper (or lower. depends on isUpper) than line
 * @param  {Array} down array of points that are lower (or upper. depends on isUpper) than line
 * @param  {Array} isUpper flag showing if points are in upper or lower half 
 */
function dividePoints(points, a, b, c, up, down, isUpper) {
  let temp;
  for (let i = 0; i < points.length; i++) {
    temp = a.v * points[i].x + b.v * points[i].y + c.v;
    if (temp > 0 && isUpper || temp < 0 && !isUpper) {
      up.push(points[i]);
    }
    else if (temp < 0 && isUpper || temp > 0 && !isUpper) {
      down.push(points[i]);
    }
  }
}

/**
 * Recursive main function that finds convex hull
 * @param  {Point} left the leftmost point
 * @param  {Point} right the rightmost point
 * @param  {Array} points array of points
 * @param  {Array} isUpper flag showing if points are in upper or lower half
 * @return {Array}   smallest array of points that belong to convex hull of received points
 */
function convexHullMain(left, right, points, isUpper) {
  if (points.length == 0) {
    return new Array(left, right);
  }
  let a = new Changeable(), b = new Changeable(), c = new Changeable();
  calcLineEquation(left, right, a, b, c);
  let farther = new Point(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i++) {
    let dist1 = calcDistance(a, b, c, farther);
    let dist2 = calcDistance(a, b, c, points[i]);
    let cos1 = calcCosine(left, right, farther);
    let cos2 = calcCosine(left, right, points[i]);
    if (dist1 < dist2 || dist1 == dist2 && cos1 > cos2) {
      farther = points[i];
    }
  }
  let upLeft = new Array();
  let upRight = new Array();
  let downLeft = new Array();
  let down = new Array();
  let a1 = new Changeable();
  let b1 = new Changeable();
  let c1 = new Changeable();
  let a2 = new Changeable();
  let b2 = new Changeable();
  let c2 = new Changeable();
  calcLineEquation(left, farther, a1, b1, c1);
  calcLineEquation(farther, right, a2, b2, c2);
  dividePoints(points, a1, b1, c1, upLeft, downLeft, isUpper);
  if (downLeft.length != 0) {
    dividePoints(downLeft, a2, b2, c2, upRight, down, isUpper);
  }

  let result = convexHullMain(left, farther, upLeft, isUpper);
  result = result.concat(convexHullMain(farther, right, upRight, isUpper));
  result.splice(result.indexOf(farther), 1);
  return result;
}

module.exports = convexHull;