import * as React from 'react';

//import {assessments} from 'local-t2-assessment-suite';
import {assessments,AssessmentsList} from 'local-t2-assessment-suite';
import {AppPageInterface} from '../Main';
interface Props{
  appPage: AppPageInterface;
  basePath: string;
}
const Assessments: React.SFC<Props> = (props) => {

  const handleTitle = (title) => {
    props.appPage.setPageTitle(title);
  }

  const handleCancel = (err, assessment) => {
    props.appPage.history.push('/assessments');
  }

  return <div>

            <AssessmentsList onCancel={handleCancel} setPageTitle={handleTitle} cols={2}>

              <assessments.Resilience />
              <assessments.Forgiveness />
              <assessments.Gratitude />
              <assessments.Generosity />
              <assessments.Optimism />
              
            </AssessmentsList>

          </div>;

}

export default Assessments;