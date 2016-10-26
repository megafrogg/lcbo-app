import React from 'react';
import TextField  from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

let inputRef;

const SearchBar = ({onSearch}) => (
  <Toolbar>
    <ToolbarGroup>
      <TextField
        hintText="What would you like to drink?"
        ref={(input) => inputRef = input} //set inputRef to value of SearchBar, to be passed back up to App
      />
      <FlatButton onClick={() => onSearch(inputRef.getValue())} label="Search" primary={true} />
    </ToolbarGroup>
  </Toolbar>
);

export default SearchBar;
