import { StyleSheet, Text, View, SafeAreaView, Image, Modal, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Value } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { height, width } = Dimensions.get('window')
const Settings = (props) => {
 
  const Setting = [

    {
      header: 'Settings',
      pic: require('../../Assets/Images/profile2.png'),
      profile: 'Sign in to your iPhone',
      profile1: 'Set up iCloud, the App Store, and more.'
    },



  ];


  const Name = [
    {
      N1: 'General',
      pic: require('../../Assets/Images/setingios.png'),

    },
    {
      N1: 'Accessibility',
      pic: require('../../Assets/Images/acessbility.png'),
    },
    {

      N1: 'Privacy',
      pic: require('../../Assets/Images/privacy.png'),
    }

  ]

  const List = [
    {
      N1: 'Safari',
      pic: require('../../Assets/Images/safari.png'),

    },
    {
      N1: 'News',
      pic: require('../../Assets/Images/news.png'),
    },
    {
      N1: 'Translate',
      pic: require('../../Assets/Images/Translate.webp'),
    },
    {
      N1: 'Maps',
      pic: require('../../Assets/Images/map.png'),
    },
    {
      N1: 'Shortcuts',
      pic: require('../../Assets/Images/shortcut.png'),
    },
    {
      N1: 'Health',
      pic: require('../../Assets/Images/health.png'),
    },
    {
      N1: 'Siri & Search',
      pic: require('../../Assets/Images/seri.png'),
    },
    {
      N1: 'Photos',
      pic: require('../../Assets/Images/photos.png'),
    },

  ]
  const [modalVisible, setModalVisible] = useState(false);
  const LogOut = async () => {
    console.log("==== Expired token =====", Value);
    const value = await AsyncStorage.removeItem('Token')
    console.log("==== Expired token =====", value);
  }

  return (
    <SafeAreaView>
      <View style={styles.main}>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalMainView}>
            <View style={styles.modalsecondContainer}></View>
            <View style={styles.modalthirdContainer}>
              <View style={{ 
                height: height * 0.09,
                // backgroundColor: 'green'
                  }}></View>
              <View style={{ 
                height: height * 0.05, 
              //  backgroundColor: 'blue',
                 justifyContent: 'center' 
                 }}>
                <Text style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  alignSelf:'center'
                }}> Are you sure you want to log Out?</Text>
              </View>
              <View style={{
                flexDirection: 'row',
                height: height * 0.15,
                width: width * 0.45,
                alignSelf: 'center',
                justifyContent:'space-evenly',
                //backgroundColor:'green'
              }}>
                <View style={styles.modalcrossView}>


                  <TouchableOpacity onPress={() =>{setModalVisible(false),LogOut(),props.navigation.navigate('Login')} }
                    style={styles.modalcrossView1}>
                    <Text style={{ 
                      color: 'white',
                       fontWeight: 'bold', 
                       fontSize: 18, 
                       alignSelf: 'center' 
                       }}>OK</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.modalcrossView}>


                  <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}
                    style={styles.modalcrossView1}>
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>




        </Modal>

        <FlatList
          data={Setting}
          // numColumns={2}
          // scrollEventThrottle={false}
          renderItem={({ item }) => {
            return (
              <View style={{ alignItems: 'center', height: height * 1.1 }}>
                <View style={{ width: width * 0.9 }}>
                  <TouchableOpacity>
                    <Text style={{ fontSize: height / 25, fontWeight: '500' }}>{item.header}</Text>
                  </TouchableOpacity>
                </View>


                <View style={{
                  height: height / 8, justifyContent: 'center',
                  alignItems: 'center'


                }}>
                  <View style={styles.con1}>
                    <View style={{ width: width * 0.25, height: '90%', alignItems: 'center' }}>
                      <TouchableOpacity>
                        <Image style={{ height: '100%', width: width * 0.2, borderRadius: 50 }}

                          source={item.pic}
                        />
                      </TouchableOpacity>
                    </View>
                    <View style={{
                      width: width * 0.65, height: '90%',
                      justifyContent: 'center'
                    }}>
                      <TouchableOpacity>
                        <Text style={{ color: 'rgb(0,125,250)', fontSize: 17 }}>{item.profile}</Text>
                      </TouchableOpacity>
                      <Text style={{ color: 'gray', fontSize: 13 }}>{item.profile1}</Text>
                    </View>
                  </View>
                </View>


                <View style={styles.Mbox}>
                  <View style={styles.box}>

                    <FlatList
                      data={Name}
                      // numColumns={2}
                      // scrollEventThrottle={false}
                      renderItem={({ item }) => {
                        return (
                          <TouchableOpacity>
                            <View style={styles.Box}>
                              <View style={{ height: height / 20, width: width * 0.15 }}>
                                <Image style={styles.image}
                                  source={item.pic}
                                />
                              </View>
                              <View style={styles.content}>
                                <Text>{item.N1}</Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        )
                      }
                      }
                    />
                  </View>
                </View>
                <TouchableOpacity>
                  <View style={{ height: height / 12, alignItems: 'center' }}>
                    <View style={styles.boxp}>
                      <View style={{ height: height / 20, width: width * 0.15 }}>
                        <Image style={styles.image}
                          source={require('../../Assets/Images/key.png')}
                        />
                      </View>

                      <View style={{ width: width / 1.33 }}>
                        <Text>Passwords</Text>
                      </View>

                    </View>
                  </View>
                </TouchableOpacity>
                <View style={styles.fbox}>
                  <View style={styles.Fbox}>

                    <FlatList
                      data={List}
                      // numColumns={2}
                      // scrollEventThrottle={false}
                      renderItem={({ item }) => {
                        return (
                          <TouchableOpacity>
                            <View style={styles.Box}>
                              <View style={{ height: height / 18, width: width * 0.15 }}>
                                <Image style={styles.image}
                                  source={item.pic}
                                />
                              </View>
                              <View style={styles.content}>
                                <Text>{item.N1}</Text>
                              </View>
                            </View>
                          </TouchableOpacity>
                        )
                      }
                      }
                    />

                  </View>

                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <View style={{ height: height / 50, alignItems: 'center' }}>
                    <View style={styles.boxp}>
                      <View style={{ height: height / 20, width: width * 0.15 }}>
                        <Image style={styles.image}
                          source={require('../../Assets/Images/logoutButton.png')}
                        />
                      </View>

                      <View style={{ width: width / 1.33 }}>
                        <Text>Log Out</Text>
                      </View>

                    </View>
                  </View>
                </TouchableOpacity>

              </View>
            )
          }
          }


        />


      </View>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
  main: {
    // backgroundColor: 'red',
    height: '95%',
    width: '100%'
  },

  con1: {
    backgroundColor: 'white',
    height: height / 10,
    width: '90%',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  con2: {
    // backgroundColor: 'cyan',
    height: height / 20,
    width: '90%',


  },
  box: {
    width: width * 0.9,
    // alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    height: height / 6.6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxp: {
    width: '96%',
    alignItems: 'center', borderRadius: 10,
    backgroundColor: 'white',
    height: height / 20,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  box3: {
    width: '90%',
    alignItems: 'center', borderRadius: 10,
    backgroundColor: 'white',
    height: height * 0.5,

  },
  Mbox: {
    width: '100%',
    alignItems: 'center',
    // backgroundColor: 'pink',
    height: height * 0.23,
    alignItems: 'center',
    justifyContent: 'center'
  },
  Box: {
    // backgroundColor:'red',
    flexDirection: 'row',

    width: width * 0.85,
  },

  fbox: {
    width: '100%',
    alignItems: 'center',
    //  backgroundColor: 'pink',
    height: height * 0.5,
    alignItems: 'center',
    // justifyContent:'center'
  },
  Fbox: {
    width: width * 0.9,
    // alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    // height:height/3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    height: height / 20,
    borderBottomWidth: 1,
    width: width * 0.72,
    borderBottomColor: 'lightgray',
    justifyContent: 'center'
  },
  image: {
    height: height / 22,
    width: width * 0.1,
    resizeMode: 'contain'

  },
  modalMainView: {
    backgroundColor: 'rgba(0,0,0.45,0.7)',
    height: '100%',
    width: '100%',
    //justifyContent:'center',
    alignSelf: 'center'
  },
  modalsecondContainer: {
    backgroundColor: 'transparent',
    height: height * 0.30,
    width: width * 0.99
  },
  modalthirdContainer: {
    backgroundColor: 'rgb(119,96,223)',
    height: height * 0.29,
    width: width * 0.80,
    alignSelf: 'center',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    borderRadius:20

  },
  modalcrossView: {
    height: height * 0.05,
    width: width * 0.19,
    // backgroundColor: 'green',
    borderRadius: 19,
    // borderWidth: 2,
    // marginVertical:20,
    //  alignContent:'center',
    //justifyContent:'center',
    alignSelf:'center'
  },
  modalcrossView1: {
    height: height * 0.05,
    width: width * 0.19,
    backgroundColor: 'rgb(0,200,78)',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 19,
   // borderWidth: 0.2,
    justifyContent: 'center'
  }
})
