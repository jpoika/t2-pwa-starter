import * as React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';

export interface Props{
  basePath: string;
}

const LeftMenu: React.SFC<Props> = (props) => {
  const {basePath} = props;
  return (
    <IconMenu

      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem containerElement={<Link to={basePath} />} primaryText="Home" />
      <MenuItem containerElement={<Link to={basePath+"/products"} />} primaryText="Products" />
    </IconMenu>
    );
}


export default LeftMenu;