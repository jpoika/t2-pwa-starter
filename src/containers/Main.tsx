import {connect} from 'react-redux';
import MainComponent from '../components/Main';
import {withRouter} from 'react-router-dom';
import {setPageTitle} from '../actions';

const stateToProps = (state,ownProps: OwnProps):StateToProps => {
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

interface OwnProps{
  version: string;
  defaultTitle?: string;
  appType: string;
}

interface DispPropsInterface{ 
}

// interface ContainerInterface{ //Temp work around;
//   version: string;
//   title: string;
//   appType: string;
// }
interface StateToProps{
  version: string;
  title: string;
}
                                                                                                                              //            
export default withRouter<{turkeyLurkey: boolean}>(connect<StateToProps,DispPropsInterface,OwnProps>(stateToProps,dispatchToProps)(MainComponent));