
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
//import Stack_Navigator from './android/app/src/Assets/Screens/StackNavigator/Routes'
import Routes from './src/StackNavigator/Stack'
import Setting from './src/Screens/Setting/Setting'
import Settings from './src/Screens/Setting/Settings'

const App = () => {
  return (

      <View style={{ flex:1}}>
     <Routes/>
    </View>

  )
}

export default App

const styles = StyleSheet.create({})

// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import CircularProgress from 'react-native-circular-progress-indicator';
// const App = () => {
//   return (
//     <View>
//  <CircularProgress
//   value={97}
//   radius={120}
//   inActiveStrokeOpacity={0.5}
//   activeStrokeWidth={15}
//   inActiveStrokeWidth={20}
//   progressValueStyle={{ fontWeight: '100', color: 'white' }}
//   activeStrokeSecondaryColor="yellow"
//   inActiveStrokeColor="black"
//   duration={5000}
//   dashedStrokeConfig={{
//     count: 50,
//     width: 14,
//   }}
// />
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})




// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// function Feed() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Feed Screen</Text>
//     </View>
//   );
// }

// function Article() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Article Screen</Text>
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// function MyDrawer() {
//   return (
//     <Drawer.Navigator useLegacyImplementation>
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Article" component={Article} />
//     </Drawer.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyDrawer />
//     </NavigationContainer>
//   );
// }

// import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity,TextInput } from 'react-native'
// import React,{useState} from 'react'
// import { Dropdown } from 'react-native-material-dropdown';

// const { height, width } = Dimensions.get('window');

// const App = () => {

// //****Step-1 */
//   //***For-Email */
//   const [Email, setEmail] = useState('');
//   const [checkEmail, setCheckEmail] = useState();
//   const [errorEmail, setErrorEmail] = useState(null);

//    //***For-FullName */
//    const [Name, setName] = useState('');
//    const [checkName, setCheckName] = useState();
//    const [errorName, setErrorName] = useState(null);

//    //***for-PhoneNumber*/
//    const [Phone, setPhone] = useState('');
//   const [checkPhone, setCheckPhone] = useState();
//   const [errorPhone, setErrorPhone] = useState(null);

//     //***Step-2 */
//   //**for-Email */
//   const _emailValidate = email => {
//     var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (email === '' || email === undefined || email === null) {
//       setErrorEmail('*Plese enter email,');
//     }
//     else if (!emailRegex.test(email)) {
//       setErrorEmail('*Plese enter valid email.');

//     } else {
//       setErrorEmail(null);
//     }
//   };
//   //**for-fullName */
//   const _PhoneValidate = phone => {
//     var PhoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
//     if (phone === '' || phone === undefined || phone === null) {
//       setErrorPhone('*Plese enter Mobile Number,');
//     }
//     else if (!PhoneRegex.test(phone)) {
//       setErrorPhone('*Plese enter valid Number.');

//     } else {
//       setErrorPhone(null);
//     }
//   };
// //**for phone-NUmber */
// const _NameValidate = name => {
//   var NameRegex = /^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$/;
//   if (name === '' || name === undefined || name === null) {
//     setErrorName('*Plese enter Full Name,');
//   }
//   else if (!NameRegex.test(name)) {
//     setErrorName('*Plese enter valid Name.');

//   } else {
//     setErrorName(null);
//   }
// };
// //**step 3 */
// const validate = props => {
//   let flag = true;
//   if (Email === '') {
//     setErrorEmail('Please enter email.');
//     flag = false;
//   }

//   if (Name === '') {
//     setErrorName('Please enter valid Name .');
//     flag = false;
//   }
//   if (Phone === '') {
//     setErrorPhone('Please enter valid Mobile Number .');
//     flag = false;
//   }
//   return flag;
// };
// /***Step-4 */
// const onSubmit = () => {
//   if (validate()) {
//     alert('Successfully Submit');
//     //props.navigation.navigate('PageLogin');

//   } else {
//     alert('Please Enter  Details Correctly');
//   }
// };


//   const data = [
//     {
//       //src:require('../Fourth_Project/src/Assets/Images/IndiaFlag.jpeg'),
//       value: '+91',

