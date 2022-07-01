import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  SafeAreaView,

  StyleSheet,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
const {height, width} = Dimensions.get('window');

const slides = [
    {
        key: 1,
        // image: require('../../Assects/image/Splash2.jpeg'),
        title: 'Professionals you\n         can trust',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes,',
        backgroundColor: 'rgb(101,175,30)',
        titleColor: 'rgb(255,255,255)',
        textColor: 'rgb(255,255,255)',
        
      },
  {
    key: 2,
    // image: require('../../Assects/image/Splash.jpeg'),
    title: 'Professionals you\n         can trust',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes,',
    // backgroundColor: 'rgb (107, 57, 118)',
    backgroundColor: 'rgb(74,24,125)',
    titleColor: 'rgb(255,255,255)',
    textColor: 'rgb(255,255,255)',
  },
  {
    key: 3,
    // image: require('../../Assects/image/Splash.jpeg'),
    title: 'Professionals you\n         can trust',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes,',
    backgroundColor: '#febe29',
    titleColor: 'rgb(49,49,49)',
    textColor: 'rgb(26,25,25)',
  },
  
];

const OnBoarding = props => {
  const [showRealApp, setShowRealApp] = useState(false);

  const _onDone = () => {
    setShowRealApp(true);
props.navigation.navigate('Login');
  };

  const _onSkip = () => {
    setShowRealApp(true);
    // alert('Login');
    // props.navigation.navigate('');
    props.navigation.navigate('Login');
  };

  const _renderItem = ({item}) => {
    return (
      <View style={[styles.slide, {backgroundColor: item.backgroundColor,width:"95%",height}]}>
        <View style={styles.imgContainer}>
          {/* <Image
            source={item.image}
            style={{
              height: height/3,
              width:width/1.05,
              // borderRadius: 160,
            }}
          /> */}
        </View>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, {color: item.titleColor}]}>
            {item.title}
          </Text>
        </View>
        <View style={styles.txtContainer}>
          <Text style={[styles.txtView, {color: item.textColor}]}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    // <SafeAreaView>
      <View style={styles.mainContainer}>
        <AppIntroSlider
          renderItem={_renderItem}
          data={slides}
          onDone={_onDone}
          onSkip={_onSkip}
          showSkipButton={true}
          showNextButton={true}
        />
      </View>
    // </SafeAreaView>
  );
};

export default OnBoarding
;

const styles = StyleSheet.create({
  mainContainer: {
    height: Platform.OS === 'android' ? height * 1: height * 1,
    width: width * 1,
    backgroundColor: 'rgba(90,26,153,255)',
  },
  slide: {
    height: height * 1,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    height: height * 0.1,
    width: width * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'rgb(255,255,255)',
    fontSize: 30,
    fontWeight: '700',
  },
  imgContainer: {
    height: height * 0.4,
    width: width * 1,
    alignItems: 'center',
  },
  txtContainer: {
    height: height * 0.25,
    width: width * 0.85,
    alignItems: 'center',
   
  },
  txtView: {
    color: 'rgb(255,255,255)',
    fontSize: height / 55,
    textAlign:'center',
    fontSize:13
  },
});