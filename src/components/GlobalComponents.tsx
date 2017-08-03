import * as React from 'react';
import EulaDialog from '../containers/Eula';
import SnackbarGlobal from '../containers/SnackbarGlobal';

const GlobalComponents: React.SFC<{}> = (props) => {

  return <span>
       <EulaDialog />
       <SnackbarGlobal />
  </span>

}

export default GlobalComponents;