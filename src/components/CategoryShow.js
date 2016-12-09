import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const CategoryShow = ({showCategory}) => (
  <div>
    <RaisedButton onClick={() => showCategory("beer")} label="Beer" />
    <RaisedButton onClick={() => showCategory("wine")} label="Wine" />
    <RaisedButton onClick={() => showCategory("spirits")} label="Spirits" />
  </div>
);

export default CategoryShow;
