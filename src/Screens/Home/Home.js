import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import { StretchOutY } from 'react-native-reanimated';
//  import AsyncStorage from '@react-native-async-storage/async-storage';
const { height, width } = Dimensions.get('window');

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  // {
  //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
  //   title: 'Second Item',
  // },
  // {
  //   id: '58694a0f-3da1-471f-bd96-145571e29d72',
  //   title: 'Third Item',
  // },
];

const Home = props => {
  const [cardData, setCardData] = useState([]);
  console.log("===ajda===", cardData);

  useEffect(() => {
    GetListApi();
  }, [props.route]);

  const GetListApi = () => {
    axios({
      method: 'get',
      url: `https://fakestoreapi.com/products?limit=12`,
    })
      .then(async response => {
        if (response.status === 200) {
          console.log('====== home api response ======', response);
          setCardData(response?.data);
        } else {
          alert('Something went wrong.');
        }
      })
      .catch(err => {
        console.log('==== Login Catch error=====', err);

      });
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.Shadocontaner}>
        <View style={styles.itemsMainView}>
          <View style={styles.TitleView}>
            <View style={styles.titleInView}>
              <Text style={styles.textTitle}>Title:</Text>
            </View>
            <View style={styles.ItemInView}>
              <Text numberOfLines={2} style={styles.ItemStyle}>{item.title}</Text>
            </View>
          </View>
          <View style={styles.PriceMainView}>
            <View style={styles.titleInView}>
              <Text style={styles.textTitle}>Price: </Text>
            </View>
            <View style={styles.ItemInView}>
              <Text> {item.price}</Text>
            </View>
          </View>
          <View style={styles.DescriptionMainView}>
            <View style={styles.DescriptionInView}>
              <Text style={styles.textTitle}>Description:</Text>
            </View>
            <View style={styles.DesItemInView}>
              <Text numberOfLines={2}>{item.description}</Text>
            </View>
          </View>


        </View>
        <View style={styles.imageView}>
          <Image source={{ uri: item.image }} style={{resizeMode:'contain' ,height: 79, width: 79, alignSelf: 'center' }} />
        </View>
      </View>
    );
  };

  return (
   // <SafeAreaView>
      <View style={styles.mainheadContainer}>
        <View style={styles.outerView}></View>
        <View style={styles.secondoutContainer} >
        <View style={styles.secondContainer}>
          <View style={styles.secondIncontainer}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Drwer')}>
            <Text style={styles.textHomeStyle}>Home</Text>
            </TouchableOpacity>
          </View>

        </View>
        </View>
        <View style={styles.maincontainer}>

          {/* <View style={styles.Shadocontaner}></View> */}
          <FlatList showsVerticalScrollIndicator={false}
            data={cardData}
            renderItem={renderItem}
          />
        </View>
      </View>
   // </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainheadContainer: {
    height: '100%',
    width: '100%'
  },
  outerView:{
height:height*0.05
  },
  secondoutContainer:{
    //backgroundColor:'blue',
    height:height*0.09,
    width:width*1,
    alignSelf:'center',

  },
  textHomeStyle:{
   color:'white',
   fontSize:18,
   fontWeight:'bold'
  },
  secondIncontainer:{
   // backgroundColor:'red',
    height:height*0.05,
    width:width*0.85,
    justifyContent:'center',
    alignSelf:'center'
  },
  secondContainer:{
    backgroundColor:'blue',
    height:height*0.07,
    width:width*1,
    alignSelf:'center',
    justifyContent:'center',

    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },

  maincontainer: {
    height: height * 0.76,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Shadocontaner: {
    height: height * 0.2,
    width: width * 0.97,
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    backgroundColor: 'white',
    marginVertical: 5,
    borderRadius: 10,
    borderBottomWidth: 3,
    borderColor: 'grey',
    flexDirection: 'row',
    borderWidth: 2,
    justifyContent: 'space-evenly',
    //backgroundColor:'pink'

  },
  TitleView: {
    flexDirection: 'row',
    //  backgroundColor:'red',
    height: height * 0.04,
    width: width * 0.60,

    // justifyContent:'center'
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    //alignSelf:'center'
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 5,
    shadowOffset: {
      width: 0.5,
      height: 0.5,
    },
    shadowRadius: 0,
    shadowOpacity: 0.5,
  },
  ItemStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    //alignSelf:'center'
  },
  titleInView: {
    //backgroundColor: 'red',
    height: height * 0.03,
    width: width * 0.11,
    justifyContent: 'center'
  },
  DescriptionInView: {
    //backgroundColor: 'red',
    height: height * 0.07,
    width: width * 0.25,
    justifyContent: 'center'
  },
  ItemInView: {
    //backgroundColor: 'green',
    height: height * 0.04,
    width: width * 0.52,
    justifyContent: 'center',
    //alignSelf:'center'
  },
  DesItemInView: {
    //backgroundColor: 'green',
    height: height * 0.07,
    width: width * 0.35,
    justifyContent: 'center',
    //alignSelf:'center'
  },
  PriceMainView: {
    flexDirection: 'row',
    //  backgroundColor:'blue',
    height: height * 0.04,
    width: width * 0.65,
    justifyContent: 'center',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  },
  

  DescriptionMainView: {
    flexDirection: 'row',
    //  backgroundColor:'blue',
    height: height * 0.08,
    width: width * 0.65,
    justifyContent: 'center',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  
  },
  imageView: {
    justifyContent: 'center',
    // backgroundColor:'cyan',
    height: 89,
    width: 85,
    alignSelf: 'center',
    shadowColor: 'rgb(0,0,0)',
    shadowOpacity: 10,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
  
  },
  itemsMainView: {
    alignSelf: 'center'
  }

});
