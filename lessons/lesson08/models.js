"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = exports.Point = exports.PI = void 0;
exports.calculateArea = calculateArea;
exports.calculateCircumference = calculateCircumference;
exports.PI = 3.14;
function calculateCircumference(diameter) {
    return exports.PI * diameter;
}
function calculateArea(radius) {
    return exports.PI * radius * radius;
}
var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x;
        this._y = y;
    }
    Point.prototype.getCoordinates = function () {
        return "(".concat(this.x, ", ").concat(this.y, ")");
    };
    Point.prototype.setCoordinates = function (x, y) {
        this._x = x;
        this._y = y;
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this.y;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
var Line = /** @class */ (function () {
    function Line(start, end) {
        this.start = start;
        this.end = end;
    }
    Line.prototype.getLength = function () {
        var dx = this.end.x - this.start.x;
        var dy = this.end.y - this.start.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    Line.prototype.setPoints = function (start, end) {
        this.start = start;
        this.end = end;
    };
    return Line;
}());
exports.Line = Line;
exports.default = exports.PI;
