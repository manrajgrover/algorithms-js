/**
 * Class for finding difference of rectangles
 *
 * Implementation from
 * https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Rectangle_difference
 */
class RectangleDifference {
  /**
   * Constructor function
   * @param {Number} x1 X cordinate of top left corner of rect 1
   * @param {Number} y1 Y cordinate of top left corner of rect 1
   * @param {Number} w1 Width of rect 1
   * @param {Number} h1 Height of rect 1
   * @param {Number} x2 X cordinate of top left corner of rect 2
   * @param {Number} y2 Y cordinate of top left corner of rect 2
   * @param {Number} w2 Width of rect 2
   * @param {Number} h2 Height of rect 2
   */
  constructor(x1, y1, w1, h1, x2, y2, w2, h2) {
    /** @private */
    this._x1 = x1;
    /** @private */
    this._y1 = y1;
    /** @private */
    this._w1 = w1;
    /** @private */
    this._h1 = h1;
    /** @private */
    this._x2 = x2;
    /** @private */
    this._y2 = y2;
    /** @private */
    this._w2 = w2;
    /** @private */
    this._h2 = h2;
    /** @private */
    this._difference = this._getDifference();
  }

  get difference() {
    return this._difference;
  }

  /**
   * Calculate the difference
   *
   * @return {Array} Array of rectangles represented by array of x, y, width and height
   */
  _getDifference() {
    const x1 = this._x1;
    const y1 = this._y1;
    const w1 = this._w1;
    const h1 = this._h1;
    const x2 = this._x2;
    const y2 = this._y2;
    const w2 = this._w2;
    const h2 = this._h2;

    const contains = (x1 >= x2) &&
      (y1 >= y2) &&
      (x1 + w1 <= x2 + w2) &&
      (y1 + h1 <= y2 + h2);

    const intersects = !((x2 + w2 <= x1) ||
      (y2 + h2 <= y1) ||
      (x2 >= x1 + w1) ||
      (y2 >= y1 + h1));

    if (!intersects || contains) return [];

    let top;
    let bottom;
    let left;
    let right;

    const topHeight = y2 - y1;
    if (topHeight > 0) {
      top = [x1, y1, w1, topHeight];
    }

    const bottomY = y2 + h2;
    const bottomHeight = h1 - (bottomY - y1);
    if (bottomHeight > 0 && bottomY < y1 + h1) {
      bottom = [x1, bottomY, w1, bottomHeight];
    }

    const yPlusH = y1 + h1;
    const m1 = y2 > y1 ? y2 : y1;
    const m2 = bottomY < yPlusH ? bottomY : yPlusH;
    const leftHeight = m2 - m1;

    const leftWidth = x2 - x1;
    if (leftWidth > 0 && leftHeight > 0) {
      left = [x1, m1, leftWidth, leftHeight];
    }

    const rightX = x2 + w2;
    const rightWidth = w1 - (rightX - x1);
    if (rightWidth > 0) {
      right = [rightX, m1, rightWidth, leftHeight];
    }

    return [top, bottom, left, right].filter(el => el != null);
  }
}

module.exports = RectangleDifference;
