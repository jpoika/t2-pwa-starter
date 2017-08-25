import * as React from 'react';

//import {assessments} from 'local-t2-assessment-suite';
import {assessments,AssessmentsList} from 'local-t2-assessment-suite';
import {AppPageInterface} from '../Main';
import BackButton from '../BackButton';
interface Props{
  appPage: AppPageInterface;
  basePath: string;
}
const Assessments: React.SFC<Props> = (props) => {

  const handleAssessmentMounted = (assessment) => {
    props.appPage.setPageTitle(assessment.title);
    props.appPage.setMainIcon(<BackButton path={'/assessments'} />);
    props.appPage.setTitlePath('/assessments');
  }

  const handleCancel = (err, assessment) => {
    props.appPage.history.push('/assessments');
  }

  return <div>

            <AssessmentsList onCancel={handleCancel} onAssessmentMounted={handleAssessmentMounted} cols={2}>

              <assessments.Resilience />
              <assessments.Forgiveness />
              <assessments.Gratitude />
              <assessments.Generosity />
              <assessments.Optimism />
              
            </AssessmentsList>

          </div>;

}

export default Assessments;