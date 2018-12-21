import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


class Menu extends Component {
  render() {
    return (
      
      <View style={{ flex: 1 }}>
        <View style={styles.profilePicView}>
          
          <View style={styles.circleView}>
          </View>
          <Text style={styles.profileNameView}>John Doe</Text>

        </View>
        <View style={styles.menuView}>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('Search')}>
            <Text style={styles.menuItemsView}>Profile </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('DoctorDetails')}>
          <Text style={styles.menuItemsView}>My Booking </Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => this.props.navigation.navigate('SearchListing')}>
          <Text style={styles.menuItemsView}>Online Consultation </Text>
        </TouchableOpacity>
          <Text style={styles.menuItemsView}>Medical Records </Text>
          <Text style={styles.menuItemsView}>Request Quote </Text>
        </View>

        <View style={styles.logoutView}>
          <Text style={{ paddingLeft: 30 }}>Logout</Text>
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  profileNameView: {
    color: 'white',
    fontSize: 10,
    marginTop: 10,
    marginLeft: 35,

  },
  circleView: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: 'white',
    marginTop: 50,
    marginLeft: 25
  },
  profilePicView: {
    flex: 0.25,
    backgroundColor: 'rgb(238,82,83)'
  },
  menuItemsView: {
    paddingTop: 20,
    // fontWeight: "200",
    color: 'black'
  },
  menuView: {
    flex: 0.65,
    alignItems: 'flex-start',
    paddingLeft: 30

  },
  logoutView: {
    flex: 0.10
  }



})


export default Menu;