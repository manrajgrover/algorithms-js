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
 * Calculates distance from point to line ax+by+c=0
 * @param  {Number} a coefficient a
 * @param  {Number} b coefficient b
 * @param  {Number} c coefficient c
 * @param  {Point} point point object
 * @return {Array}   distance from point to line ax+by+c=0
 */
function calcDistance(a, b, c, point) {
  return Math.abs((a.v * point.x) + (b.v * point.y) + c.v) / Math.sqrt((a.v * a.v) + (b.v * b.v));
}

/**
 * Calculates cosine of angle BAC
 * @param  {Point} A point A
 * @param  {Point} B point B
 * @param  {Point} C point C
 * @return {Number}   cosine of angle BAC
 */
function calcCosine(A, B, C) {
  const x1 = B.x - A.x;
  const y1 = B.y - A.y;
  const x2 = C.x - A.x;
  const y2 = C.y - A.y;
  return ((x1 * x2) + (y1 * y2)) / (Math.sqrt((x1 * x1) + (y1 * y1))
  * Math.sqrt((x2 * x2) + (y2 * y2)));
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
  c.v = (point1.x * point2.y) - (point2.x * point1.y);
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
  for (let i = 0; i < points.length; i += 1) {
    temp = (a.v * points[i].x) + (b.v * points[i].y) + c.v;
    if ((temp > 0 && isUpper) || (temp < 0 && !isUpper)) {
      up.push(points[i]);
    } else if ((temp < 0 && isUpper) || (temp > 0 && !isUpper)) {
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
  if (points.length === 0) {
    return [left, right];
  }
  const a = new Changeable();
  const b = new Changeable();
  const c = new Changeable();
  calcLineEquation(left, right, a, b, c);
  let farther = new Point(points[0].x, points[0].y);
  for (let i = 1; i < points.length; i += 1) {
    const dist1 = calcDistance(a, b, c, farther);
    const dist2 = calcDistance(a, b, c, points[i]);
    const cos1 = calcCosine(left, right, farther);
    const cos2 = calcCosine(left, right, points[i]);
    if (dist1 < dist2 || (dist1 === dist2 && cos1 > cos2)) {
      farther = points[i];
    }
  }
  const upLeft = [];
  const upRight = [];
  const downLeft = [];
  const down = [];
  const a1 = new Changeable();
  const b1 = new Changeable();
  const c1 = new Changeable();
  const a2 = new Changeable();
  const b2 = new Changeable();
  const c2 = new Changeable();
  calcLineEquation(left, farther, a1, b1, c1);
  calcLineEquation(farther, right, a2, b2, c2);
  dividePoints(points, a1, b1, c1, upLeft, downLeft, isUpper);
  if (downLeft.length !== 0) {
    dividePoints(downLeft, a2, b2, c2, upRight, down, isUpper);
  }

  let result = convexHullMain(left, farther, upLeft, isUpper);
  result = result.concat(convexHullMain(farther, right, upRight, isUpper));
  result.splice(result.indexOf(farther), 1);
  return result;
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
  const up = [];
  const down = [];
  const a = new Changeable();
  const b = new Changeable();
  const c = new Changeable();
  for (let i = 1; i < points.length; i += 1) {
    if (points[i].x < left.x) {
      left = points[i];
    }
  }
  for (let i = 1; i < points.length; i += 1) {
    if (points[i].x > right.x) {
      right = points[i];
    }
  }

  if (left === right) {
    let up1 = points[0];
    let down1 = points[0];
    for (let i = 1; i < points.length; i += 1) {
      if (points[i].y > left.y) {
        up1 = points[i];
      }
    }
    for (let i = 1; i < points.length; i += 1) {
      if (points[i].y < left.y) {
        down1 = points[i];
      }
    }
    return [up1, down1];
  }

  calcLineEquation(left, right, a, b, c);
  dividePoints(points, a, b, c, up, down, true);

  let result = convexHullMain(left, right, up, true);
  result.sort((q, w) => {
    const v = q.x - w.x;
    return v;
  });
  const result2 = convexHullMain(left, right, down, false);
  result2.sort((q, w) => {
    const v = w.x - q.x;
    return v;
  });
  result = result.concat(result2);
  result.splice(result.indexOf(left), 1);
  result.splice(result.indexOf(right), 1);
  return result;
};

module.exports = convexHull;
