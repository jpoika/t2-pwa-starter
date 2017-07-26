import * as React from 'react';
import ProductsListContainer from '../containers/ProductsList';
import {AppPageInterface} from './Page';
import {whiteContainer} from './commonStyles'
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

  componentDidMount(){
    const {appPage} = this.props;
    if(appPage.progressVisible){
      appPage.hideProgress();
    }
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