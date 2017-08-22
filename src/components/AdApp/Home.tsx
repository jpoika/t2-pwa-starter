import * as React from 'react';
import { Card, CardMedia, CardText, CardTitle, CardHeader} from 'material-ui';
import {AppPageInterface} from '../Main'


interface Props{
  appPage: AppPageInterface
}

const Home: React.SFC<Props> = (props) => {

  const showImage = props.appPage.screen.width < 500 ? true : false;
  let cardHeader;    
      if(showImage){
        cardHeader = (<CardMedia
                      overlay={<CardTitle title="Resilience" subtitle="Overview" />}
                      >

                      <img src={require('../../res/images/AdApp/ad_resillence_topics_lg.png')} />
                    </CardMedia>);
      } else {
        cardHeader = <CardHeader
                title={'Resilience'}
                subtitle={"Overview"}
              />
      }
  return (
    <Card>
      {cardHeader}
        
      <CardText>
          Resilience is the ability to respond successfully to the challenges of life. 
          No one is immune to setbacks when faced with these challenges, but those who 
          feel like they are prepared to manage life's difficulties have the greatest 
          chance of overcoming them. This program provides a number of tools to help 
          you anticipate and manage the challenges associated with the deployment cycle. 
          Take an assessment to get feedback on how you are doing or jump into the 
          workshops to learn more about resilience. Check out the videos of others talking 
          about how resilience has played a role in their lives, and explore the e-library 
          for in-depth information.
      </CardText>
    </Card>
  );

}

export default Home;