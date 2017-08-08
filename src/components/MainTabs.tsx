import * as React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MainContent from './MainContent';
// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
// };

export default class TabsExampleControlled extends React.Component<any,any> {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    const defaultProps = {...this.props,basePath: '/'};
    return (
      <div>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          <Tab label="Tab A" value="a" />
          <Tab label="Tab B" value="b" />
        </Tabs>

        <MainContent {...defaultProps} />
        
      </div>
    );
  }
}