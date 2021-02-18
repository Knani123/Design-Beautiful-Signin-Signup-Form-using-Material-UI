import { Box, Paper, Tab, Tabs, Typography } from "@material-ui/core";
import { SingleBed } from "@material-ui/icons";
import React, { useState } from "react";
import Login from "../component/Login";
import Signup from "../component/Signup";

const SignInOutContainer = () => {
  const paperStyle = { width: 320, margin: "20px auto" };
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  return (
    <Paper style={paperStyle} elevation={20}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Sign In" />
        <Tab
          label="Sign up
"
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Login handleChange={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup handleChange={handleChange} />
      </TabPanel>
    </Paper>
  );
};

export default SignInOutContainer;
