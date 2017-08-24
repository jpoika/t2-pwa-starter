/**
 * @file commonStyles.ts
 * File contains variables for component styling. Each variable represents
 * a css style to be passed in to a component.
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
export const PrimaryColor = "#1b4583";
export const PrimaryColor2 = "#000000";

export let listItemImage = {
  width: '80px',
  height: '80px'
}

export let blueBackgroundPage = {

}
export let greyContainer = {
    backgroundColor: '#E0E0E0',
    padding: '10px 10px 10px 10px'
}
export let whiteContainer = {
    backgroundColor: 'white',
    padding: '10px 10px 10px 10px'
}
export let blueContainer = {
    backgroundColor: PrimaryColor,
    padding: '10px 10px 10px 10px',
    color: 'white',
    textAlign: 'center',
    minHeight: 35,
    position: 'relative' as 'relative'
}
export let titleStyles1 = {
  color: PrimaryColor,
  fontWeight: 900 as 900,
  padding: 15,
  fontSize: 18
}

export let subtitleStyles1 = {
  color: PrimaryColor2,
  fontWeight: 700 as 700,
  padding: '0px 15px 0px 15px',
  fontSize: 14
}

export let titleStyles3 = {
  color: PrimaryColor,
  fontWeight: 900 as 900,
  padding: '5px 15px 5px 15px',
  fontSize: 18
}

export let subtitleStyles3 = {
  color: PrimaryColor2,
  fontWeight: 700 as 700,
  padding: '5px 15px 5px 15px',
  fontSize: 14
}

export let titleStyles2 = {
  color: PrimaryColor2,
  fontWeight: 900 as any,
  fontSize: 18,
  textAlign: 'center'
}
export let titleStylesLeft2 = {...titleStyles2,textAlign: 'left'}

export let contentContainer1 = {
  margin: '0px auto 0px auto',
  width: 500
}

export let socialIcons = {
  width: 50,
  marginRight: 10
}

export const fullWidthDialagStyle = {
  width: '100%',
  maxWidth: '700px'
};

export let homeFooterDefault = {

}
export let homeFooterAbsolute = {
  position: 'absolute' as 'absolute',
  bottom: 0
}

export let appBarTitleStyle = {
  position: 'relative' as 'relative',
  left: -40,
  top: 1
}

export let appBarIconeStyle = {
  position: 'relative' as 'relative',
  left: -20
}

export let toolBarContentLeft = {
  position: 'absolute' as 'absolute',
  top: 0,
  width: 200
}

export let toolBarContentRight = {
  position: 'absolute' as 'absolute',
  right: 0,
  top: 0
}
