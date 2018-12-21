import React, { Component } from 'react';
// import { View } from 'native-base';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native'
import MyHeader from './header';





class SearchListing extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stars: false,
            experience: false
        }
    }

    changeStars(value) {
        this.setState({ stars: value })
    }

    changeExperience(value){
        this.setState({ experience:value})
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <MyHeader headerTitle="Search Listings" navigation={this.props.navigation} ></MyHeader>
                <ScrollView vertical={true} style={{ flex: 1 }}>
                    <View style={{ flex: 0.10, marginTop: 15, marginLeft: 20, marginTop: 10 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: 0.40 }}>
                                <Text style={{ textAlign: 'center', fontWeight: '400', fontSize: 10, marginTop: 3 }}>Sort By Stars</Text>
                            </View>
                            <View style={styles.sort}>
                                <TouchableOpacity style={(this.state.stars) ? styles.activeButton : styles.inActiveButton}
                                    onPress={() => this.changeStars(true)} >

                                    <Text style={(this.state.stars) ? styles.activeText : styles.inActiveText}>
                                        Ascending
                                    </Text>

                                </TouchableOpacity>
                            </View>
                            <View style={styles.sort}>
                                <TouchableOpacity style={(!this.state.stars) ? styles.activeButton : styles.inActiveButton}
                                    onPress={() => this.changeStars(false)}>
                                    
                                    <Text style={(!this.state.stars) ? styles.activeText : styles.inActiveText}>
                                        Descending
                                    </Text>

                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.10, marginLeft: 20, marginTop: 10 }}>
                        <View style={{ flex: 1, flexDirection: "row" }}>
                            <View style={{ flex: 0.40 }}>
                                <Text style={{ textAlign: 'center', fontWeight: '400', fontSize: 10, justifyContent: 'center', marginTop: 3 }}>Sort By Experience</Text>
                            </View>
                            <View style={styles.sort}>
                                <TouchableOpacity style={(this.state.experience) ? styles.activeButton:styles.inActiveButton} onPress={()=> this.changeExperience(true)}>
                                    <Text style={(this.state.experience) ? styles.activeText : styles.inActiveText }>
                                        Ascending
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.sort}>
                                <TouchableOpacity style={(!this.state.experience) ? styles.activeButton:styles.inActiveButton} onPress={()=> this.changeExperience(false)}>
                                    <Text style={(!this.state.experience) ? styles.activeText : styles.inActiveText}>
                                        Descending
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card}>

                        <View style={{ flex: 0.75, flexDirection: "row" }}>
                            <View style={styles.circleView}>
                            </View>
                            <View style={{ flex: 1, marginTop: 10, marginLeft: 4, flexWrap: 'wrap', marginLeft: 2 }}>
                                <View style={{ flex: 1, flexDirection: "row" }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Dr.John Doe</Text>
                                        <Text style={{ fontSize: 10, fontWeight: "300" }}>Dentist(5 years)</Text>
                                        <Text style={{ fontSize: 10, fontWeight: '300' }}>BDS, MBBS</Text>
                                        <Text style={{ fontSize: 12, marginTop: 5, color: 'green' }}>XYZ Hospital</Text>
                                        <Text style={{ fontSize: 10, marginBottom: 5 }}>Vasant Vihar,Delhi</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 8, fontWeight: '300' }}>First Available Date</Text>
                                        <Text style={{ fontSize: 10, fontWeight: '300', marginBottom: 2 }}><FontAwesomeIcon name="calendar-alt" size={12} color='green' /> 28/10/2018</Text>
                                        <Text style={{ fontSize: 10, fontWeight: '300' }}><FontAwesomeIcon name="rupee-sign" size={12} color='green' /> 700</Text>
                                    </View>

                                </View>

                            </View>
                        </View>
                        <View style={{ flex: 0.25, width: '100%' }}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <View style={{ flex: 0.5, margin: 10 }}>
                                    <TouchableOpacity style={styles.buttonView}><Text style={{ color: 'white', fontSize: 9, textAlign: 'center' }}>Book Online Consultation</Text></TouchableOpacity>

                                </View>
                                <View style={{ flex: 0.5, margin: 10 }}>
                                    <TouchableOpacity style={styles.buttonView}><Text style={{ color: 'white', fontSize: 9, textAlign: 'center' }}>Book Direct Visit</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>


                    <View style={styles.card}>

                        <View style={{ flex: 0.75, flexDirection: "row" }}>
                            <View style={styles.circleView}>
                            </View>
                            <View style={{ flex: 1, marginTop: 10, marginLeft: 4, flexWrap: 'wrap', marginLeft: 2 }}>
                                <View style={{ flex: 1, flexDirection: "row" }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Dr.John Doe</Text>
                                        <Text style={{ fontSize: 10, fontWeight: "300" }}>Dentist(5 years)</Text>
                                        <Text style={{ fontSize: 10, fontWeight: '300' }}>BDS, MBBS</Text>
                                        <Text style={{ fontSize: 12, marginTop: 5, color: 'green' }}>XYZ Hospital</Text>
                                        <Text style={{ fontSize: 10, marginBottom: 5 }}>Vasant Vihar,Delhi</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 8, fontWeight: '300' }}>First Available Date</Text>
                                        <Text style={{ fontSize: 10, fontWeight: '300', marginBottom: 2 }}><FontAwesomeIcon name="calendar-alt" size={12} color='green' /> 28/10/2018</Text>
                                        <Text style={{ fontSize: 10, fontWeight: '300' }}><FontAwesomeIcon name="rupee-sign" size={12} color='green' /> 700</Text>
                                    </View>

                                </View>

                            </View>
                        </View>
                        <View style={{ flex: 0.25, width: '100%' }}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <View style={{ flex: 0.5, margin: 10 }}>
                                    <TouchableOpacity style={styles.buttonView}><Text style={{ color: 'white', fontSize: 9, textAlign: 'center' }}>Book Online Consultation</Text></TouchableOpacity>

                                </View>
                                <View style={{ flex: 0.5, margin: 10 }}>
                                    <TouchableOpacity style={styles.buttonView}><Text style={{ color: 'white', fontSize: 9, textAlign: 'center' }}>Book Direct Visit</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>



                    <View style={styles.card}>

                        <View style={{ flex: 0.75, flexDirection: "row" }}>
                            <View style={styles.circleView}>
                            </View>
                            <View style={{ flex: 1, marginTop: 10, marginLeft: 4, flexWrap: 'wrap', marginLeft: 2 }}>
                                <View style={{ flex: 1, flexDirection: "row" }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 13, fontWeight: 'bold' }}>Dr.John Doe</Text>
                                        <Text style={{ fontSize: 10, fontWeight: "300" }}>Dentist(5 years)</Text>
                                        <Text style={{ fontSize: 10, fontWeight: '300' }}>BDS, MBBS</Text>
                                        <Text style={{ fontSize: 12, marginTop: 5, color: 'green' }}>XYZ Hospital</Text>
                                        <Text style={{ fontSize: 10, marginBottom: 5 }}>Vasant Vihar,Delhi</Text>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ fontSize: 8, fontWeight: '300' }}>First Available Date</Text>
                                        <Text style={{ fontSize: 10, fontWeight: '300', marginBottom: 2 }}><FontAwesomeIcon name="calendar-alt" size={12} color='green' /> 28/10/2018</Text>
                                        <Text style={{ fontSize: 10, fontWeight: '300' }}><FontAwesomeIcon name="rupee-sign" size={12} color='green' /> 700</Text>
                                    </View>

                                </View>

                            </View>
                        </View>
                        <View style={{ flex: 0.25, width: '100%' }}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <View style={{ flex: 0.5, margin: 10 }}>
                                    <TouchableOpacity style={styles.buttonView}><Text style={{ color: 'white', fontSize: 9, textAlign: 'center' }}>Book Online Consultation</Text></TouchableOpacity>

                                </View>
                                <View style={{ flex: 0.5, margin: 10 }}>
                                    <TouchableOpacity style={styles.buttonView}><Text style={{ color: 'white', fontSize: 9, textAlign: 'center' }}>Book Direct Visit</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>








                </ScrollView>








            </View>
        );
    }
}

