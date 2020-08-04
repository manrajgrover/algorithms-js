/*
* Class for finding difference of Rectangles
*
* Implementation from
* https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Rectangle_difference
*/

class Rectangle {
  constructor(x,y,widht,height){
   /** @private */
    this._x = x;
    /** @private */
    this._y = y;
    /** @private */
    this._width = width;
    /** @private */
    this._height = height;
    
    this._difference = this._getRectangleDifference();
  
  }
  
get difference() {
return this._difference;
}



contains(Rectangle rectA, Rectangle rectB){
return (rectB.x >= rectA.x) && (rectB.y >= rectA.y) && (rectB.x + rectB.width <= rectA.x + rectA.width) && (rectB.y + rectB.height <= rectA.y + rectA.height);
}

intersects(Rectangle rectA, Rectangle rectB) {
        return !((rectB.x + rectB.width <= rectA.x) ||
                (rectB.y + rectB.height <= rectA.y) ||
                (rectB.x >= rectA.x + rectA.width) ||
                (rectB.y >= rectA.y + rectA.height));
    }
    
_getRectangleDifference(Rectangle rectA, Rectangle rectB) {
        if (rectB == null || !intersects(rectA, rectB) || contains(rectB, rectA))
            return new Rectangle[0];

        Rectangle result[] = null;
        Rectangle top = null, bottom = null, left = null, right = null;
        let rectCount = 0;

        //compute the top rectangle
        const raHeight = rectB.y - rectA.y;
        if(raHeight>0) {
            top = new Rectangle(rectA.x, rectA.y, rectA.width, raHeight);
            rectCount++;
        }

        //compute the bottom rectangle
        const rbY = rectB.y + rectB.height;
        const rbHeight = rectA.height - (rbY - rectA.y);
        if ( rbHeight > 0 && rbY < rectA.y + rectA.height ) {
            bottom = new Rectangle(rectA.x, rbY, rectA.width, rbHeight);
            rectCount++;
        }

        const rectAYH = rectA.y+rectA.height;
        const y1 = rectB.y > rectA.y ? rectB.y : rectA.y;
        const y2 = rbY < rectAYH ? rbY : rectAYH;
        const rcHeight = y2 - y1;

        //compute the left rectangle
        const rcWidth = rectB.x - rectA.x;
        if ( rcWidth > 0 && rcHeight > 0 ) {
            left = new Rectangle(rectA.x, y1, rcWidth, rcHeight);
            rectCount++;
        }

        //compute the right rectangle
        const rbX = rectB.x + rectB.width;
        const rdWidth = rectA.width - (rbX - rectA.x);
        if ( rdWidth > 0 ) {
            right = new Rectangle(rbX, y1, rdWidth, rcHeight);
            rectCount++;
        }

        result = new Rectangle[rectCount];
        rectCount = 0;
        if(top != null)
            result[rectCount++] = top;
        if(bottom != null)
            result[rectCount++] = bottom;
        if(left != null)
            result[rectCount++] = left;
        if(right != null)
            result[rectCount++] = right;
        return result;
    }    
 



}
