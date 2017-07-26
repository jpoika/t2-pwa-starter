import * as React from 'react';
import {AppPageInterface} from './Page';

declare module 'react' { //See https://github.com/zilverline/react-tap-event-plugin/issues/58
    interface HTMLProps<T> {
        onTouchTap?: React.EventHandler<React.TouchEvent<T>>;
    }
}



export interface Props {
  appPage: AppPageInterface;
  match:{url: string};
}

export interface State {
  
}

export default class Home extends React.Component<Props, State>{


  componentWillMount(){
    this.props.appPage.setPageTitle("Home");
  }

  render(){
  
    return <div>
               <h1>Default Home Page</h1>
          </div>;
  }
}