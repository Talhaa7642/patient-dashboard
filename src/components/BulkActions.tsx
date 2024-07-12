import React from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

const BulkActions = ({ selectedPatients, setSelectedPatients }: any) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAction = (action: any) => {
    console.log(`${action} selected patients:`, selectedPatients);
    handleClose();
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Bulk Actions
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleAction('attend')}>Make Attend</MenuItem>
        <MenuItem onClick={() => handleAction('missed')}>Make Missed</MenuItem>
        <MenuItem onClick={() => handleAction('cancelled')}>Make Cancelled</MenuItem>
      </Menu>
    </div>
  );
};

export default BulkActions;