//     },
//     {
//       value: '+1'
//     },
//     {
//       value: '+73'
//     },
//   ]
//   return (
//     <SafeAreaView>
//       <View style={styles.mainContainer}>
//         <View style={styles.headingContainer}>
//           <View style={styles.imageView}>
//             <TouchableOpacity
//               style={styles.ImageIcon}>
//               <Image style={styles.imageStyle}
//                 source={require('../Fourth_Project/src/Assets/Images/whitearrow.png')} />
//             </TouchableOpacity>
//           </View>

//         </View>
//         <View style={styles.profileImageContainer}>
//           <View style={styles.secondMainContainer}>
//             <View style={styles.profileMainView}>
//               <Image style={styles.profileImage}
//                 source={require('../Fourth_Project/src/Assets/Images/faceImage.webp')}
//               />
//             </View>
//             <View style={styles.CameraView}>
//               <Image style={styles.cameraIcon}
//                 source={require('../Fourth_Project/src/Assets/Images/camera1.png')}
//               />
//             </View>
//           </View>
//         </View>
//         <View style={styles.textInputMain}>
//           <View style={styles.textName1}>
//             <Text style={styles.text}> Full Name</Text>
//           </View>
//           <View style={styles.textInputBorder}>
//             <View style={styles.textInput1}>
//               <View style={styles.textInputin}>
//             <TextInput 
//             placeholder=' Full Name'
//             placeholderTextColor={'grey'}
//             keyboardType='default'
//             onChangeText={(txt) => { setName(txt), _NameValidate(txt) }}
//             maxLength={60}


//             />
//             </View>
//             </View>
//             {errorName !== null ? (
//             <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
//               <Text style={{ color: 'red', fontSize: 14 }}>{errorName}</Text>
//             </View>
//           ) : null}
//           </View>
//           <View style={styles.textName1}>
//             <Text style={styles.text}>Email Id</Text>
//           </View>
//           <View style={styles.textInputBorder}>
//             <View style={styles.textInput1}>
//             <View style={styles.textInputin}>
//             <TextInput 
//             placeholder='Enter Your email'
//             placeholderTextColor={'grey'}
//             keyboardType='email-address'
//             maxLength={20}
//             onChangeText={(txt) => { setEmail(txt), _emailValidate(txt) }}

//             />
//             </View>
//             </View>
//             {errorEmail !== null ? (
//             <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
//               <Text style={{ color: 'red', fontSize: 14 }}>{errorEmail}</Text>
//             </View>
//           ) : null}
//           </View>
//           <View style={styles.textName1}>
//             <Text style={styles.text}> Phone Number</Text>
//           </View>
//           <View style={styles.textInputBorder}>
//             <View style={styles.textInput2}>
//               <View style={styles.codeView}>
//                 <View style={styles.codeImage}>
//                     <Image style={styles.iconStyle}
//                      source={require('../Fourth_Project/src/Assets/Images/IndiaFlag.jpeg')} />
//                 </View>
//                 <View style={styles.codeinView}>
//                 <Dropdown
//                 placeholder='+91'
//                 placeholderTextColor='grey'
//                  data={data}
//                  style={{alignSelf:'flex-start'}}
//                 />
//                 </View>
//               </View>
//             <View style={styles.textInputin2}>
//             <TextInput 
//             placeholder='Enter Your Mobile Number'
//             placeholderTextColor={'grey'}
//             keyboardType='default'
//             onChangeText={(txt) => { setPhone(txt), _PhoneValidate(txt) }}
//             maxLength={10}


//             />
//             </View>

//             </View>
//             {errorPhone !== null ? (
//             <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
//               <Text style={{ color: 'red', fontSize: 14 }}>{errorPhone}</Text>
//             </View>
//           ) : null}
//           </View>


//         </View>

//         <View style={styles.Logintouchable}>
//           <View style={styles.opacityView}>
//             <TouchableOpacity onPress={() => onSubmit()}>
//               <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Save</Text>
//             </TouchableOpacity>
//           </View>

// </View>
//       </View>
//     </SafeAreaView>
//   )
// }

// export default App

// const styles = StyleSheet.create({
//   mainContainer: {
//     height: '100%',
//     width: '100%',
//     // backgroundColor:'blue'
//   },
//   headingContainer: {
//    // backgroundColor: 'blue',
//     height: height * 0.11,
//     width: width * 0.95,
//     alignSelf: 'center',
//     flexDirection: 'row',
//     // alignItems:'center'

