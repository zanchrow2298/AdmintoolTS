import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export const useStyles = makeStyles((theme: Theme) => ({
  centerDiv: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '10px',
    backgroundColor: "#FFFFFF",
    borderRadius: '0px 0px 15px 15px',
    width: '70%',
    height: '50%',
    maxWidth: '50vh',
    maxHeight: '45vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      height: '50%',
      maxWidth: '50vw', 
      maxHeight: '55vh',
    },
  },
  inputContainer: {
    marginTop:'10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px'
  },
  button: {
    borderRadius: '0px !important',
    width: '10vw',
    [theme.breakpoints.down('sm')]: {
      width: '30vw'
    },
  },
  fullPageContainer: {
    position: 'relative',
    height: '100vh'
  }


}));
