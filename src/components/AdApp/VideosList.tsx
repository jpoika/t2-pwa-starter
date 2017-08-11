import * as React from 'react';
import {VideoInterface} from '../../res/data/videos';
import {GridList, GridTile} from 'material-ui/GridList';
export interface Props{
  videos: VideoInterface[];
  cols: number;
  onClick: (videos: {id: number}) => void;
}

const VideosList: React.SFC<Props> = (props) => {
  const {videos, cols,onClick} = props;
   console.log((props as any).basePath);
  //<Link key={tile.id} to={'/main/videos/'+tile.id}  cols={tile.featured ? 1 : 1} >
  return <GridList
        cols={cols}
      >

        {videos.map((item) => (

            <GridTile
              key={item.id}
              onTouchTap={() => onClick(item)}
              
              title={item.title}
            >
              <img src={item.img} />
            </GridTile>
        
         
        ))}
      </GridList>

}

export default VideosList;