//   },
//   ImageIcon: {
//     backgroundColor: 'rgb(240,1,121)',
//     height: height * 0.05,
//     width: width * 0.12,
//     justifyContent: 'center',
//     // alignItems:'center',
//     // borderWidth: 0.8,
//     borderRadius: 10,
//     borderColor: 'grey',
//     //shadowColor: 'grey',
//   },
//   imageStyle: {
//     height: height * 0.04,
//     width: width * 0.10,
//     alignSelf: 'center',
//     shadowColor: 'gray',
//     //borderWidth: 2,
//     justifyContent: 'center',


//   },
//   imageView: {
//     // backgroundColor:'yellow',
//     height: height * 0.09,
//     justifyContent: 'center',


//   },
//   logoView: {
//     height: height * 0.09,
//     width: width * 0.70,
//     // backgroundColor:'cyan',
//     justifyContent: 'center',

//   },
//   mainLogo: {
//     alignSelf: 'center',
//     justifyContent: 'center',
//     height: height * 0.07,
//     width: width * 0.54
//   },
//   TextView: {
//     alignSelf: 'center',
//     //  backgroundColor: 'blue',
//     height: height * 0.16,
//     width: width * 0.75,
//     justifyContent: 'center'
//   },
//   profileImageContainer: {
//     height: height * 0.20,
//     width: width * 0.75,
//     // backgroundColor: 'red',
//     alignSelf: 'center',
//     justifyContent: 'center',
//     //textAlign:'center'
//     alignContent: 'center'
//   },
//   secondMainContainer: {
//     height: height * 0.15,
//     width: width * 0.35,
//     // backgroundColor: 'yellow',
//     alignSelf: 'center',
//     flexDirection: 'row',
//     //alignItems:'center'
//     //alignContent:'center'
//     justifyContent: 'flex-end'
//   },
//   profileMainView: {
//     height: height * 0.15,
//     width: width * 0.30,
//     // backgroundColor:'pink',
//     alignSelf: 'center',
//     justifyContent: 'flex-start',

//     borderRadius: 30


//   },
//   profileImage: {
//     height: height * 0.13,
//     width: width * 0.30,
//     alignSelf: 'center',
//     borderRadius: 50,
//     //borderWidth:0.5
//   },
//   cameraIcon: {
//     height: height * 0.04,
//     width: width * 0.10,

//     //alignSelf:'center'

//   },
//   CameraView: {
//     //  backgroundColor:'blue',
//     height: height * 0.05,
//     position: 'absolute',
//     alignSelf: 'flex-end',
//     width: width * 0.14,
//     justifyContent: 'flex-start'
//   },
//   textInputMain: {
//     height: height * 0.40,
//     width: width * 0.97,
//    // backgroundColor: 'cyan',
//     alignSelf: 'center'
//   },
//   textInputBorder: {
//     height: height * 0.08,
//     width: width * 0.97,
//    // backgroundColor: 'red',
//     alignSelf: 'center'
//   },
//   textName1: {
//     //backgroundColor:'red',
//     height: height * 0.04,
//     width: width * 0.95,
//     justifyContent: 'center',
//     alignSelf: 'center'
//   },
//   textInput1: {
//     // backgroundColor:'#fff',
//     height: height * 0.06,
//     width: width * 0.95,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     borderWidth: 0.5,
//     borderColor:'grey',
//     borderRadius:10,
//     shadowColor:'black',
//     //shadowOpacity: 0.9,
//     shadowRadius: 3,
//     elevation: 3,
//     borderBottomWidth: 2,
//   },
//   textInput2: {
//     // backgroundColor:'#fff',
//     height: height * 0.06,
//     width: width * 0.95,
//     //justifyContent: 'center',
//     alignSelf: 'center',
//     borderWidth: 0.5,
//     borderColor:'grey',
//     borderRadius:10,
//     shadowColor:'black',
//     //shadowOpacity: 0.9,
//     shadowRadius: 3,
//     elevation: 3,
//     borderBottomWidth: 2,
//     flexDirection:'row'
//   },
//   text:{
//     fontWeight:'bold',
//     fontSize:18
//   },
//   textInputin:{
//    // backgroundColor:'white',
//     height:height*0.03,
//     width:width*0.90,
//     alignSelf:'center',
//     justifyContent:'center'
//   },
//   textInputin2:{
//     // backgroundColor:'white',
//      height:height*0.03,
//      width:width*0.60,
//      alignSelf:'center',
//      justifyContent:'center'
//    },
//   codeView:{
//    // backgroundColor:'black',
//     height:height*0.04,
//     width:width*0.30,
//     alignSelf:'center',
//     justifyContent:'center',
//     borderRightWidth:2,
//     borderColor:'grey',
//     flexDirection:'row'
//   },
//   codeinView:{
//   //  backgroundColor:'red',
//     height:height*0.06,
//     width:width*0.15,
//     justifyContent:'flex-end',
//     alignSelf:'center'
//   },

