/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import Search from './screens/searchScreen'
import DoctorDetails from './screens/doctorDetailsScreen'
import SearchListing from './screens/searchListings'
import MyHeader from './screens/header'
import { createDrawerNavigator,createAppContainer } from "react-navigation";
import Menu from './screens/menu';


const Apps =  createDrawerNavigator({
	DoctorDetails: {
	  screen: DoctorDetails
	},
	Search: {
	  screen: Search
	},
	SearchListing:{
		screen: SearchListing
	}
	

  }, {
	contentComponent: Menu,
	drawerWidth: 250,  
	initialRouteName: "Search"
  });
  export default createAppContainer(Apps);
