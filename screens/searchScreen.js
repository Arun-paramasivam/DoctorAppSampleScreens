import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,ScrollView, Dimensions, TextInput } from 'react-native';
import Drawer from 'react-native-drawer'
import Menu from './menu'
var { height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Entypo';
import { DrawerNavigator } from 'react-native'
import MyHeader from './header';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchKey: ''
        }
    }

    onChangeInput = (value) => {
        this.setState({ searchKey: value })

    }

    // toggleDrawer = () =>{
    //     this._drawer.toggle()
    // }
    render() {
        return (
           
                <View style={{ flex:1 ,  backgroundColor: 'white',  }} onPress={() => this.closeDrawer()}>
                   
                    <MyHeader 
                        headerTitle="Home"
                        navigation={this.props.navigation}
                    >
                    </MyHeader>

                    <ScrollView vertical={true} style={{flex:1 ,margin:5}}>
                    
                    <View style={{ flex:0.4,height:200, justifyContent: 'center', backgroundColor: 'rgb(238,82,83)', borderBottomStartRadius:100,borderBottomEndRadius:100}}>
                        <TextInput
                            style={{ backgroundColor: 'white', width: 230, marginLeft: 55, borderRadius: 30, paddingLeft: 30 }}
                            placeholder="Search"
                            placeholderTextColor="black"
                            onChangeText={(value) => this.onChangeInput(value)}
                        >
                        </TextInput>

                    </View>
                   


                    <View style={{ flex:0.60}}>

                        <View style={styles.container}>
                            <View style={styles.card}>
                                <Text>Opthalmology</Text>
                            </View>
                            <View style={styles.card}>
                                <Text>Dental</Text>
                            </View>
                        </View>

                        <View style={styles.container} >
                            <View style={styles.card}>
                                <Text>Cardiology</Text>
                            </View>
                            <View style={styles.card}>
                                <Text>Neurology</Text>
                            </View>
                        </View>


                        <View style={styles.container}>
                            <View style={styles.card}>
                                <Text>Dermatology</Text>
                            </View>
                            <View style={styles.card}>
                                <Text>Pediatric</Text>
                            </View>
                        </View>



                    </View>
                    </ScrollView>
                </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.40,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'aqua',
        flexDirection: 'row',
        padding:5
        

    },

    card: {
        backgroundColor: 'white', 
        width: 150,
        height:90,
        justifyContent: 'center', margin: 10,

        alignItems: 'center',
        ...Platform.select({
            android: {
                elevation: 5,
                shadowColor: '#000',
                shadowOffset: { width: 10, height: 10 },
                shadowRadius: 10,
            }

        })
    },
    homeView: {

    }


});


export default Search;