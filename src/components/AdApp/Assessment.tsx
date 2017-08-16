import * as React from 'react';
import {assessments} from 'local-t2-assessment-suite';
interface Props{
  match: {params: any};
}

export const assesslist = {
    'resilience': {component: null, name: "Resilience"},
    'forgiveness': {component: <assessments.FriendShip />, name: "Forgiveness"},
    'gratitude': {component: null, name: "Gratitude"},
    'generosity': {component: null, name: "Generosity"},
    'optimism': {component: null, name: "Optimism"}
}

const Assessment: React.SFC<Props> = (props) => {
  let ChosenAssessment = assessments.FriendShip;

  if(typeof assesslist[props.match.params.slug] !== 'undefined'){
    ChosenAssessment = assesslist[props.match.params.slug].component || <div>Comming Soon</div>;
  }

  return <div>


        {ChosenAssessment}
  </div>

}

export default Assessment;