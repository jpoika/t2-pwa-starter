
import * as React from 'react';
import {AppPageInterface} from '../Main';
// import Helmet from 'react-helmet';
// import {connect} from 'react-redux';


interface MyProps {
  appPage: AppPageInterface
  video: any;
}

interface MyState {

}

class Video extends React.Component<MyProps, MyState> {


  componentWillMount () {
    var {video} = this.props;
    this.props.appPage.setPageTitle(video.title);
  }
  render () {
    var {video,appPage} = this.props;

    return (
      <div>
        <video style={{maxWidth: appPage.screen.width, margin: '0px auto 0px auto', display: 'block'}} src={video.src} poster={video.img} controls>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    );
  }
}


export default Video;
