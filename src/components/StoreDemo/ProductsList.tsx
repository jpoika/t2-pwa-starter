/**
 * @file ProductsList.tsx
 * Component renders a list of products.
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
import {ProductInterface} from '../../res/data/products';
import FavoriteCheckbox from '../FavoriteCheckBox';
import {GridList, GridTile} from 'material-ui/GridList';

import {AppPageInterface} from '../Main'
export interface FavoriteProductInterface extends ProductInterface{
  isFavorite: boolean;
}

export interface Props {

  itemClick(product: ProductInterface): void;
  setPage: (pageIdx: number) => void;
  toggleFavorite(item: FavoriteProductInterface): void;

  history:{push: any}
  products: FavoriteProductInterface[];
  page: number;
  lastPage: number;
  searchText: string;
  cols?: number;
  appPage:AppPageInterface;
}

export interface State {

}

export default class ProductsList extends React.Component<Props, State>{
  public static defaultProps: Partial<Props> = {
    cols: 2
  }

  constructor(props,context){
    super(props);
  }

  handleItemClick = (product) => {
    const {itemClick} = this.props;
    return (event) => {
      event.preventDefault();
      event.stopPropagation();
      itemClick(product);
    }
  }


  handleToggleFavorite = (product:FavoriteProductInterface) => {
    const {toggleFavorite} = this.props;
    return (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleFavorite(product);
    }
  }

  render(){
    const {products/*page,lastPage,setPage,*/} = this.props;

    return <div>


              <GridList cols={this.props.cols}>
                {products.map(product => {
                  return <GridTile
                            key={product.id}
                            title={product.title}
                            onTouchTap={this.handleItemClick(product)}
                            actionIcon={<FavoriteCheckbox toggleFavorite={this.handleToggleFavorite(product)} checked={product.isFavorite} />}
                          >
                            <img key={product.image} src={product.image} />
                          </GridTile>
                })}
              </GridList>

           </div>;
  }
}
