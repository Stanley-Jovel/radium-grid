"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(props) {
  return _react2.default.createElement(
    "div",
    { style: props.style },
    props.children
  );
}; /* eslint-disable new-cap */


var horizontalPropType = _propTypes2.default.oneOf(["left", "center", "right"]);
var verticalPropType = _propTypes2.default.oneOf(["top", "middle", "bottom"]);
Cell.propTypes = {
  width: _propTypes2.default.string,
  horizontalAlign: horizontalPropType,
  verticalAlign: verticalPropType,
  order: _propTypes2.default.number,

  smallWidth: _propTypes2.default.string,
  smallHorizontalAlign: horizontalPropType,
  smallVerticalAlign: verticalPropType,
  smallOrder: _propTypes2.default.number,

  mediumWidth: _propTypes2.default.string,
  mediumHorizontalAlign: horizontalPropType,
  mediumVerticalAlign: verticalPropType,
  mediumOrder: _propTypes2.default.number,

  largeWidth: _propTypes2.default.string,
  largeHorizontalAlign: horizontalPropType,
  largeVerticalAlign: verticalPropType,
  largeOrder: _propTypes2.default.number,

  xlargeWidth: _propTypes2.default.string,
  xlargeHorizontalAlign: horizontalPropType,
  xlargeVerticalAlign: verticalPropType,
  xlargeOrder: _propTypes2.default.number,

  children: _propTypes2.default.node,
  style: _propTypes2.default.object
};

exports.default = (0, _radium2.default)(Cell);