import { StyleSheet, Text, View, SafeAreaView, Dimensions, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-material-dropdown';

const { height, width } = Dimensions.get('window');

const Setting = () => {

  //****Step-1 */
  //***For-Email */
  const [Email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState();
  const [errorEmail, setErrorEmail] = useState(null);

  //***For-FullName */
  const [Name, setName] = useState('');
  const [checkName, setCheckName] = useState();
  const [errorName, setErrorName] = useState(null);

  //***for-PhoneNumber*/
  const [Phone, setPhone] = useState('');
  const [checkPhone, setCheckPhone] = useState();
  const [errorPhone, setErrorPhone] = useState(null);

  //***Step-2 */
  //**for-Email */
  const _emailValidate = email => {
    var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('*Plese enter email,');
    }
    else if (!emailRegex.test(email)) {
      setErrorEmail('*Plese enter valid email.');

    } else {
      setErrorEmail(null);
    }
  };
  //**for-fullName */
  const _PhoneValidate = phone => {
    var PhoneRegex = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (phone === '' || phone === undefined || phone === null) {
      setErrorPhone('*Plese enter Mobile Number,');
    }
    else if (!PhoneRegex.test(phone)) {
      setErrorPhone('*Plese enter valid Number.');

    } else {
      setErrorPhone(null);
    }
  };
  //**for phone-NUmber */
  const _NameValidate = name => {
    var NameRegex = /^[a-zA-Z]{4,}(?: [a-zA-Z]+)?(?: [a-zA-Z]+)?$/;
    if (name === '' || name === undefined || name === null) {
      setErrorName('*Plese enter Full Name,');
    }
    else if (!NameRegex.test(name)) {
      setErrorName('*Plese enter valid Name.');

    } else {
      setErrorName(null);
    }
  };
  //**step 3 */
  const validate = props => {
    let flag = true;
    if (Email === '') {
      setErrorEmail('Please enter email.');
      flag = false;
    }

    if (Name === '') {
      setErrorName('Please enter valid Name .');
      flag = false;
    }
    if (Phone === '') {
      setErrorPhone('Please enter valid Mobile Number .');
      flag = false;
    }
    return flag;
  };
  /***Step-4 */
  const onSubmit = () => {
    if (validate()) {
      alert('Successfully Submit');
      //props.navigation.navigate('PageLogin');

    } else {
      alert('Please Enter  Details Correctly');
    }
  };


  const data = [
    {
      //src:require('../Fourth_Project/src/Assets/Images/IndiaFlag.jpeg'),
      value: '+91',

    },
    {
      value: '+1'
    },
    {
      value: '+73'
    },
  ]
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <View style={styles.imageView}>
            <TouchableOpacity
              style={styles.ImageIcon}>
              <Image style={styles.imageStyle}
                source={require('../../Assets/Images/whitearrow.png')} />
            </TouchableOpacity>
          </View>

        </View>



        <View style={styles.profileImageContainer}>
          <View style={styles.secondMainContainer}>
            <View style={styles.profileMainView}>
              <Image style={styles.profileImage}
                source={require('../../Assets/Images/faceImage.webp')}
              />
            </View>
            <View style={styles.CameraView}>
              <Image style={styles.cameraIcon}
                source={require('../../Assets/Images/camera1.png')}
              />
            </View>
          </View>
        </View>



        <View style={styles.textInputMain}>
          <View style={styles.textName1}>
            <Text style={styles.text}> Full Name</Text>
          </View>
          <View style={styles.textInputBorder}>
            <View style={styles.textInput1}>
              <View style={styles.textInputin}>
                <TextInput
                  placeholder=' Full Name'
                  placeholderTextColor={'grey'}
                  keyboardType='default'
                  onChangeText={(txt) => { setName(txt), _NameValidate(txt) }}
                  maxLength={60}


                />
              </View>
            </View>
            {errorName !== null ? (
              <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
                <Text style={{ color: 'red', fontSize: 14 }}>{errorName}</Text>
              </View>
            ) : null}
          </View>
          <View style={styles.textName1}>
            <Text style={styles.text}>Email Id</Text>
          </View>
          <View style={styles.textInputBorder}>
            <View style={styles.textInput1}>
              <View style={styles.textInputin}>
                <TextInput
                  placeholder='Enter Your email'
                  placeholderTextColor={'grey'}
                  keyboardType='email-address'
                  maxLength={20}
                  onChangeText={(txt) => { setEmail(txt), _emailValidate(txt) }}

                />
              </View>
            </View>
            {errorEmail !== null ? (
              <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
                <Text style={{ color: 'red', fontSize: 14 }}>{errorEmail}</Text>
              </View>
            ) : null}
          </View>
          <View style={styles.textName1}>
            <Text style={styles.text}> Phone Number</Text>
          </View>
          <View style={styles.textInputBorder}>
            <View style={styles.textInput2}>
              <View style={styles.codeView}>
                <View style={styles.codeImage}>
                  <Image style={styles.iconStyle}
                    source={require('../../Assets/Images/IndiaFlag.jpeg')} />
                </View>
                <View style={styles.codeinView}>
                  <Dropdown
                    placeholder='+91'
                    placeholderTextColor='grey'
                    data={data}
                    style={{ alignSelf: 'flex-start' }}
                  />
                </View>
              </View>
              <View style={styles.textInputin2}>
                <TextInput
                  placeholder='Enter Your Mobile Number'
                  placeholderTextColor={'grey'}
                  keyboardType='default'
                  onChangeText={(txt) => { setPhone(txt), _PhoneValidate(txt) }}
                  maxLength={10}


                />
              </View>

            </View>
            {errorPhone !== null ? (
              <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
                <Text style={{ color: 'red', fontSize: 14 }}>{errorPhone}</Text>
              </View>
            ) : null}
          </View>


        </View>

        <View style={styles.Logintouchable}>
          <View style={styles.opacityView}>
            <TouchableOpacity onPress={() => onSubmit()}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Save</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default Setting;

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    // backgroundColor:'blue'
  },
  headingContainer: {
    // backgroundColor: 'blue',
    height: height * 0.11,
    width: width * 0.95,
    alignSelf: 'center',
    flexDirection: 'row',
    // alignItems:'center'

  },
  ImageIcon: {
    backgroundColor: 'rgb(240,1,121)',
    height: height * 0.05,
    width: width * 0.12,
    justifyContent: 'center',
    // alignItems:'center',
    // borderWidth: 0.8,
    borderRadius: 10,
    borderColor: 'grey',
    //shadowColor: 'grey',
  },
  imageStyle: {
    height: height * 0.04,
    width: width * 0.10,
    alignSelf: 'center',
    shadowColor: 'gray',
    //borderWidth: 2,
    justifyContent: 'center',


  },
  imageView: {
    // backgroundColor:'yellow',
    height: height * 0.09,
    justifyContent: 'center',


  },
  logoView: {
    height: height * 0.09,
    width: width * 0.70,
    // backgroundColor:'cyan',
    justifyContent: 'center',

  },
  mainLogo: {
    alignSelf: 'center',
    justifyContent: 'center',
    height: height * 0.07,
    width: width * 0.54
  },
  TextView: {
    alignSelf: 'center',
    //  backgroundColor: 'blue',
    height: height * 0.16,
    width: width * 0.75,
    justifyContent: 'center'
  },
  profileImageContainer: {
    height: height * 0.20,
    width: width * 0.75,
    // backgroundColor: 'red',
    alignSelf: 'center',
    justifyContent: 'center',
    //textAlign:'center'
    alignContent: 'center'
  },
  secondMainContainer: {
    height: height * 0.15,
    width: width * 0.35,
    // backgroundColor: 'yellow',
    alignSelf: 'center',
    flexDirection: 'row',
    //alignItems:'center'
    //alignContent:'center'
    justifyContent: 'flex-end'
  },
  profileMainView: {
    height: height * 0.13,
    width: width * 0.30,
    // backgroundColor:'pink',
    alignSelf: 'center',
    justifyContent: 'flex-start',
   borderWidth:0.5,
    borderRadius: 80


  },
  profileImage: {
    height: height * 0.12,
    width: width * 0.24,
    alignSelf: 'center',
    borderRadius: 90,
    resizeMode: 'contain'


    //borderWidth:0.5
  },
  cameraIcon: {
    height: height * 0.04,
    width: width * 0.10,
    resizeMode: 'contain'
    //alignSelf:'center'

  },
  CameraView: {
    //  backgroundColor:'blue',
    height: height * 0.05,
    position: 'absolute',
    alignSelf: 'flex-end',
    width: width * 0.14,
    justifyContent: 'flex-start'
  },
  textInputMain: {
    height: height * 0.40,
    width: width * 0.97,
    // backgroundColor: 'cyan',
    alignSelf: 'center'
  },
  textInputBorder: {
    height: height * 0.08,
    width: width * 0.97,
    // backgroundColor: 'red',
    alignSelf: 'center'
  },
  textName1: {
    //backgroundColor:'red',
    height: height * 0.04,
    width: width * 0.95,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  textInput1: {
    backgroundColor: 'rgb(245,245,255)',
    height: height * 0.06,
    width: width * 0.95,
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    shadowColor: 'black',
    //shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    borderBottomWidth: 2,
  },
  textInput2: {
    // backgroundColor:'#fff',
    height: height * 0.06,
    width: width * 0.95,
    //justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 10,
    shadowColor: 'black',
    //shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 3,
    borderBottomWidth: 2,
    flexDirection: 'row'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18
  },
  textInputin: {
    // backgroundColor:'white',
    height: height * 0.03,
    width: width * 0.90,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  textInputin2: {
    // backgroundColor:'white',
    height: height * 0.03,
    width: width * 0.60,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  codeView: {
    // backgroundColor:'black',
    height: height * 0.04,
    width: width * 0.30,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderColor: 'grey',
    flexDirection: 'row'
  },
  codeinView: {
    //  backgroundColor:'red',
    height: height * 0.06,
    width: width * 0.15,
    justifyContent: 'flex-end',
    alignSelf: 'center'
  },

  codeImage: {
    // backgroundColor:'yellow',
    height: height * 0.06,
    width: width * 0.13,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  iconStyle: {
    height: 40,
    width: 40,
    alignSelf: 'center'
  },
  Logintouchable: {
    //backgroundColor:'green',
    height: height * 0.06,
    width: width * 0.95,
    alignSelf: 'center',
    //justifyContent:'center'

  },
  opacityView: {
    backgroundColor: 'rgb(240,1,121)',
    height: height * 0.06,
    width: width * 0.92,
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'

  },
})