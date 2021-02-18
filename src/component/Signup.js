import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  Avatar,
  Button,
  Checkbox,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
const Signup = () => {
  const paperStyle = { padding: "20px", width: 280, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign up</h2>
          <Typography variant="caption">
            Please fill this form to create an account
          </Typography>
        </Grid>
        <form action="">
          <TextField fullWidth label="Name*" placeholder="Enter name" />
          <TextField
            fullWidth
            label="Email*"
            placeholder="Enter Email, ex:user@gmail.com "
            type="email"
          />
          <FormControl component="fieldset" style={{ margin: 10 }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Phone Number*"
            placeholder="Enter Phone Number"
          />
          <TextField fullWidth label="Password*" placeholder="Enter Password" />
          <TextField
            fullWidth
            label="Confirm Password*"
            placeholder="Confirm Password"
          />
          <FormControlLabel
            control={<Checkbox name="checkedA" />}
            label="Secondary"
          />
          <Button type="submit" color="primary" variant="contained">
            Confirm
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
