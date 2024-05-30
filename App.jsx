import { StyleSheet, Text, View, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Circle, Image, Path, Svg } from 'react-native-svg';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import MaskedView from '@react-native-community/masked-view';

const App = () => {
    const screenWidth = Dimensions.get("screen").width
    const circleSize = screenWidth * 0.82
    const [selectedTab, setSelectedTab] = useState(0);
    const depositeData ={
        current:30,
        max:60
    }
    const borrowingData={
        current:140,
        max:240
    }
    const totalData={
        current:depositeData.current+borrowingData.current,
        max:depositeData.max+ borrowingData.max
    }
    return (
        <View style={styles.mainContainer}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="transparent"
                translucent={true}
            />
            <LinearGradient
                colors={['#F7A51E', '#FE1FAC']}
                style={styles.firstView}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
            >
                <View style={styles.appBar}>
                    <Text style={{ fontSize: 18, fontFamily: 'SF-Pro' }}>
                        Home
                    </Text>
                    <View style={styles.notificationView}>
                        <Svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Path d="M19.3423 18.4904L18.3423 16.8304C18.1323 16.4604 17.9423 15.7604 17.9423 15.3504V12.8204C17.9423 10.4704 16.5623 8.44037 14.5723 7.49037C14.0523 6.57037 13.0923 6.00037 11.9923 6.00037C10.9023 6.00037 9.92226 6.59037 9.40226 7.52037C7.45226 8.49037 6.10226 10.5004 6.10226 12.8204V15.3504C6.10226 15.7604 5.91226 16.4604 5.70226 16.8204L4.69226 18.4904C4.29226 19.1604 4.20226 19.9004 4.45226 20.5804C4.69226 21.2504 5.26226 21.7704 6.00226 22.0204C7.94226 22.6804 9.98226 23.0004 12.0223 23.0004C14.0623 23.0004 16.1023 22.6804 18.0423 22.0304C18.7423 21.8004 19.2823 21.2704 19.5423 20.5804C19.8023 19.8904 19.7323 19.1304 19.3423 18.4904Z" fill="white" />
                            <Path d="M14.8301 24.0104C14.4101 25.1704 13.3001 26.0004 12.0001 26.0004C11.2101 26.0004 10.4301 25.6804 9.88005 25.1104C9.56005 24.8104 9.32005 24.4104 9.18005 24.0004C9.31005 24.0204 9.44005 24.0304 9.58005 24.0504C9.81005 24.0804 10.0501 24.1104 10.2901 24.1304C10.8601 24.1804 11.4401 24.2104 12.0201 24.2104C12.5901 24.2104 13.1601 24.1804 13.7201 24.1304C13.9301 24.1104 14.1401 24.1004 14.3401 24.0704C14.5001 24.0504 14.6601 24.0304 14.8301 24.0104Z" fill="white" />
                            <Circle cx="19.0004" cy="7.00037" r="7" fill="#2233FD" />
                        </Svg>
                    </View>
                </View>

                <View style={[styles.circleView, { width: circleSize, height: circleSize, borderRadius: circleSize, zIndex: 1 }]}>
                    <View style={{ position: 'absolute', top: -circleSize + 40, bottom: 0, right: 0, left: 13, justifyContent: 'center' }}  >
                        {
                            selectedTab == 0 &&
                            <View >
                                <View style={{ position: 'absolute' }}>
                                    <AnimatedCircularProgress
                                        size={circleSize - 40}
                                        width={20}
                                        rotation={-135}
                                        fill={depositeData.current*100/depositeData.max}
                                        tintColor={['#FE1FAC','#F7A51E']}
                                        backgroundColor="#F0F0F0"
                                        padding={10}
                                        arcSweepAngle={90}
                                        lineCap="round"
                                    />
                                </View>
                                <View style={{ position: 'absolute' }}>
                                    <AnimatedCircularProgress
                                        size={circleSize - 40}
                                        width={20}
                                        rotation={-30}
                                        fill={50}
                                        tintColor={["#2233FD","#18EBFF"]}
                                        backgroundColor="#F0F0F0"
                                        padding={10}
                                        arcSweepAngle={170}
                                        lineCap="round"
                                    />
                                    <Text style={{ color: '#292D32', fontSize: 30, fontFamily: 'SF-Pro', fontWeight: 'bold', alignSelf: 'center', position: 'absolute', marginTop: 100 }}>
                                        £{depositeData.current},000
                                    </Text>
                                    <Text style={{ color: '#292D32', fontSize: 16, fontFamily: 'SF-Pro', fontWeight: '300', alignSelf: 'center', position: 'absolute', marginTop: 230, width: 150, textAlign: 'center' }}>
                                        Home buying goal
                                    </Text>
                                </View>


                            </View>
                        }
                        {
                            selectedTab == 1 &&
                            <View >
                                <View style={{ position: 'absolute' }}>
                                    <AnimatedCircularProgress
                                        size={circleSize - 40}
                                        width={20}
                                        rotation={-135}
                                        fill={depositeData.current*100/depositeData.max}
                                        tintColor={['#FE1FAC','#F7A51E']}
                                        backgroundColor="#F0F0F0"
                                        padding={10}
                                        arcSweepAngle={275}
                                        lineCap="round"
                                    />
                                </View>
                                <View style={{ width: 250 }}>
                                    <Text style={{ color: '#292D32', fontSize: 30, fontFamily: 'SF-Pro', fontWeight: 'bold', alignSelf: 'center', position: 'absolute', marginTop: 100 }}>
                                        £{depositeData.current},000
                                    </Text>
                                    <Text style={{ color: '#B1B1B1', fontSize: 12, fontFamily: 'SF-Pro', fontWeight: '100', alignSelf: 'center', position: 'absolute', marginTop: 140 }}>
                                        of £{depositeData.max},000
                                    </Text>
                                    <Text style={{ color: '#292D32', fontSize: 16, fontFamily: 'SF-Pro', fontWeight: '300', alignSelf: 'center', position: 'absolute', marginTop: 230, width: 150, textAlign: 'center' }}>
                                        Deposite goal
                                    </Text>
                                </View>


                            </View>
                        }
                        {
                            selectedTab == 2 &&
                            <View >
                                <View style={{ position: 'absolute' }}>
                                    <AnimatedCircularProgress
                                        size={circleSize - 40}
                                        width={20}
                                        rotation={-135}
                                        fill={borrowingData.current*100/borrowingData.max}
                                        tintColor={["#2233FD","#18EBFF"]}
                                        backgroundColor="#F0F0F0"
                                        padding={10}
                                        arcSweepAngle={275}
                                        lineCap="round"
                                    />
                                </View>
                                <View style={{ width: 250 }}>
                                    <Text style={{ color: '#292D32', fontSize: 30, fontFamily: 'SF-Pro', fontWeight: 'bold', alignSelf: 'center', position: 'absolute', marginTop: 100 }}>
                                        £{borrowingData.current},000
                                    </Text>
                                    <Text style={{ color: '#B1B1B1', fontSize: 12, fontFamily: 'SF-Pro', fontWeight: '100', alignSelf: 'center', position: 'absolute', marginTop: 140 }}>
                                        of £{borrowingData.max},000
                                    </Text>
                                    <Text style={{ color: '#292D32', fontSize: 16, fontFamily: 'SF-Pro', fontWeight: '300', alignSelf: 'center', position: 'absolute', marginTop: 220, width: 150, textAlign: 'center' }}>
                                        Borrowing Power
                                    </Text>
                                </View>


                            </View>
                        }
                        {
                            selectedTab == 3 &&
                            <View >
                                <View style={{ position: 'absolute' }}>
                                    <AnimatedCircularProgress
                                        size={circleSize - 40}
                                        width={20}
                                        rotation={-135}
                                        fill={100}
                                        tintColor={['#FE1FAC','#F7A51E']}
                                        backgroundColor="#F0F0F0"
                                        padding={10}
                                        arcSweepAngle={90}
                                        lineCap="round"
                                    />
                                </View>
                                <View style={{ position: 'absolute' }}>
                                    <AnimatedCircularProgress
                                        size={circleSize - 40}
                                        width={20}
                                        rotation={-30}
                                        fill={100}
                                        tintColor={["#2233FD","#18EBFF"]}
                                        backgroundColor="#F0F0F0"
                                        padding={10}
                                        arcSweepAngle={170}
                                        lineCap="round"
                                    />
                                    <Text style={{ color: '#292D32', fontSize: 30, fontFamily: 'SF-Pro', fontWeight: 'bold', alignSelf: 'center', position: 'absolute', marginTop: 100 }}>
                                        £{totalData.current},000
                                    </Text>
                                    <Text style={{ color: '#292D32', fontSize: 16, fontFamily: 'SF-Pro', fontWeight: '300', alignSelf: 'center', position: 'absolute', marginTop: 220, width: 100, textAlign: 'center' }}>
                                        What you can afford today
                                    </Text>
                                </View>


                            </View>
                        }
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: '5%' }}>

                    <TouchableOpacity onPress={() => { setSelectedTab(1) }} style={[{ aspectRatio: 1, borderRadius: 10, backgroundColor: 'rgba(252, 33, 173, 0.08)', alignItems: 'center', padding: 5 }, selectedTab == 1 && { borderColor: '#FE1FAC', borderWidth: 2 }]}>
                        <MaskedView
                            maskElement={
                                <Text style={{ fontSize: 25, fontFamily: 'SF-Pro' }}>
                                    £{depositeData.current}k
                                </Text>
                            }
                        >
                            <LinearGradient
                                colors={['#FE1FAC', '#F7A51E']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={{ fontSize: 25, fontFamily: 'SF-Pro', opacity: 0, fontWeight: '500' }}>
                                    £{depositeData.current}k
                                </Text>
                            </LinearGradient>
                        </MaskedView>
                        <Text style={{ color: '#202020', fontFamily: 'SF-Pro', fontSize: 14, fontWeight: "500" }}>
                            of £{depositeData.max}k
                        </Text>
                        <Text style={{ color: 'black', fontFamily: 'SF-Pro', fontSize: 11 }}>
                            Deposit
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setSelectedTab(2) }} style={[{ aspectRatio: 1, borderRadius: 10, backgroundColor: 'rgba(34, 58, 254, 0.08)', alignItems: 'center', padding: 5 }, selectedTab == 2 && { borderColor: '#2233FD', borderWidth: 2 }]}>
                        <MaskedView
                            maskElement={
                                <Text style={{ fontSize: 25, fontFamily: 'SF-Pro' }}>
                                    £{borrowingData.current}k
                                </Text>
                            }
                        >
                            <LinearGradient
                                colors={['#18EBFF', '#2233FD']}
                                start={{ x: -0.8, y: 0 }}
                                end={{ x: 1, y: 0 }}
                            >
                                <Text style={{ fontSize: 25, fontFamily: 'SF-Pro', opacity: 0, fontWeight: '500' }}>
                                    £{borrowingData.current}k
                                </Text>
                            </LinearGradient>
                        </MaskedView>
                        <Text style={{ color: '#202020', fontFamily: 'SF-Pro', fontSize: 14 }}>
                            of £{borrowingData.max}k
                        </Text>
                        <Text style={{ color: 'black', fontFamily: 'SF-Pro', fontSize: 11, textAlign: 'center', width: '60%' }}>
                            Borrowing Power
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { setSelectedTab(3) }} style={[{ borderRadius: 10, aspectRatio: 1, backgroundColor: 'rgba(240, 240, 240, 0.7)', alignItems: 'center', padding: 5 }, selectedTab == 3 && { borderColor: '#000000', borderWidth: 2 }]}>


                        <Text style={{ fontSize: 25, color: '#2F2F2F', fontFamily: 'SF-Pro', fontWeight: '500' }}>
                            £{totalData.current}k
                        </Text>
                        <Text style={{ color: '#202020', fontFamily: 'SF-Pro', fontSize: 14 }}>
                            of £{totalData.max}k
                        </Text>
                        <Text style={{ color: 'black', fontFamily: 'SF-Pro', fontSize: 11, textAlign: 'center', width: 67 }}>
                            What you can afford today
                        </Text>
                    </TouchableOpacity>
                </View>

            </LinearGradient>

        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    firstView: {
        height: '46%',

    },
    mainContainer: {
        backgroundColor: 'white',
        height: '100%',
    },
    appBar: {
        width: '100%',
        paddingRight: '5%',
        paddingLeft: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 57,

    },
    notificationView: {
        borderColor: 'white',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
    },
    circleView: {
        backgroundColor: 'white',
        elevation: 10,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    secondView: {
        flex: 1,
        backgroundColor: 'white',
    },
    content: {

    },

});
