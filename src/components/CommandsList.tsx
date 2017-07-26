import * as React from 'react';
import {CommandInterface} from '../res/data/commands';
import CommandListItem from './CommandListItem';
import {List} from 'material-ui/List';
import CommandsPagination from './CommandsPagination';

export interface Props {
  hospitals: CommandInterface[];
  addFavorite(hospital: CommandInterface): void;
  itemClick(hospital: CommandInterface): void;
  history:{push: any}
  setPage: (pageIdx: number) => void;
  page: number;
  lastPage: number;
  searchText: string;
}

export interface State {

}

export default class CommandHospitals extends React.Component<Props, State>{

  constructor(props,context){
    super(props);
  }

  handleItemClick = (hospital) => {
      const {itemClick} = this.props;
      itemClick(hospital);

  }



  render(){
    const {hospitals,page,lastPage,setPage,searchText} = this.props;
    if(!hospitals.length){
      let noResultsText = "No Results";
      if(searchText.length > 0){
        noResultsText += ` for "${searchText}"`
      }
      return <h3>{noResultsText}</h3>;
    }
    return <div>

              <List>
                <CommandsPagination page={page} lastPage={lastPage} setPage={setPage} />
                {hospitals.map(hospital => {
                  return <CommandListItem key={hospital.id} itemClick={this.handleItemClick} hospital={hospital} />
                })}
                <CommandsPagination page={page} lastPage={lastPage} setPage={setPage} />
              </List>
              
           </div>;
  }
}