// codeImage:{
//  // backgroundColor:'yellow',
//   height:height*0.06,
//   width:width*0.13,
//   justifyContent:'center',
//   alignSelf:'center'
// },
// iconStyle:{
//   height:40,
//   width:40,
//   alignSelf:'center'
// },
// Logintouchable: {
//   //backgroundColor:'green',
//   height: height * 0.06,
//   width: width * 0.95,
//   alignSelf: 'center',
//   //justifyContent:'center'

// },
// opacityView: {
//   backgroundColor: 'rgb(240,1,121)',
//   height: height * 0.06,
//   width: width * 0.92,
//   alignSelf: 'center',
//   borderRadius: 10,
//   justifyContent: 'center',
//   alignItems: 'center'

// },
// })



// import {
//   StyleSheet,
//   Text,
//   View,
//   SafeAreaView,
//   Dimensions,
//   FlatList,
//   Image
// } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { StretchOutY } from 'react-native-reanimated';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// const { height, width } = Dimensions.get('window');

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// const App = props => {
//   const [cardData, setCardData] = useState([]);
//   console.log("===ajda===", cardData);

//   useEffect(() => {
//     GetListApi();
//   }, [props.route]);

//   const GetListApi = () => {
//     axios({
//       method: 'get',
//       url: `https://fakestoreapi.com/products?limit=16`,
//     })
//       .then(async response => {
//         if (response.status === 200) {
//           console.log('====== home api response ======', response);
//           setCardData(response?.data);
//         } else {
//           alert('Something went wrong.');
//         }
//       })
//       .catch(err => {
//         console.log('==== Login Catch error=====', err);

//       });
//   };

//   const renderItem = ({ item }) => {
//     return (
//       <View style={styles.Shadocontaner}>
//         <View style={styles.itemsMainView}>
//           <View style={styles.TitleView}>
//             <View style={styles.titleInView}>
//               <Text style={styles.textTitle}>Title:</Text>
//             </View>
//             <View style={styles.ItemInView}>
//               <Text numberOfLines={2} style={styles.ItemStyle}>{item.title}</Text>
//             </View>
//           </View>
//           <View style={styles.PriceMainView}>
//             <View style={styles.titleInView}>
//               <Text style={styles.textTitle}>Price: </Text>
//             </View>
//             <View style={styles.ItemInView}>
//               <Text> {item.price}</Text>
//             </View>
//           </View>
//           <View style={styles.DescriptionMainView}>
//             <View style={styles.DescriptionInView}>
//               <Text style={styles.textTitle}>Description:</Text>
//             </View>
//             <View style={styles.DesItemInView}>
//               <Text numberOfLines={2}>{item.description}</Text>
//             </View>
//           </View>


//         </View>
//         <View style={styles.imageView}>
//           <Image source={{ uri: item.image }} style={{resizeMode:'contain' ,height: 79, width: 79, alignSelf: 'center' }} />
//         </View>
//       </View>
//     );
//   };

//   return (
//     <SafeAreaView>
//       <View style={styles.mainheadContainer}>
//         <View style={styles.secondoutContainer} >
//         <View style={styles.secondContainer}>
//           <View style={styles.secondIncontainer}>
//             <Text style={styles.textHomeStyle}>Home</Text>
//           </View>

//         </View>
//         </View>
//         <View style={styles.maincontainer}>

