import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
//import {assessments} from 'local-t2-assessment-suite';
import {assesslist} from './Assessment';
import {AppPageInterface} from '../Main';
interface Props{
  appPage: AppPageInterface;
  basePath: string;
}
const Assessments: React.SFC<Props> = (props) => {
  const assessments = Object.keys(assesslist).map((key) => {
    return {...assesslist[key],slug: key};
  });
  const onClick = (path) => {
    return (event) => {
      props.appPage.history.push(props.basePath + '/' + path);
    }
  }
  return <List>
        {assessments.map(item => <ListItem key={item.slug} primaryText={item.name} onTouchTap={onClick(item.slug)} />)}
  </List>

}

export default Assessments;