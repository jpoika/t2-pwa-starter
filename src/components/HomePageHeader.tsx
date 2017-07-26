import * as React from 'react';
import {AppPageInterface} from './AppTheme';

const homeHeaderImage = require("../res/images/ui/mtf-home-header.png");

export interface Props {
  appPage: AppPageInterface;
}

export interface State {
  
}

export default class HomePageHeader extends React.Component<Props, State>{
  render(){
    const {appPage} = this.props;
    const maxWidth = 640;
    const width = appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width;
    const imageStyles = {width: width};
    const containerStyles = {...imageStyles,margin: '0px auto 0px auto'};
    return <div style={{backgroundColor: '#000000'}}>
            <div style={containerStyles}>
              <img style={imageStyles} src={homeHeaderImage} />
            </div>
          </div>;
  }
}


