import {connect} from 'react-redux';
import AppBarComponent from '../components/AppBar';

interface OwnPropsInterface{
  leftIcon: any;
  rightIcon: any;
  defaultTitle?: string;
  onTitleClick?: any;
}

interface StatePropsInterface{
  title: string;
  rightIcon: JSX.Element;
  leftIcon: JSX.Element;
}

interface DispPropsInterface{ // just testing ts and doesn't seem to work
}


const stateToProps = (state,ownProps:OwnPropsInterface) => {
  return {
    title: state.view.page.title || ownProps.defaultTitle,
    leftIcon: ownProps.leftIcon,
    rightIcon: ownProps.rightIcon
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
  }
}
/**
 * Trying to get typessafe containers using connect. This is as close as I can get for now
 * @see https://spin.atomicobject.com/2017/04/20/typesafe-container-components/
 * @see https://stackoverflow.com/questions/40671978/typescript-struggles-with-redux-containers
 */

export default connect<StatePropsInterface,DispPropsInterface,OwnPropsInterface>(stateToProps,dispatchToProps)(AppBarComponent);