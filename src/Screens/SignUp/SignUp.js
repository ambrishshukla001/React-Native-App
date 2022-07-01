import { ScrollView, StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
const { height, width } = Dimensions.get('window');
const SignUp = (props) => {
  const [checked, setChecked] = useState(0);
  var gender = ['Male', 'Female'];
  //****Step-1 */
  //***For-Email */
  const [Email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState();
  const [errorEmail, setErrorEmail] = useState(null);
  //**For-Password */
  const [Password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState();
  const [errorPassword, setErrorPassword] = useState(null);
  //***For-FullName */
  const [Name, setName] = useState('');
  const [checkName, setCheckName] = useState();
  const [errorName, setErrorName] = useState(null);
  //***For-Date */
  const [Date, setDate] = useState('');
  const [checkDate, setCheckDate] = useState();
  const [errorDate, setErrorDate] = useState(null);
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
  //**for-Date */
  const _DateValidate = date => {
    var dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
      ;
    if (date === '' || date === undefined || date === null) {
      setErrorDate('*Plese enter Date of birth,');
    }
    else if (!dateRegex.test(date)) {
      setErrorDate('*Plese enter valid date.');

    } else {
      setErrorDate(null);
    }
  };
  //**For-fullName */
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
  //**For-Password */
  const _passwordvalidate = pass => {
    var passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
    if (pass === '') {
      setErrorPassword('*Please enter password.');
      setCheckPassword(false)
    }
    else if (!passwordRegex.test(pass)) {
      setErrorPassword('  *Please enter valid password.');
      setCheckPassword(false)
    } else {
      setErrorPassword(null);
      setCheckPassword(true)
    }
  };
  //***Step-3 */
  const validate = props => {
    let flag = true;
    if (Email === '') {
      setErrorEmail('Please enter email.');
      flag = false;
    }
    if (Password === '') {
      setErrorPassword('Please enter valid password .');
      flag = false;
    }
    if (Name === '') {
      setErrorName('Please enter valid Name .');
      flag = false;
    }
    if (Date === '') {
      setErrorDate('Please enter valid Date .');
      flag = false;
    }
    return flag;
  };
  /***Step-4 */
  const onSubmit = () => {
    if (validate()) {
      alert('Successfully Login');
      props.navigation.navigate('PageLogin');

    } else {
      alert('Validation Failed');
    }
  };

  return (


    <SafeAreaView>
      {/* <ScrollView> */}
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <View style={styles.imageView}>
            <TouchableOpacity
              style={styles.ImageIcon}>
              <Image style={styles.imageStyle}
                source={require('../../Assets/Images/imageedit_27_6800497177.png')} />
            </TouchableOpacity>
          </View>
          <View style={styles.logoView}>
            <Image style={styles.mainLogo}
              source={require('../../Assets/Images/M2logo.png')} />
          </View>
        </View>
        <View style={styles.TextView}>
          <View style={styles.innerText}>
            <Text style={styles.textStyle}>Getting Started</Text>
          </View>
          <View style={styles.innerText2}>
            <Text style={styles.midtextStyle}>create an account to continue and</Text>

          </View>
          <View style={styles.innerText2}>
            <Text style={styles.midtextStyle}>Connect with the pepole</Text>
          </View>
        </View>
        <View style={styles.textinputmain}>
          <View style={styles.textInputBorder}>
            <View style={styles.emailView}>
              <Image style={styles.mailicon}
                source={require('../../Assets/Images/email-icon-inbox-icon-letter-icon-message-icon-text-icon-logo-line-arrow-symbol-blackandwhite-png-clipart-removebg-preview.png')} />
            </View>
            <View style={styles.textInputView2}>
              <View style={styles.textinputView}>
                <TextInput
                  placeholder='Enter Your Email'
                  placeholderTextColor={'grey'}
                  keyboardType="email-address"
                  maxLength={60}
                  onChangeText={(txt) => { setEmail(txt), _emailValidate(txt) }}
                  style={{ color: 'grey' }}


                />

              </View>
            </View>
          </View>
          {errorEmail !== null ? (
            <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
              <Text style={{ color: 'red', fontSize: 14 }}>{errorEmail}</Text>
            </View>
          ) : null}

        </View>
        <View style={styles.textinputmain}>
          <View style={styles.textInputBorder}>
            <View style={styles.emailView}>
              <Image style={styles.nameicon}
                source={require('../../Assets/Images/585e4bf3cb11b227491c339a.png')} />
            </View>
            <View style={styles.textInputView2}>
              <View style={styles.textinputView}>
                <TextInput
                  placeholder='Enter Your Name'
                  placeholderTextColor={'grey'}
                  keyboardType='name-phone-pad'
                  maxLength={60}
                  onChangeText={(txt) => { setName(txt), _NameValidate(txt) }}
                  style={{ color: 'grey' }}


                />

              </View>
            </View>


          </View>
          {errorName !== null ? (
            <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
              <Text style={{ color: 'red', fontSize: 14 }}>{errorName}</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.passwordinputmain}>
          <View style={styles.passwordInputBorder}>
            <View style={styles.passwordView}>
              <Image style={styles.passwordicon}
                source={require('../../Assets/Images/lock-png-icon-8.png')} />
            </View>
            <View style={styles.passwordInputView2}>
              <View style={styles.passwordinputView}>
                <TextInput
                  placeholder='Create Password'
                  placeholderTextColor={'grey'}
                  maxLength={10}
                  style={{ color: 'grey' }}
                 
                  keyboardType='default'
                  onChangeText={(txt) => { setPassword(txt), _passwordvalidate(txt) }}

                />

              </View>
            </View>
            <View style={styles.securityIconView}>
              <Image style={styles.eyeicon}
                source={require('../../Assets/Images/pngtree-vector-view-icon-png-image_4143944.jpeg')} />

            </View>


          </View>
          {errorEmail !== null ? (
            <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
              <Text style={{ color: 'red', fontSize: 14 }}>{errorPassword}</Text>
            </View>
          ) : null}
        </View>
        <View style={styles.passwordinputmain}>
          <View style={styles.passwordInputBorder}>

            <View style={styles.DobInputView2}>
              <View style={styles.DobinputView}>
                <TextInput
                  placeholder='DD/MM/YYYY'
                  placeholderTextColor={'grey'}
                  maxLength={10}
               
                  keyboardType='numeric'
                  style={{ color: 'grey' }}
                  onChangeText={(txt) => { setDate(txt), _DateValidate(txt) }}




                />

              </View>
            </View>
            <View style={styles.securityIconView}>
              <Image style={styles.calendaricon}
                source={require('../../Assets/Images/calendar-icon-black-background-black-flat-style-vector-illustration-calendar-icon-black-background-black-flat-style-vector-168420455.jpeg')} />

            </View>


          </View>
          {errorDate !== null ? (
            <View style={{ height: height * 0.03, width: width * 0.85, alignSelf: 'center',/*backgroundColor:'black'*/ }}>
              <Text style={{ color: 'red', fontSize: 14 }}>{errorDate}</Text>
            </View>
          ) : null}
        </View>
        <View style={{
          alignSelf: 'center',
          height: 70,
          width: 380,
          justifyContent: 'space-around',
        }}>
          <View style={styles.btn}>
            {gender.map((gender, key) => {
              return (
                <View key={gender}>
                  {checked == key ? (
                    <TouchableOpacity style={styles.btn1}>
                      <View style={styles.image}>
                        <Image style={styles.img}
                          source={require('../../Assets/Images/imageedit_33_2417664904.jpg')} />
                      </View>

                      <Text style={{ color: 'white' }}>{gender}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setChecked(key);
                      }}
                      style={styles.btn2}>
                      <View style={styles.image}>
                        <Image style={styles.img} source={require('../../Assets/Images/008_083_radio_button_unchecked_control-512.webp')} />
                      </View>
                      <Text style={{ color: 'white' }}>{gender}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
          {/* <Text>{gender[checked]}</Text> */}
        </View>
        <View style={styles.Logintouchable}>
          <View style={styles.opacityView}>
            <TouchableOpacity onPress={() => onSubmit()}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Sign Up</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.lastView}>
          <Text style={styles.t5}>if you have already registered ?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <View style={styles.abc}>
              <Text style={styles.t6}> Login</Text>
            </View>
          </TouchableOpacity>
        </View>




      </View>
      {/* </ScrollView> */}
    </SafeAreaView>

  )
}

export default SignUp

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
  },
  headingContainer: {
    //backgroundColor:'blue',
    height: height * 0.11,
    width: width * 0.95,
    alignSelf: 'center',
    flexDirection: 'row',
    // alignItems:'center'

  },
  ImageIcon: {
    // backgroundColor:'green',
    height: height * 0.06,
    width: width * 0.15,
    justifyContent: 'center',
    // alignItems:'center',
    borderWidth: 0.8,
    borderRadius: 10,
    borderColor: 'grey',
    shadowColor: 'grey',
  },
  imageStyle: {
    height: height * 0.05,
    width: width * 0.13,
    alignSelf: 'center',
    shadowColor: 'gray',
    borderWidth: 2,
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
  midtextStyle: {
    color: 'grey',
    alignSelf: 'center',
    fontSize: 15,
    // fontWeight:'600'

  },
  innerText: {
    // backgroundColor:'blue',
    height: height * 0.05
  },
  innerText2: {
    // backgroundColor:'red',
    height: height * 0.03
  },
  textStyle: {
    color: 'grey',
    alignSelf: 'center',
    fontSize: 28,
    fontWeight: '600'

  },
  textinputmain: {
    alignSelf: 'center',
    // backgroundColor:'red',
    height: height * 0.09,
    width: width * 0.95
  },
  textInputBorder: {
    backgroundColor: 'rgb(36,37,38)',
    borderWidth: 2,
    borderColor: 'rgb(36,37,38)',
    height: height * 0.07,
    width: width * 0.93,
    alignSelf: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    // justifyContent:'center',
    //alignContent:'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  emailView: {
    // backgroundColor:'red',
    width: width * 0.10,
    height: height * 0.04,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: 'grey'


  },
  mailicon: {
    height: height * 0.02,
    width: width * 0.07,
    alignSelf: 'center'
  },
  textinputView: {
    // backgroundColor:'green',
    height: height * 0.05,
    width: width * 0.71,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  textInputView2: {
    // backgroundColor:'blue',
    height: height * 0.06,
    width: width * 0.76,
    justifyContent: 'center'
  },
  nameicon: {
    height: height * 0.02,
    width: width * 0.05,
    alignSelf: 'center'
  },
  passwordinputmain: {
    alignSelf: 'center',
    // backgroundColor:'red',
    height: height * 0.09,
    width: width * 0.95
  },
  passwordInputBorder: {
    backgroundColor: 'rgb(36,37,38)',
    borderWidth: 2,
    borderColor: 'rgb(36,37,38)',
    height: height * 0.07,
    width: width * 0.93,
    alignSelf: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    // justifyContent:'center',
    //alignContent:'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  passwordView: {
    // backgroundColor:'red',
    width: width * 0.10,
    height: height * 0.04,
    justifyContent: 'center',
    borderRightWidth: 1,
    borderColor: 'grey'


  },
  passwordicon: {
    height: height * 0.03,
    width: width * 0.06,
    alignSelf: 'center'
  },
  passwordInputView2: {
    // backgroundColor:'blue',
    height: height * 0.06,
    width: width * 0.74,
    justifyContent: 'center'
  },
  passwordinputView: {
    // backgroundColor:'green',
    height: height * 0.05,
    width: width * 0.71,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  securityIconView: {
    //  backgroundColor:'red',
    height: height * 0.05,
    width: width * 0.08,
    justifyContent: 'center'
  },
  eyeicon: {
    height: height * 0.03,
    width: width * 0.06,
    borderRadius: 45
  },
  DobInputView2: {
    // backgroundColor:'blue',
    height: height * 0.06,
    width: width * 0.84,
    justifyContent: 'center'
  },
  DobinputView: {
    // backgroundColor:'green',
    height: height * 0.05,
    width: width * 0.80,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  calendaricon: {
    height: height * 0.04,
    width: width * 0.08,
    borderRadius: 45
  },
  radio: {
    flexDirection: 'row',
  },
  img: {
    height: 20,
    width: 20,
    borderRadius: 15,
    borderWidth: 0.49,
    borderColor: 'grey'

  },
  btn: {
    flexDirection: 'row',
    // alignItems: 'center',
    // backgroundColor:'blue',
    height: height * 0.07,
    width: width * 0.99,
    // alignSelf:'center',
    // justifyContent:'center'
  },
  btn1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 60,
    width: 120,
    // alignSelf:'center',
    justifyContent: 'center'
  },
  btn2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    height: 60,
    width: 120,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  image: {
    // backgroundColor:'yellow',
    height: 35,
    width: 30,
    justifyContent: 'center',
    //borderWidth:2,
    borderColor: 'grey'
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
  lastView:
  {
    flexDirection: 'row',
    alignSelf: 'center',
    height: height * 0.06,
    width: width * 0.60,
    //backgroundColor:'red'
  },
  t5: {
    alignSelf: 'center',

    //fontWeight: 'bold',
    color: 'white',
    fontSize: 13
  },
  abc: {
    // backgroundColor:'pink',
    height: height / 18,
    justifyContent: 'center'
  },
  t6: {
    //fontWeight: 'bold',
    color: 'white',
    fontSize: 13,
    textDecorationLine: 'underline'

    //alignSelf:'center',
    //alignContent:'center',
    //alignItems:'center'

  },

})