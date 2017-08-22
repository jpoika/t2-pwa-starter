/**
 * @file Eula.tsx
 * File renders a EULA (End User Licensing Agreement) as a popup dialog.
 *
 * Created by Jack LightFoot on 08/22/2017
 *
 * T2 PWA Starter
 *
 * Copyright © 2009-2017 United States Government as represented by
 * the Chief Information Officer of the National Center for Telehealth
 * and Technology. All Rights Reserved.
 *
 * Copyright © 2009-2017 Contributors. All Rights Reserved.
 *
 * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
 * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
 * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
 * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
 * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
 * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
 * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
 * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
 * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
 * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
 *
 * Government Agency: The National Center for Telehealth and Technology
 * User Registration Requested. Please send email
 * with your contact information to: robert.a.kayl.civ@mail.mil
 * Government Agency Point of Contact for
 * Original Software: robert.a.kayl.civ@mail.mil
 */
import * as React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {fullWidthDialagStyle} from './commonStyles';
import {eula} from '../res/data/settings';


interface MyProps {
  eulaAccepted: boolean;
  accept(): any;
  reject(): any;
  hideRejectButton: boolean;
}

interface MyState {
  suppressOpen: boolean;
}

export default class Eula extends React.Component<MyProps, MyState> {
  constructor(props){
    super(props);
    this.state = {suppressOpen: true};
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({suppressOpen: false});
    },1000);
  }

  render(){
    const {accept,reject,eulaAccepted,hideRejectButton} = this.props;
    let actions = [
      <FlatButton
        label="Accept"
        primary={true}
        onTouchTap={accept}
      />
    ];

    if(!hideRejectButton){
      actions.push(<FlatButton
            label="Reject"
            primary={true}
            onTouchTap={reject}
        />);
    }

    return (
      <div>

        <Dialog
          title="EULA"
          actions={actions}
          modal={false}
          open={!eulaAccepted && !this.state.suppressOpen}
          contentStyle={fullWidthDialagStyle}
          autoScrollBodyContent={true}
        >
          <h3>{eula.title}</h3>
          {eula.paragraphs.map((para,i) => <p key={i}>{para}</p>)}

        </Dialog>
      </div>
    );
  }
}
