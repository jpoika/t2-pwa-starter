import * as React from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import { withRouter } from 'react-router-dom';

interface Props{
  history: {push: (any) => any}
}

const LeftMenu: React.SFC<Props> = (props) => {
  const {history} = props;
  const itemClick = (path) => {
    return (event) => {
      history.push(path);
    }
  }

  return (
    <IconMenu

      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem onTouchTap={itemClick('/')} primaryText="Home" />
      <MenuItem onTouchTap={itemClick('/assessments')} primaryText="Assessments" />
      <MenuItem onTouchTap={itemClick('/videos')} primaryText="Videos" />
      <MenuItem onTouchTap={itemClick('/resources')} primaryText="Resources" />
    </IconMenu>
    );
}


export default withRouter(LeftMenu);