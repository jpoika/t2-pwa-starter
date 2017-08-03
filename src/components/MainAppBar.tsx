import * as React from 'react';
import AppBar from '../containers/AppBar';
import {withRouter} from 'react-router-dom';
import {AppPageInterface} from './Main';
import AppRoutes from './AppRoutes';
import GlobalComponents from './GlobalComponents';

export interface Props {
  setPageTitle(title:string): void;
  history: any;
  screen:{width: number, height: number,orientation: string}
  title: string;
  leftIcon: JSX.Element;
  titlePath: string;
  appPage: AppPageInterface;
}

export interface State {

}
class App extends React.Component<Props, State>{

  handleTitleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const {history} = this.props;
    history.push(this.props.titlePath);
  }

  render(){
    const defaultProps = {...this.props,basePath: '/'};
    return <div>
                <AppBar defaultTitle={this.props.title}  leftIcon={this.props.leftIcon} onTitleClick={this.handleTitleClick} />

                <AppRoutes {...defaultProps} />
  
                <GlobalComponents />
            </div>;
 
  }
}

export default withRouter(App);
