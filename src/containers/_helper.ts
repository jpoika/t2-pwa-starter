/**
 * @file _helper.tsx
 * Helper functions for math functions and sorting algorithms.
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
export const getDistanceFromLatLonInMiles = (lat1,lon1,lat2,lon2) => {
  //var R = 6371; // Radius of the earth in km
  var R = 3959; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}


/**
 * you must install cordova-plugin-inappbrowser for this to work in cordova apps
 *
 * @return ref
 */
export  const externalLink = (absolutePath:string,target: string = '_system') => {
    return () => {
      if(typeof (window as any).cordova === 'undefined' || typeof (window as any).cordova.InAppBrowser === 'undefined'){
        return window.open(absolutePath,target)
      }
      return (window as any).cordova.InAppBrowser.open(absolutePath, target, 'location=no');
    }

}

export const isProductFavorite = (ob:{id: number},ids:number[]) =>  {
   return ids.indexOf(ob.id) > -1;
}

export const calcDistance = (hospital: {distance: number,latitude: number, longitude: number},refLatitue,refLongitude) => {
  const dist = getDistanceFromLatLonInMiles(hospital.latitude,hospital.longitude,refLatitue,refLongitude);

  hospital.distance = Math.round(dist*100)/100;
  return hospital;
}

export const distanceCompare = (hospitalA: {distance: number}, hospitalB: {distance: number}) => {

  if(hospitalA.distance < hospitalB.distance){
    return -1;
  }

  if(hospitalA.distance > hospitalB.distance){
    return 1;
  }
  return 0;
}

export const distanceSort = (direction:string = 'asc') => {
  return (hospitalA: {distance: number}, hospitalB: {distance: number}) => {

    if(hospitalA.distance < hospitalB.distance){
      return direction === 'asc' ? -1 : 1;
    }

    if(hospitalA.distance > hospitalB.distance){
      return direction === 'asc' ? 1 : -1;
    }
    return 0;
  }
}

export const alphaSort = (propName: string, direction:string = 'asc') => {
  return (itemA, itemB) => {

    if(itemA[propName] < itemB[propName]){
      return direction === 'asc' ? -1 : 1;
    }

    if(itemA[propName] > itemB[propName]){
      return direction === 'asc' ? 1 : -1;
    }
    return 0;
  }
}

export const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