const styles = StyleSheet.create({
    circleView: {
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: 'rgb(238,82,83)',
        margin: 10
    },
    buttonView: {
        backgroundColor: 'rgb(238,82,83)',
        borderRadius: 30,
        height: 30,
        padding: 5,
        marginBottom: 5
        // alignItems: 'center'
    },
    sort: {
        flex: 0.40,
        marginLeft: 5,
        marginRight: 10,


    },
    activeButton: {
        borderRadius: 5,
        backgroundColor: 'rgb(0,166,98)',
        color: 'white',
        padding: 5,
        textAlign: 'center',


    },
    inActiveButton: {
        borderRadius: 5,
        backgroundColor: 'white',
        color: 'rgb(0,166,98)',
        padding: 5,
        borderColor: 'rgb(0,166,98)',
        borderWidth: 1,
    },
    activeText: { color: 'white', textAlign: 'center', fontSize: 10 },
    inActiveText: { color: 'rgb(0,166,98)', textAlign: 'center', fontSize: 10 },
    card: {
        flex: 1,
        backgroundColor: 'white',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        // width: 400,
        // height: 150,

        alignItems: 'center',
        ...Platform.select({
            android: {
                elevation: 5,
                // shadowColor: '#00EE00',
                // shadowOffset: { width: 10, height: 10 },
                // shadowRadius: 5,
            }

        })
    },
})

export default SearchListing;