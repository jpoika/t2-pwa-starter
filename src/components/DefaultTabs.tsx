import * as React from 'react';
import {Tab} from 'material-ui/Tabs';

//If you aren't using tabs just return an empty array
//e.g export default []
const tabs = [
      <Tab label="Home" value="/" />,
      <Tab label="Demo" value="/store" />,
      <Tab label="Products" value="/store/products" />
    ];

export default tabs;