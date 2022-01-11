import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'black',
      },
    },
  },
  country: {
    fontSize: '20px'
  },
  weatherBox: {
    marginTop: 25
  },
  climate: {
    textTransform: 'capitalize'
  }
});

export { useStyles };