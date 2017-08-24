import * as React from 'react';

export interface Props{

}

const Links: React.SFC<Props> = (props) => {

  return <div>
            <h3>LINKS</h3>

            <h4>Comprehensive Soldier Fitness Program</h4>

            <p>
              Helping soldiers to build strong minds and strong bodies.<br />
              <a href="http://www.army.mil/csf/index.html">http://www.army.mil/csf/index.html</a>
            </p>
            <h4>Real Warriors Program</h4>

            <p>
            Provides a number of resources for building strength before and after deployments.<br />
            <a href="http://www.realwarriors.net/">http://www.realwarriors.net/</a>
            </p>

            <h4>The American Psychological Association Help Center (Health &amp; Emotional Wellness)</h4>

            <p>
              Includes a number of brief articles related to health and emotional well-being, ranging from stress and health to coping with chronic illness. <br />
              <a href="http://apahelpcenter.org/articles/topic.php?id=3">http://apahelpcenter.org/articles/topic.php?id=3</a>
            </p>

            <h3>BOOKS</h3>
            <p>
            Smith, M. J. (1985). When I Say No, I Feel Guilty. This book offers a variety of strategies 
            to develop assertiveness skills and manage feels of guilt. Other topics include being 
            persistent, dealing successfully with criticism, and more effective communication in 
            professional and personal relationships.
            </p>
            <p>
            McKay, M., Wood, J. C., &amp; Brantley, J. (2007). Dialectical Behavior Therapy Workbook: 
            Practical DBT Exercises for Learning Mindfulness, Interpersonal Effectiveness, Emotion 
            Regulation, &amp; Distress Tolerance. As the title implies, this text introduces specific 
            skills based on Dialectical Behavior Therapy (DBT). The book presents basic and advanced 
            strategies for distress tolerance, mindfulness, emotional regulation, and interpersonal 
            effectiveness.
            </p>
  </div>;

}

export default Links;