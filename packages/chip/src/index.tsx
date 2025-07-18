import React from 'react';
import { Chip as MuiChip } from '@mui/material';

type ChipProps = {
  label: string;
  color?: 'default' | 'primary' | 'secondary';
};

export const Chip = ({ label, color = 'default' }: ChipProps) => {
  return <MuiChip label={label} color={color} />;
};
