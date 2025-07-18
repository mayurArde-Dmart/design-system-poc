import React from 'react';
import { ButtonProps, Button as MuiButton } from '@mui/material';
import useStyles from './style';

interface ComponentProps extends ButtonProps {
  customVariant?: string;
}

export const Button: React.FC<ComponentProps> = ({ children, ...muiProps }) => {
  const { classes } = useStyles();

  return (
    <MuiButton {...muiProps} className={classes.root} disableElevation>
      {children}
    </MuiButton>
  );
};
