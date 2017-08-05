import * as React from 'react';
import AppBar from '../containers/AppBar';
import {withRouter} from 'react-router-dom';
import {AppPageInterface} from './Main';
import Bundle from './Bundle';
const  loadAppRoutes = require('bundle-loader?lazy!./AppRoutes');
const  loadGlobalComponents = require('bundle-loader?lazy!./GlobalComponents');


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

                <div style={{padding: 10}}>
                    <Bundle load={loadAppRoutes}>
                      {(AppRoutes) => (AppRoutes
                        ? <AppRoutes {...defaultProps} />
                        : null
                      )}
                    </Bundle>
                    <Bundle load={loadGlobalComponents}>
                      {(GlobalComponents) => (GlobalComponents
                        ? <GlobalComponents />
                        : null
                      )}
                    </Bundle>
                 </div>
            </div>;
 
  }
}

export default withRouter(App);
