import {connect} from 'react-redux';
import MainComponent from '../components/Main';
import {withRouter} from 'react-router-dom';
import {setPageTitle} from '../actions';

const stateToProps = (state,ownProps) => {
  return {
    version: ownProps.version,
    title: ownProps.defaultTitle
  }
}
const dispatchToProps = (dispatch,ownProps) => {
  return {
    setPageTitle: (title:string) => {
      dispatch(setPageTitle(title));
    }
  }
}

export default withRouter(connect(stateToProps,dispatchToProps)(MainComponent));