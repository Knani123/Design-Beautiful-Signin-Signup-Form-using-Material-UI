import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { Router } from "@material-ui/icons";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";
const Login = ({ handleChange }) => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#4ee6de" };
  const btnStyle = { margin: "8px 0" };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ margin: "0" }}>Sign In</h2>
        </Grid>
        <TextField label="Username*" placeholder="Enter username" fullWidth />
        <TextField
          label="Password*"
          type="password"
          placeholder="Enter password"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox name="checkedB" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          color="primary"
          fullWidth
          variant="contained"
          style={btnStyle}
        >
          Confirm
        </Button>
        <Typography>
          <Link>Forgot password ?</Link>
        </Typography>
        <Typography>
          {" "}
          Do you have an account ?
          <Link href="#" onClick={(e) => handleChange(e, 1)}>
            Sign up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
