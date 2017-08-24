import * as React from 'react';
import {List, ListItem} from 'material-ui/List';
import BookIcon from 'material-ui/svg-icons/av/library-books';
import LinkIcon from 'material-ui/svg-icons/content/link';
import ForumIcon from 'material-ui/svg-icons/communication/forum';
import ExternalLink from '../ExternalLink';

interface Props{
  history: {push: (anay)=>any};
  basePath: string;
}
const Resources: React.SFC<Props> = (props) => {

  const {basePath,history} = props;
  const handlePathClick = (path: string) => {
    return (event) => {
      history.push(basePath + '/' + path);
    }
  }
  return <div>

    <List>
      <ExternalLink absolutePath={require('../../res/docs/eLibrary_resilience.pdf')}>
        <ListItem primaryText="Library" leftIcon={<BookIcon />} />
      </ExternalLink>
      <ListItem onTouchTap={handlePathClick('links')} primaryText="Links &amp; Books" leftIcon={<LinkIcon />} />

      <ExternalLink absolutePath={"http://afterdeployment.dcoe.mil/forums/peer-2-peer"}>
        <ListItem primaryText="Forum" leftIcon={<ForumIcon />} />
      </ExternalLink>
    </List>

  </div>;

}

export default Resources;