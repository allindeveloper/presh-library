import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Proptypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


 const ButtonComp = ({text,color,variant,disabled,size,classes,callback}) =>{
    return(
        <Button onClick={callback} className={classes} variant={variant} color={color} size={size} disabled={disabled}>{text}</Button>
    );
}

ButtonComp.defaultProps = {
    text:"Submit",
    variant:"contained",
    size:"medium",
    color:"primary",
    disabled:false,
    classes:null,
    callback: ()=>{console.log("Button CLicked")}
}

ButtonComp.propTypes = {
    text:Proptypes.string,
    variant:Proptypes.string,
    size:Proptypes.string,
    color:Proptypes.string,
    disabled:Proptypes.bool,
    classes:Proptypes.object,
    callback:Proptypes.func
}

export default ButtonComp