import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormControl, Button, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from 'react-router-dom';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useStyles } from './Auth.styles';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const classes = useStyles();
  const {
    control,
    handleSubmit,
    getValues
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const onSubmit = (data: any) => {
    if (getValues('email') === 'email' && getValues('password') === 'password') {
      console.log(getValues('email'), getValues('password'));
      onLogin();
      navigate('/');
    } else {
      console.log('wrong');
    }
  };

  return (
 
      <div className={classes.centerDiv}>
        <p>Login</p>
        <div className={classes.inputContainer}>
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-email"
                  type="text"
                  endAdornment={
                    <InputAdornment position="end">
                      <MailOutlineIcon />
                    </InputAdornment>
                  }
                  label="Email"
                />
              )}
            />
          </FormControl>
        </div>
        <div className={classes.inputContainer}>
          <FormControl sx={{ m: 1, width: '50ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <OutlinedInput
                  {...field}
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              )}
            />
          </FormControl>
        </div>
        <Grid container spacing={1} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              style={{ backgroundColor: '#000000' }}
              className={classes.button}
              onClick={handleSubmit(onSubmit)}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </div>
  );
};

export default Login;
