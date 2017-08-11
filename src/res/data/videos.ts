import { normalize, schema } from 'normalizr';

import videosRaw from './videos-data';

var videosData = videosRaw.map(item => { //run images through webpack
  item.img = require('../images/AdApp/videos/' + item.img);
  return item;
});

const videoSchema = new schema.Entity('video');
const videoListSchema = new schema.Array(videoSchema);

export interface VideoInterface{
  id: number;
  img: any;
  src: string;
  title: string;
  url: string;
  featured: boolean;
}

export interface VideoTreeInterface{
    [propName: string]: VideoInterface;
}


const normalData = normalize(videosData,videoListSchema);

export const videos: VideoTreeInterface = normalData.entities.video;

export const videoIds = normalData.result;
