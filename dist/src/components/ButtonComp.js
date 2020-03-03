"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  };
});

var ButtonComp = function ButtonComp(_ref) {
  var text = _ref.text,
      color = _ref.color,
      variant = _ref.variant,
      disabled = _ref.disabled,
      size = _ref.size,
      classes = _ref.classes,
      callback = _ref.callback;
  return _react.default.createElement(_Button.default, {
    onClick: callback,
    className: classes,
    variant: variant,
    color: color,
    size: size,
    disabled: disabled
  }, text);
};

ButtonComp.defaultProps = {
  text: "Submit",
  variant: "contained",
  size: "medium",
  color: "primary",
  disabled: false,
  classes: null,
  callback: function callback() {
    console.log("Button CLicked");
  }
};
ButtonComp.propTypes = {
  text: _propTypes.default.string,
  variant: _propTypes.default.string,
  size: _propTypes.default.string,
  color: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  classes: _propTypes.default.object,
  callback: _propTypes.default.func
};
var _default = ButtonComp;
exports.default = _default;

//# sourceMappingURL=ButtonComp.js.map