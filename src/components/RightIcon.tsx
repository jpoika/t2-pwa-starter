import * as React from 'react'
import IconButton from 'material-ui/IconButton';
import MoreVirt from 'material-ui/svg-icons/navigation/more-vert';

export interface Props{

}

export default class RightIcon extends React.Component<Props,{}> {

  render() {
    return <IconButton>
                  <MoreVirt />
                </IconButton>;
  }
}