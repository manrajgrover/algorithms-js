/**
 * Class for finding Tangent between circles
 *
 * Implementation from
 * https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Tangents_between_two_circles
 */
class CircleTangents {
  constructor(x1, y1, r1, x2, y2, r2) {
    /** @private */
    this._x1 = x1;
    /** @private */
    this._y1 = y1;
    /** @private */
    this._r1 = r1;
    /** @private */
    this._x2 = x2;
    /** @private */
    this._y2 = y2;
    /** @private */
    this._r2 = r2;
    /** @private */
    this._tangents = this._getTangents();
  }

  get tangents() {
    return this._tangents;
  }

  _getTangents() {
    const x1 = this._x1;
    const y1 = this._y1;
    const r1 = this._r1;

    const x2 = this._x2;
    const y2 = this._y2;
    const r2 = this._r2;

    const sqd = ((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2));

    if (sqd <= (r1 - r2) * (r1 - r2)) {
      return [...Array(4)].map(() => []);
    }

    const dist = Math.sqrt(sqd);
    const vx = (x2 - x1) / dist;
    const vy = (y2 - y1) / dist;

    const res = [...Array(4)].map(() => []);
    let i = 0;

    for (let sign1 = +1; sign1 >= -1; sign1 -= 2) {
      const c = (r1 - (sign1 * r2)) / dist;

      if (c * c > 1.0) {
        continue;
      }

      const h = Math.sqrt(Math.max(0.0, 1.0 - (c * c)));

      for (let sign2 = +1; sign2 >= -1; sign2 -= 2) {
        const nx = (vx * c) - (sign2 * h * vy);
        const ny = (vy * c) + (sign2 * h * vx);

        res[i].push(x1 + (r1 * nx));
        res[i].push(y1 + (r1 * ny));
        res[i].push(x2 + (sign1 * r2 * nx));
        res[i].push(y2 + (sign1 * r2 * ny));

        i += 1;
      }
    }

    return res;
  }
}

module.exports = CircleTangents;
