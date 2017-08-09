import * as React from 'react';
import IconButton from 'material-ui/IconButton';
import MoreVirt from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
export interface Props{

}

const ProductContextMenu: React.SFC<Props> = (props) => {
  return <IconMenu iconButtonElement={<IconButton><MoreVirt /></IconButton>} >
                 <MenuItem primaryText="Save for Later" />
                 <MenuItem primaryText="Share" />
                 <MenuItem primaryText="Read Reviews" />
           </IconMenu>;
}

export default ProductContextMenu;