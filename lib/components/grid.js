"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* eslint-disable new-cap */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require("radium");

var _radium2 = _interopRequireDefault(_radium);

var _resolveCells = require("./util/resolve-cells");

var _resolveCells2 = _interopRequireDefault(_resolveCells);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Grid = function Grid(props) {
  var styles = _extends({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minWidth: "100%"
  }, props.style);

  return _react2.default.createElement(
    "div",
    { style: styles },
    (0, _resolveCells2.default)(props)
  );
};

Grid.propTypes = {
  cellWidth: _propTypes2.default.string,
  cellAlign: _propTypes2.default.string,
  cellVerticalAlign: _propTypes2.default.string,

  smallCellWidth: _propTypes2.default.string,
  smallCellAlign: _propTypes2.default.string,
  smallCellVerticalAlign: _propTypes2.default.string,

  mediumCellWidth: _propTypes2.default.string,
  mediumCellAlign: _propTypes2.default.string,
  mediumCellVerticalAlign: _propTypes2.default.string,

  largeCellWidth: _propTypes2.default.string,
  largeCellAlign: _propTypes2.default.string,
  largeCellVerticalAlign: _propTypes2.default.string,

  xlargeCellWidth: _propTypes2.default.string,
  xlargeCellAlign: _propTypes2.default.string,
  xlargeCellVerticalAlign: _propTypes2.default.string,

  breakpoints: _propTypes2.default.shape({
    small: _propTypes2.default.string,
    medium: _propTypes2.default.string,
    large: _propTypes2.default.string,
    xlarge: _propTypes2.default.string
  }),

  gutter: _propTypes2.default.string,

  style: _propTypes2.default.object,
  children: _propTypes2.default.node
};

Grid.defaultProps = {
  cellWidth: "1/3",
  cellAlign: "left",
  cellVerticalAlign: "top",

  breakpoints: {
    small: "@media only screen and (max-width: 640px)",
    medium: "@media only screen and (min-width: 641px) and (max-width: 1024px)",
    large: "@media only screen and (min-width: 1025px) and (max-width: 1440px)",
    xlarge: "@media only screen and (min-width: 1441px)"
  },

  gutter: "16px"
};

exports.default = (0, _radium2.default)(Grid);