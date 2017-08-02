import {connect} from 'react-redux';
import AppChecklistComponent from '../../components/StoreDemo/AppChecklist';
import {withRouter} from 'react-router-dom';

const stateToProps = (state,ownProps) => {
  return {
    version: ownProps.version
  }
}

const dispatchToProps = (dispatch,ownProps) => {
  return {

  }
}


export default withRouter(connect(stateToProps,dispatchToProps)(AppChecklistComponent));