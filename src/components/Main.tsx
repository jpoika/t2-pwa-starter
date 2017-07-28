import * as React from 'react';
import MainAppBar from './MainAppBar';

export default class Main extends React.Component<{}, {}>{

  render(){
    return <MainAppBar {...this.props} />
  }
}