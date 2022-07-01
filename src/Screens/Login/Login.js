import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity,Pressable, Dimensions ,TextInput,BackHandler,Alert } from 'react-native'
import React,{useState, useEffect} from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height, width } = Dimensions.get('window');
const PageLogin = (props) => {

  const [loader, setLoader] = useState(false)
  const [Email, setEmail]= useState('')
  const [Password, setPassword]= useState('')

  const LoginApi = () => {
      axios({
        method: "post", 
        url: "http://172.16.1.132:1909/api/v1/user/login", 
        data: {      
          email: Email, 
          password: Password,
        },
        headers: { "content-type": "application/json" },
      })
        .then(async (response) => {
            console.log("==== response =====", response);
           if (response.data.responseCode === 200) { 
             console.log("====== token ======", response);
             console.log();

            //  await AsyncStorage.setItem("Token", response?.data?.result?.token) 
            //  props.navigation.navigate('Home');
           } else {
             alert("Something went wrong.");
           }
        })
        .catch((err) => {
          console.log("==== Login Catch error=====", err);
          if (err.response.data.responseCode === 402) {
            alert("Bad Credentials");
          } else if (err.response.data.responseCode === 404) {
            alert("User not found");
          } else {
            alert("Something went wrong.");
          }
        });
    };












    const [TVisible, setTVisible]= useState(false);

   
        //****Step-1 */
        //***For-Email */
        // const [Email, setEmail] = useState('');
       // const [Email, setEmail] = useState('');
        const [checkEmail, setCheckEmail] = useState();
        const [errorEmail, setErrorEmail] = useState(null);
        //**For-Password */
       // const [Password, setPassword] = useState('');
        const [checkPassword, setCheckPassword] = useState();
        const [errorPassword, setErrorPassword] = useState(null);
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
                  setErrorPassword('Please enter  password .');
                  flag = false;
                }
                return flag;
              };
            /***Step-4 */
            const onSubmit=()=>{
                if(validate()){
                //   LoginApi();
                props.navigation.navigate('Home');
                    // alert('success');
                   // props.navigation.navigate('Home');
                
    
                } else{
                    alert('Validation Failed');
                }
            };
            useEffect(() => {
                const backAction = () => {
                  Alert.alert("Hold on!", "Are you sure you want to go back?", [
                    {
                      text: "Cancel",
                      onPress: () => null,
                      style: "cancel"
                    },
                    { text: "YES", onPress: () => BackHandler.exitApp() }
                  ]);
                  return true;
                };
            
                const backHandler = BackHandler.addEventListener(
                  "hardwareBackPress",
                  backAction
                );
            
                return () => backHandler.remove();
              }, []);
    return (
        
        < SafeAreaView>
            <View style={styles.mainContainer}>
                <View style={styles.imageView}>
                    <Image style={styles.mainLogo}
                        source={require('../../Assets/Images/M2logo.png')} />

                </View>
                <View style={styles.TextView}>
                    <View style={styles.innerText}>
                        <Text style={styles.textStyle}>Welcome back</Text>
                    </View>
                    <View style={styles.innerText2}>
                        <Text style={styles.midtextStyle}>you've been missed!</Text>
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
                            style={{color:'grey'}}

                             maxLength={60}
                            onChangeText={(txt) => {setEmail(txt), _emailValidate(txt)}}

                            />

                        </View>
                        </View>
                        

                    </View>
                    {errorEmail !== null ?(
                        <View style={{height:height*0.03,width:width*0.85,alignSelf:'center',/*backgroundColor:'black'*/}}>
                            <Text style={{color:'red',fontSize:14}}>{errorEmail}</Text>
                            </View>
                    ):null}

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
                            placeholder='Enter Your Password'
                            placeholderTextColor={'grey'}
                            maxLength={10}
                                //secureTextEntry='false'
                                keyboardType='default'
                                style={{color:'grey'}}
                                onChangeText={(txt) => {setPassword(txt), _passwordvalidate(txt)}}


                            />

                        </View>
                        </View>
                        <View style={styles.securityIconView}>
                            <Image style={styles.eyeicon}
                             source={require('../../Assets/Images/pngtree-vector-view-icon-png-image_4143944.jpeg')} />

                        </View>
                        

                    </View>
                    {errorPassword !== null ?(
                        <View style={{height:height*0.03,width:width*0.98,alignSelf:'center',/*backgroundColor:'black'*/}}>
                            <Text style={{color:'red',fontSize:14}}>{errorPassword}</Text>
                            </View>
                    ):null}

                </View>
                <View style={styles.checkBoxmain}>
                    <View style={styles.checkboxView}>
                    <View style={styles.checkboxView2} >
        <Pressable  style={styles.checkPressable}
        onPress={()=>setTVisible(!TVisible)}>
          {TVisible !== false ? (
             <Image style={styles.checkBoxImage}
             source={require('../../Assets/Images/imageedit_17_9840894082.jpg')} />
            
          ):null}
        </Pressable>
       
      </View>
                    <Text style={{color:'white'}}> Remember me</Text>
                    </View>
                    <View style={styles.forgetTouchable}>
                        <TouchableOpacity>
                            <Text style={{color:'rgb(221,0,146)',
                            textDecorationLine:'underline'}}>Forget Password?</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.Logintouchable}>
                    <View style={styles.opacityView}>
                        <TouchableOpacity style={styles.opacityView}
                         onPress={()=> onSubmit()}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:18}}>Login</Text>
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.textView1}>
                    <Text style={{color:'white'}}>or sign in with</Text>
                </View>
                <View style={styles.imageLinkView}>
                    <View style={styles.firstLink}>
                        <TouchableOpacity>
                            <Image style={styles.TouchableHighlite}
                            source={require('../../Assets/Images/145804.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.firstLink}>
                        <TouchableOpacity>
                            <Image style={styles.TouchableHighlite2}
                            source={require('../../Assets/Images/apple-logo.png')} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.signUpView}>
                    <Text style={{color:'white',fontSize:12}}>You haven't any account? </Text>
                    <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')} >
                        <Text style={{color:'rgb(240,1,121)',fontSize:12}}>Signup</Text>
                    </TouchableOpacity>

                </View>


            </View>
        </SafeAreaView>
    )
}

