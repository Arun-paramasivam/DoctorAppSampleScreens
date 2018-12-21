import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, TouchableNativeFeedback, TouchableOpacity,ScrollView } from 'react-native';
import Drawer from 'react-native-drawer'
import Menu from './menu'
var { height, width } = Dimensions.get('window');
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';
import MyHeader from './header';


class DoctorDetails extends Component {
    render() {
        return (

            <View style={{ flex: 1 }}>

                <MyHeader headerTitle="Doctor's Profile" navigation={this.props.navigation} ></MyHeader>
                <ScrollView vertical={true} style={{flex:1,margin:5}}>
                <View style={{ flex: 0.35, backgroundColor: 'white', flexDirection: 'row', padding: 10 }}>
                    <View style={{ flex: 0.5 }}>
                        <View style={{ height: 150, width: 150, backgroundColor: 'rgb(238,82,83)', marginTop: 15, borderRadius: 10 }}>
                            <Text style={{ marginLeft: 5, marginTop: 5, color: 'white' }}><EntypoIcon name="star" size={12} color='gold' /> 4.5/5</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.5, marginTop: 10, flexWrap: 'wrap', marginLeft: 2 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Dr.John Doe</Text>
                        <Text style={{ fontSize: 13, fontWeight: "300" }}>Dentist</Text>
                        <Text style={{ fontSize: 13, fontWeight: '300' }}>BDS, MBBS</Text>
                        <Text style={{ fontSize: 13, fontWeight: '300' }}>5 years of experience</Text>
                        <Text style={{ fontSize: 13, marginTop: 0, fontWeight: '300' }}>120 Consultations</Text>
                        <Text style={{ fontSize: 15, marginTop: 5, color: 'green' }}>XYZ Hospital</Text>
                        <Text style={{ fontSize: 10, marginBottom: 5 }}>Vasant Vihar,Delhi</Text>
                        <Text style={{ fontSize: 12, fontWeight: '300' }}><FontAwesomeIcon name="calendar-alt" size={12} color='green' /> 28/10/2018</Text>
                        <Text style={{ fontSize: 12, fontWeight: '300' }}><FontAwesomeIcon name="rupee-sign" size={12} color='green' /> 700</Text>
                    </View>

                </View>
                <View style={{ flex: 0.20,margin:5 }}>
                    <Text style={styles.profileHeading}>About the hospital</Text>
                    <Text style={{ fontWeight: '400', fontSize: 13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur vulputate diam, sit amet commodo libero dapibus non.Nullam bibendum purus ac enim finibus fringilla. Maecenas posuere mi vitae pretium cursus.</Text>
                </View>
                <View style={{margin:5}}>
                    <Text style={styles.profileHeading}>XYZ Hospital</Text>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        
                            <ScrollView horizontal={true}>
                                <View style={styles.squareView}>
                                </View>
                                <View style={styles.squareView}>
                                </View>
                                <View style={styles.squareView}>
                                </View>
                                <View style={styles.squareView}>
                                </View>
                                <View style={styles.squareView}>
                                </View>
                                <View style={styles.squareView}>
                                </View>
                                <View style={styles.squareView}>
                                </View>
                                <View style={styles.squareView}>
                                </View>
                                <View style={styles.squareView}>
                                </View>
                            </ScrollView>
                        
                        </View>

                </View>

                <View style={{ flex: 0.35,margin:5 }}>
                    <Text style={styles.profileHeading}>Reviews</Text>
                    <View style={{ flex: 0.6, flexDirection: 'row' }}>
                        <View style={{ flex: 0.20 }}>
                            <View style={styles.circleView}></View>
                        </View>
                        <View style={{ flex: 0.80 }}>
                            <Text style={{ marginTop: 13, marginLeft: 5 }}>XYZ Person</Text>
                        </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: '400', fontSize: 13 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque consectetur vulputate diam, sit amet commodo libero dapibus non.Nullam bibendum purus ac enim finibus fringilla. Maecenas posuere mi vitae pretium cursus.</Text>
                    </View>

                    <View style={{ flex: 0.20, flexDirection: 'row' }}>
                        <View style={{ flex: 0.50, padding: 5 }}>
                            <TouchableOpacity style={styles.buttonView}><Text style={{ color: 'white', fontSize: 10, textAlign: 'center' }}>Book Online Consultation</Text></TouchableOpacity>

                        </View>
                        <View style={{ flex: 0.50, padding: 5 }}>
                            <TouchableOpacity style={styles.buttonView}><Text style={{ color: 'white', fontSize: 10, textAlign: 'center' }}>Book Direct Visit</Text></TouchableOpacity>
                        </View>
                    </View>


                </View>






                </ScrollView>


            </View>


        );
    }
}

const styles = StyleSheet.create({
    doctorProfile: {
        //background:rgb(238,82,83)



    },
    profileHeading: {
        color: 'rgb(238,82,83)',
        fontSize: 20,
        fontWeight: '400',
        marginTop: 20,
        marginBottom: 10


    },
    circleView: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'rgb(238,82,83)',
    },
    buttonView: {
        backgroundColor: 'rgb(238,82,83)',
        borderRadius: 30,
        height: 30,
        padding: 5,
        marginTop:10,
        marginBottom: 5
        // alignItems: 'center'
    },
    squareView:{
        borderRadius:8,
        margin: 10,
        width: 60,
        height: 60,
        backgroundColor: 'rgb(238,82,83)',

    }



});


export default DoctorDetails;