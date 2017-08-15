import Video from '../../components/AdApp/Video';
import {VideoInterface} from '../../res/data/videos';
import {connect} from 'react-redux';

const stateToProps = (state, ownProps): {video: VideoInterface, screenWidth?: number} => {
    //console.log(state);
    console.log(ownProps);
  return {
    video: state.videos[ownProps.match.params.id],
    screenWidth: 500
  }
}
const dispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
export default connect(stateToProps,dispatchToProps)

(Video);