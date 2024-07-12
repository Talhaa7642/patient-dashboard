import React from 'react';
import { TextField, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const SearchFilter = ({ search, setSearch, filter, setFilter }: any) => {
  return (
    <div style={{ margin: '20px 0' }}>
      <TextField
        label="Search"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ marginRight: 2 }}
      />
      <FormControl variant="outlined">
        <InputLabel>Filter</InputLabel>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          label="Filter"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="attend">Attend</MenuItem>
          <MenuItem value="missed">Missed</MenuItem>
          <MenuItem value="cancelled">Cancelled</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SearchFilter;
