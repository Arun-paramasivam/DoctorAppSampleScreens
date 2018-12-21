import React, { Component } from 'react'
import { Dimensions, View, Text, StyleSheet, Platform } from 'react-native'
var { height, width } = Dimensions.get('window');
// import Icon from 'react-native-vector-icons/FontAwesome5'
import Icon from 'react-native-vector-icons/Entypo';



class MyHeader extends Component {

    openDrawer = () => {
        this.props.navigation.openDrawer();
    }


    render() {
        return (
            <View style={[styles.card]}>
                <View style={{ flex: 0.15, justifyContent: 'center', alignItems: "center" }}>
                    <Text onPress={() => this.openDrawer()}>
                        {/* <Text> */}
                        <Icon name="menu" size={30} color="rgb(238,82,83)" />
                    </Text>
                </View>
                <View style={{ flex: 0.85, justifyContent: 'center' }}>
                    <Text style={{ color: 'red' }}>
                        {this.props.headerTitle}
                    </Text>
                </View>
            </View>




        )
    }

}

const styles = StyleSheet.create({
    card: {
        height: height * 0.07,
        justifyContent: 'center',
        // width:'100%',
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 10,
        // width: 400,
        // height: 150,

        alignItems: 'center',
        ...Platform.select({
            android: {
                elevation: 5,
                shadowColor: '#00EE00',
                // shadowOffset: { width: 10, height: 10 },
                // shadowRadius: 5,
            }

        })
    },











})
export default MyHeader;