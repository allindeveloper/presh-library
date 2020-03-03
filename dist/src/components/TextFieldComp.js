"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

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

var TextFieldComp = function TextFieldComp(_ref) {
  var id = _ref.id,
      label = _ref.label,
      variant = _ref.variant,
      onChange = _ref.onChange,
      defaultValue = _ref.defaultValue;
  return _react.default.createElement(_TextField.default, {
    id: id,
    onChange: onChange,
    defaultValue: defaultValue,
    label: label,
    variant: variant
  });
};

TextFieldComp.defaultProps = {
  id: "filled-basic",
  label: "Filled",
  variant: "filled",
  defaultValue: "uchendubozz@gmail.com"
};
TextFieldComp.propTypes = {
  id: _propTypes.default.string,
  label: _propTypes.default.string,
  variant: _propTypes.default.string,
  onChange: _propTypes.default.func,
  defaultValue: _propTypes.default.string
};
var _default = TextFieldComp;
exports.default = _default;

//# sourceMappingURL=TextFieldComp.js.map