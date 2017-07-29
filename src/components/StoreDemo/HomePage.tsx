import * as React from 'react';
import {AppPageInterface} from '../Page';
export interface Props {
  appPage: AppPageInterface;
}


export default class HomePage extends React.Component<Props, {}>{

  render(){
    return <div>
              <h3>Demo Home</h3>
    </div>;
  }
}