//           {/* <View style={styles.Shadocontaner}></View> */}
//           <FlatList showsVerticalScrollIndicator={false}
//             data={cardData}
//             renderItem={renderItem}
//           />
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   mainheadContainer: {
//     height: '100%',
//     width: '100%'
//   },
//   secondoutContainer:{
//     //backgroundColor:'blue',
//     height:height*0.09,
//     width:width*1,
//     alignSelf:'center',

//   },
//   textHomeStyle:{
//    color:'white',
//    fontSize:18,
//    fontWeight:'bold'
//   },
//   secondIncontainer:{
//    // backgroundColor:'red',
//     height:height*0.05,
//     width:width*0.85,
//     justifyContent:'center',
//     alignSelf:'center'
//   },
//   secondContainer:{
//     backgroundColor:'blue',
//     height:height*0.07,
//     width:width*1,
//     alignSelf:'center',
//     justifyContent:'center',

//     shadowColor: 'rgb(0,0,0)',
//     shadowOpacity: 10,
//     shadowOffset: {
//       width: 3,
//       height: 3,
//     },
//     shadowRadius: 5,
//     shadowOpacity: 0.5,
//   },

//   maincontainer: {
//     height: height * 0.8,
//     width: width * 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   Shadocontaner: {
//     height: height * 0.2,
//     width: width * 0.97,
//     shadowColor: 'rgb(0,0,0)',
//     shadowOpacity: 10,
//     shadowOffset: {
//       width: 3,
//       height: 3,
//     },
//     shadowRadius: 5,
//     shadowOpacity: 0.5,
//     backgroundColor: 'white',
//     marginVertical: 5,
//     borderRadius: 10,
//     borderBottomWidth: 3,
//     borderColor: 'grey',
//     flexDirection: 'row',
//     borderWidth: 2,
//     justifyContent: 'space-evenly',
//     //backgroundColor:'pink'

//   },
//   TitleView: {
//     flexDirection: 'row',
//     //  backgroundColor:'red',
//     height: height * 0.04,
//     width: width * 0.60,

//     // justifyContent:'center'
//     shadowColor: 'rgb(0,0,0)',
//     shadowOpacity: 10,
//     shadowOffset: {
//       width: 3,
//       height: 3,
//     },
//     shadowRadius: 5,
//     shadowOpacity: 0.5,
//   },
//   textTitle: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     //alignSelf:'center'
//     shadowColor: 'rgb(0,0,0)',
//     shadowOpacity: 5,
//     shadowOffset: {
//       width: 0.5,
//       height: 0.5,
//     },
//     shadowRadius: 0,
//     shadowOpacity: 0.5,
//   },
//   ItemStyle: {
//     fontWeight: 'bold',
//     fontSize: 14,
//     //alignSelf:'center'
//   },
//   titleInView: {
//     //backgroundColor: 'red',
//     height: height * 0.03,
//     width: width * 0.11,
//     justifyContent: 'center'
//   },
//   DescriptionInView: {
//     //backgroundColor: 'red',
//     height: height * 0.05,
//     width: width * 0.25,
//     justifyContent: 'center'
//   },
//   ItemInView: {
//     //backgroundColor: 'green',
//     height: height * 0.03,
//     width: width * 0.52,
//     justifyContent: 'center',
//     //alignSelf:'center'
//   },
//   DesItemInView: {
//     //backgroundColor: 'green',
//     height: height * 0.07,
//     width: width * 0.35,
//     justifyContent: 'center',
//     //alignSelf:'center'
//   },
//   PriceMainView: {
//     flexDirection: 'row',
//     //  backgroundColor:'blue',
//     height: height * 0.04,
//     width: width * 0.65,
//     justifyContent: 'center',
//     shadowColor: 'rgb(0,0,0)',
//     shadowOpacity: 10,
//     shadowOffset: {
//       width: 3,
//       height: 3,
//     },
//     shadowRadius: 5,
//     shadowOpacity: 0.5,
//   },
  

//   DescriptionMainView: {
//     flexDirection: 'row',
//     //  backgroundColor:'blue',
//     height: height * 0.08,
//     width: width * 0.65,
//     justifyContent: 'center',
//     shadowColor: 'rgb(0,0,0)',
//     shadowOpacity: 10,
//     shadowOffset: {
//       width: 3,
//       height: 3,
//     },
//     shadowRadius: 5,
//     shadowOpacity: 0.5,
  
//   },
//   imageView: {
//     justifyContent: 'center',
//     // backgroundColor:'cyan',
//     height: 89,
//     width: 85,
//     alignSelf: 'center',
//     shadowColor: 'rgb(0,0,0)',
//     shadowOpacity: 10,
//     shadowOffset: {
//       width: 3,
//       height: 3,
//     },
//     shadowRadius: 5,
//     shadowOpacity: 0.5,
  
//   },
//   itemsMainView: {
//     alignSelf: 'center'
//   }

// });


