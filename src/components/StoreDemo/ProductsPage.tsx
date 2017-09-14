/**
 * @file ProductsPage.tsx
 * A component for searching for Products.
 *
 * Created by T2 on 08/22/2017
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
import ProductsListContainer from '../../containers/StoreDemo/ProductsList';
import {AppPageInterface} from '../Main';
import {whiteContainer} from '../commonStyles'
export interface Props {
  appPage: AppPageInterface;
  searchText?: string;
}

export interface State {
  searchText: string;
}

export default class ProductsPage extends React.Component<Props, State>{
  static defaultProps: Partial<Props> = {
    searchText: ""
  }
  constructor(props){
    super(props);
    this.state = {
      searchText: props.searchText
    }
  }

  componentWillMount(){
    this.props.appPage.setPageTitle("Products");
  }

  handleSearchHospitals = (text: string) => {
    this.setState({
      searchText: text
    });
  }

  render(){
    return <div style={whiteContainer}>
              <ProductsListContainer />
    </div>;
  }
}