export default PageLogin

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        width: '100%',
        backgroundColor: 'rgb(16,16,16)'
    },
    imageView: {
        //backgroundColor:'red',
        alignSelf: 'center',
        height: height * 0.18,
        width: width * 0.89,
        justifyContent: 'center'
    },
    mainLogo: {
        alignSelf: 'center',
        justifyContent: 'center',
        height: height * 0.10,
        width: width * 0.79
    },
    TextView: {
        alignSelf: 'center',
       // backgroundColor: 'blue',
        height: height * 0.13,
        width: width * 0.75
    },
    textStyle: {
        color: 'grey',
        alignSelf: 'center',
        fontSize: 28,
        fontWeight: '600'

    },
    midtextStyle: {
        color: 'grey',
        alignSelf: 'center',
        fontSize: 15,
        // fontWeight:'600'

    },
    TouchableHighlite:{
        height:height*0.05,
        width:width*0.11,
        borderRadius:10
    },
    innerText: {
        // backgroundColor:'blue',
        height: height * 0.045
    },
    innerText2: {
        // backgroundColor:'red',
        height: height * 0.045
    },
    textinputmain:{
        alignSelf:'center',
       // backgroundColor:'red',
        height:height*0.09,
        width:width*0.95
    },
    textInputBorder:{
    backgroundColor:'rgb(36,37,38)',
    borderWidth:2,
    borderColor:'rgb(36,37,38)',
    height:height*0.07,
    width:width*0.93,
    alignSelf:'center',
    borderRadius:8,
    flexDirection:'row',
   // justifyContent:'center',
    //alignContent:'center',
    alignItems:'center',
    alignSelf:'center'
    },
    emailView:{
       // backgroundColor:'red',
        width:width*0.10,
        height:height*0.04,
        justifyContent:'center',
        borderRightWidth:1,
        borderColor:'grey'

    
    },
    TouchableHighlite2:{
        height:height*0.05,
        width:width*0.10,
        borderRadius:75
    },
    checkboxView2:{
        backgroundColor:'black',
        height:height*0.02,
        width:width*0.045,
        alignSelf:'center',
        borderWidth:0.5,
        borderColor:'grey'
        },
        checkPressable:{
            height:height/18,
            width:width/5.5,
            borderRadius:10,
            alignSelf:'center'
        },
    mailicon:{
        height:height*0.02,
        width:width*0.07,
        alignSelf:'center'
    },
    textinputView:{
       // backgroundColor:'green',
        height:height*0.05,
        width:width*0.71,
        justifyContent:'center',
        alignSelf:'center'
    },
    textInputView2:{
       // backgroundColor:'blue',
        height:height*0.06,
        width:width*0.76,
        justifyContent:'center'
    },
    passwordinputmain:{
        alignSelf:'center',
       // backgroundColor:'red',
        height:height*0.09,
        width:width*0.95
    },
    passwordInputBorder:{
        backgroundColor:'rgb(36,37,38)',
        borderWidth:2,
        borderColor:'rgb(36,37,38)',
        height:height*0.07,
        width:width*0.93,
        alignSelf:'center',
        borderRadius:8,
        flexDirection:'row',
       // justifyContent:'center',
        //alignContent:'center',
        alignItems:'center',
        alignSelf:'center'
        },
        passwordView:{
            // backgroundColor:'red',
             width:width*0.10,
             height:height*0.04,
             justifyContent:'center',
             borderRightWidth:1,
             borderColor:'grey'
     
         
         },
         passwordicon:{
            height:height*0.03,
            width:width*0.06,
            alignSelf:'center'
        },
        passwordInputView2:{
            // backgroundColor:'blue',
             height:height*0.06,
             width:width*0.74,
             justifyContent:'center'
         },
         passwordinputView:{
            // backgroundColor:'green',
             height:height*0.05,
             width:width*0.71,
             justifyContent:'center',
             alignSelf:'center'
         },
         securityIconView:{
           //  backgroundColor:'red',
             height:height*0.05,
             width:width*0.08,
             justifyContent:'center'
         },
         eyeicon:{
             height:height*0.03,
            width:width*0.06,
            borderRadius:45
         },
         checkBoxmain:{
          //  backgroundColor:'blue',
             height:height*0.06,
             width:width*0.90,
             alignSelf:'center',
             flexDirection:'row',
            // justifyContent:'center'
            alignContent:'center',
            //alignItems:'center'
         },
         checkBoxImage:{
            height:height*0.02,
             width:width*0.045,
             alignSelf:'center'
         },
         checkboxView:{
             flexDirection:'row',
            // backgroundColor:'green',
             alignItems:'center',
             height:height*0.03,
             width:width*0.59
             
         },
         forgetTouchable:{
            // backgroundColor:'red',
             height:height*0.03,
             width:width*0.30,
             alignItems:'center',
             justifyContent:'center'
         },
         Logintouchable:{
            // backgroundColor:'green',
             height:height*0.09,
             width:width*0.95,
             alignSelf:'center',
             //justifyContent:'center'

         },
         opacityView:{
             backgroundColor:'rgb(240,1,121)',
             height:height*0.06,
             width:width*0.92,
             alignSelf:'center',
             borderRadius:10,
             justifyContent:'center',
             alignItems:'center'
             
         },
         textView1:{
             //backgroundColor:'red',
             height:height*0.04,
             width:width*0.60,
             alignSelf:'center',
             //justifyContent:'center',
             alignItems:'center'
         },
         imageLinkView:{
           // backgroundColor:'blue',
             height:height*0.08,
             width:width*0.30,
             alignSelf:'center',
             flexDirection:'row',
             justifyContent:'space-evenly',

         },
         firstLink:{
            // backgroundColor:'green',
             alignContent:'center',
             height:height*0.06,
             width:width*0.12,
             justifyContent:'center',
             alignItems:'center'
         },
         signUpView:{
          //  backgroundColor:'grey',
             height:height*0.04,
             width:width*0.47,
             alignSelf:'center',
             flexDirection:'row',
             justifyContent:'center',
             alignItems:'center'
         }

})