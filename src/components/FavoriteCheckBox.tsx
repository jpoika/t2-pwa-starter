import * as React from 'react';
import ActionFavorite from 'material-ui/svg-icons/toggle/star';
import ActionFavoriteBorder from 'material-ui/svg-icons/toggle/star-border';
import IconButton from 'material-ui/IconButton';

export interface Props {
  checked?: boolean;
  toggleFavorite(event: any):void;
}

export interface State {

}

export default class FavoriteCheckbox extends React.Component<Props, State>{
  public static defaultProps: Partial<Props> = {
     checked: false
  }

  handleToggle = (event) => {
    const {toggleFavorite} = this.props;
    toggleFavorite(event);
  }
  
  render(){
    const {checked} = this.props;
    const icon = checked ? <ActionFavorite color={"yellow"} /> : <ActionFavoriteBorder color={"white"} />;
                

    return  <IconButton style={{float: 'right'}} onTouchTap={this.handleToggle}>{icon}</IconButton>;
  }
}