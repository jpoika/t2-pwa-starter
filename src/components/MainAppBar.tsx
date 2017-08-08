import * as React from 'react';
import AppBar from '../containers/AppBar';
import {withRouter} from 'react-router-dom';
import {AppPageInterface} from './Main';
import MainContent from './MainContent';


export interface Props {
  setPageTitle(title:string): void;
  history: any;
  screen:{width: number, height: number,orientation: string}
  title: string;
  defaultTitle: string;
  leftIcon: JSX.Element;
  rightIcon: JSX.Element;
  titlePath: string;
  appPage: AppPageInterface;
}

export interface State {

}
class MainAppBar extends React.Component<Props, State>{

  handleTitleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const {history} = this.props;
    history.push(this.props.titlePath);
  }

  render(){
    const defaultProps = {...this.props,basePath: '/'};
    return <div>
                <AppBar rightIcon={this.props.rightIcon} defaultTitle={this.props.title}  leftIcon={this.props.leftIcon} onTitleClick={this.handleTitleClick} />

                <div style={{padding: 10}}>

                    <MainContent {...defaultProps} />
                    
                </div>
            </div>;
 
  }
}

export default withRouter(MainAppBar);
