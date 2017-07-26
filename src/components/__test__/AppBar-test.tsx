import * as React from 'react';
import AppBar from  '../AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as renderer from 'react-test-renderer';
test('Test AppBar Snapshot', () => {

  const component = renderer.create(
    <MuiThemeProvider>
        <AppBar title="phony title" leftIcon={null}  onTitleClick={(event: any) => {}} /> />
    </MuiThemeProvider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});