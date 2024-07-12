import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

interface User {
  name: string;
  profilePic: string;
}

const Header: React.FC<{ user: User }> = ({ user }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Patient Management Dashboard
        </Typography>
        <Tabs value={0}>
          <Tab label="Dashboard" />
          <Tab label="Analytics" />
        </Tabs>
        <Typography variant="h6" component="div">
          {user.name}
        </Typography>
        <Avatar alt={user.name} src={user.profilePic} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
