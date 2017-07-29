import {connect} from 'react-redux';
import AppBarComponent from '../components/AppBar';


const stateToProps = (state,ownProps) => {
  return {
    title: state.view.page.title || ownProps.defaultTitle,
    leftIcon: ownProps.leftIcon
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
  }
}

export default connect(stateToProps,dispatchToProps)(AppBarComponent);