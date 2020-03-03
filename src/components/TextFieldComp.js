import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Proptypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

 const TextFieldComp = ({id,label,variant,onChange,defaultValue}) =>{
    return(
      <TextField id={id} onChange={onChange} defaultValue={defaultValue} label={label} variant={variant} />    
    );
}

TextFieldComp.defaultProps = {
    id:"filled-basic",
    label:"Filled",
    variant:"filled",
    defaultValue:"uchendubozz@gmail.com"
}

TextFieldComp.propTypes = {
    id:Proptypes.string,
    label:Proptypes.string,
    variant:Proptypes.string,
    onChange:Proptypes.func,
    defaultValue:Proptypes.string
}

export default TextFieldComp