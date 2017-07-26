import * as React from 'react';
import {AppPageInterface} from './AppTheme';
import { Link } from 'react-router-dom';
import {externalLink} from '../containers/_helper';

declare module 'react' { //See https://github.com/zilverline/react-tap-event-plugin/issues/58
    interface HTMLProps<T> {
        onTouchTap?: React.EventHandler<React.TouchEvent<T>>;
    }
}



const locationsImage = require("../res/images/ui/trimmed/button-locations.png");
const hotlinesImage = require("../res/images/ui/trimmed/button-dod-hotline-big.png");
const resourcesImage = require("../res/images/ui/trimmed/button-resources.png");
const relayHealthImage = require("../res/images/ui/trimmed/button-relay-health-big.png");
const leaderShipImage = require("../res/images/ui/trimmed/button-leadership.png");

const facebookImage = require("../res/images/ui/mtf-home-facebook-centered.png");
const twitterImage = require("../res/images/ui/mtf-home-twitter-centered.png");
const youTubeImage = require("../res/images/ui/mtf-home-youtube-centered.png");
const favoriteImage = require("../res/images/ui/mtf-home-favorite-centered.png")
const footerImage = require("../res/images/ui/mtf-home-footer.png");


// const buttonRowSpacing = {
//   margin: '20px auto 20px auto'
// }
let styles = {
  backgroundColor: '#1b4583',
  margin: '0px auto 0px auto',
  width: 500,
  paddingTop: 25
}

let footerStyles = {
  margin: '0px auto 0px auto',
  position: 'absolute' as 'absolute',
  bottom: 0
}

// let socialImageContainerStyles = {
//   float: 'left',
//   position: 'relative' as 'relative'
// }

let imageLast = {
  position: 'absolute' as 'absolute',
  right: 0
}
export interface Props {
  appPage: AppPageInterface;
  match:{url: string};
}

export interface State {
  
}

export default class Home extends React.Component<Props, State>{
  static MAX_WIDTH:number = 532;
  getMainButtonWidth = () => {
    return this.getContentWidth();
  }
  getLimitedContentWidth = () => {
    const {appPage} = this.props;
    const maxWidth = Home.MAX_WIDTH;
    return  (appPage.screen.width > maxWidth ? maxWidth : appPage.screen.width);
  }

  getContentWidth = () => {
    return  this.getLimitedContentWidth() * 0.90;
  }

  componentWillMount(){
    this.props.appPage.setPageTitle("Home");
  }

  handleProgressClick = (path:string,ms:number) => {
    return (event) => {
      event.preventDefault();
      event.stopPropagation();
      const {appPage} = this.props;
      appPage.navigateProgress(path,ms);
    }

  }

  render(){
    const {match,appPage} = this.props;
    const contentWidth = this.getContentWidth();
    const limitedWidth = this.getLimitedContentWidth();
    styles = {...styles, width: this.getContentWidth()};
    // const halfButtonStyles = {
    //   width: contentWidth / 2
    // }
    const width_dev_4 = contentWidth / 4;
    // const socialContainer = {...socialImageContainerStyles,width: width_dev_4};
    // const socialImage = {width: width_dev_4 * 0.8};
    imageLast ={...imageLast,width: width_dev_4 * 0.8};
    //const imageMiddle = {...socialImage, margin: '0px auto 0px auto'};
    footerStyles = {...footerStyles,width: limitedWidth};
    const socImgStyles = {display: 'block', margin: '0px auto 0px auto', width: 80};
    return <div style={{width: limitedWidth, height: appPage.screen.height, margin: 'auto auto auto auto'}}>
                <div style={{margin: 15}} onTouchTap={this.handleProgressClick(match.url + 'commands',5000)}>
         
                    <img style={{width: '100%'}}  src={locationsImage} />
                 
                </div>
                <div style={{margin: 15}}>
                  <Link to={match.url + 'hotlines'}>
                    <img style={{width: '50%'}} src={hotlinesImage} />
                  </Link>  
                  <span onTouchTap={externalLink("https://app.mil.relayhealth.com/")}>
                    <img style={{width: '50%'}} src={relayHealthImage} />
                  </span>
                </div>
                <div style={{margin: 15}}>
                  <Link to={match.url + 'resources'}>
                    <img style={{width: '50%'}} src={resourcesImage} />
                  </Link>
                  <Link to={match.url + 'leadership'}>
                    <img style={{width: '50%'}} src={leaderShipImage} />
                  </Link>
                </div>
                <div style={{height: 100,margin: 15,paddingTop: 10}}>
                    <div style={{float: 'left',width: '25%'}}>
                        <Link to={"/facebook"}>
                          <img style={socImgStyles} src={facebookImage} />
                        </Link>
                    </div>
                    <div style={{float: 'left',width: '25%'}}>
                        <Link to={"/twitter"}>
                          <img style={socImgStyles} src={twitterImage} />
                         </Link>
                    </div>
                    <div style={{float: 'left',width: '25%'}}>
                      <div>
                        <img style={socImgStyles} onTouchTap={externalLink('https://www.youtube.com/user/USNavyMedicine')} src={youTubeImage} />
                      </div>
                    </div>
                    <div style={{float: 'left',width: '25%'}}>
                        <Link to={"/favorites"}>
                          <img  style={socImgStyles} src={favoriteImage} />
                        </Link>
                    </div>
                </div>
                <div style={{margin: '10px 10px -1px 10px'}}>
                    <img style={{borderRadius: 10, width: '100%',}} onTouchTap={externalLink('http://www.med.navy.mil')} src={footerImage} />
                </div>
                <div style={{textAlign: 'right',color: 'white',fontSize: '10px',paddingRight: '20px'}}>
                  Version: 1.0.0
                </div>
          </div>;
  }
}