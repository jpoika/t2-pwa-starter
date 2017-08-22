import Video from '../../components/AdApp/Video';
import {VideoInterface} from '../../res/data/videos';
import {connect} from 'react-redux';

const stateToProps = (state, ownProps): {video: VideoInterface} => {

  return {
    video: state.videos[ownProps.match.params.id]
  }
}
const dispatchToProps = (dispatch, ownProps) => {
  return {

  }
}
export default connect(stateToProps,dispatchToProps)

(Video);