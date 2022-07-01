import {StyleSheet,TouchableOpacity, SafeAreaView, Dimensions, Image, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const {height, width} = Dimensions.get('window');
const WelcomePage = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(function () {
    //   alert('This is Splash Screen');
    props.navigation.navigate('OnBoarding')
      setIsVisible(true);
    }, 3000);
  }, []);

  return (
    <View style={styles.main}>
      <View style={styles.Image}>
       <TouchableOpacity onPress={() => props.navigation.navigate('OnBoarding')}>
       <Image
       style={{height: 250, width: 250, resizeMode: 'contain'}}
       source={require('../../Assets/Images/Home.png')}
     />
       </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  main: {
    height: height * 1,
    width: width * 1,
    // backgroundColor: 'cyan'
  },
  Image: {
    height: height * 0.4,
    width: width * 0.65,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    // marginHorizontal: 10,
    marginVertical: 170,
  },
});
