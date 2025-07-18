import { tss } from 'tss-react/mui';

const useStyles = tss.create((theme: any) => ({
  root: {
    textDecoration: 'none',
    textTransform: 'none',
    borderRadius: '100px',
    gap: '8px',

    '&.MuiButton-sizeLarge': {
      height: '60px',
      padding: '0 32px',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '24px',
    },

    '&.MuiButton-sizeMedium': {
      height: '48px',
      padding: '0 32px',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '20px',
    },

    '&.MuiButton-sizeSmall': {
      height: '40px',
      padding: '0 32px',
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '16px',
    },

    // '&.MuiButton-contained:hover': {
    //   backgroundColor: theme.palette.custom.main,
    // },
    // '&.MuiButton-outlined:hover': {
    //     backgroundColor: theme.palette.primary.light,
    //   },
    //   '&.MuiButton-text:hover': {
    //     backgroundColor: theme.palette.primary.light,
    //   },
    '&.Mui-disabled': {
      color: theme.palette.grey[0],
      backgroundColor: theme.palette.action.disabled,
    },
  },
}));

export default useStyles;
