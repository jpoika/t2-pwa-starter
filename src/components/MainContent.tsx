import * as React from 'react';

import Bundle from './Bundle';
const  loadAppRoutes = require('bundle-loader?lazy!./AppRoutes');
const  loadGlobalComponents = require('bundle-loader?lazy!./GlobalComponents');
// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
// };

export default class MainContent extends React.Component<any,any> {

 

  render() {
    const defaultProps = {...this.props,basePath: '/'};
    return (
      <div>

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
    );
  }
}