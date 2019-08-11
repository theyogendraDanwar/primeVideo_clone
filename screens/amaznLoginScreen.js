import React, {useState,useEffect} from 'react';
import {withNavigation} from 'react-navigation';
import {
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import { useStateContext } from '../reduxhooks/state';

const LoginScreen = (props) => {
  const [checkUsername, usernameUpdator] = useState();
  const [checkPass, passUpdator] = useState();
  const [state, dispatch] = useStateContext();
  useEffect(() => {
    state.login.isLoggedIn ? props.navigation.navigate('amaznHomeScreen'): ''
  },[state.login.isLoggedIn])
  useEffect(() => {
    return () => {
      console.log('will unmount');
    }
  }, []);
  handleSubmit = () => {
    checkUsername && checkPass != null ?
    dispatch({
      type: 'CHECK_LOGIN_FIELD_STATUS',
      payload: {
        username: checkUsername,
        pass: checkPass
      }
    }): dispatch({
      type: 'SET_LOGIN_FIELD_STATUS_ERROR'
    })
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <View style={{ flex: 2 }}>
        <View style={{
          flex: 1
        }}>
          <Text style={styles.loginTitle}> Sign In to Prime Clone</Text>
          <View style={{position: "relative", paddingBottom: 20}}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Username"
              placeholderTextColor={'#636e7e'}
              value={checkUsername}
              onChangeText={(e) => {usernameUpdator(e)}}
            />
            { state.login.error && <Text style={{position: 'absolute',  bottom: 0, left:0, right:0, 
            paddingBottom: 10,
              color: '#C71E1E', fontSize:16}}> Field is required *</Text>}
          </View>
          <View style={{position: "relative", paddingBottom: 20}}>
            <TextInput
              secureTextEntry={true}
              style={styles.textInputStyle}
              placeholder="Password"
              value={checkPass}
              onChangeText={(e) => {passUpdator(e)}}
              placeholderTextColor={'#636e7e'} />
              {state.login.error && <Text style={{
              position: 'absolute',  bottom: 0, left:0, right:0, 
              paddingBottom: 10,
              color: '#C71E1E', 
              fontSize:16}}> Field is required *</Text>
              }
          </View>

        </View>
        <View style={{ flex: 0.9, alignItems: 'baseline' }}>
          <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle} >
            <Text style={{ fontWeight: "800" }}>Sign In</Text>
          </TouchableOpacity>
          <Text style={{ color: '#00b9e8', marginBottom: 30 }}>
            Not a Prime Clone Member?
        </Text>
          <TouchableOpacity onPress={handleSubmit}
            style={[styles.buttonStyle,
            { backgroundColor: '#232f38' }]} >
            <Text style={{
              color: '#00b9e8',
              fontWeight: "800"
            }}>Sign Up for Prime Clone</Text>
          </TouchableOpacity>
        </View>

      </View>
      <View style={{ flex: 0.1, }}>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1 }} />
        <View style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10
        }}>
          <Image
            style={{ alignSelf: 'center' }}
            source={require('../images/open-source.png')} resizeMode="contain" style={{ height: 50 }} />
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default withNavigation(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c1922',
    padding: 20,
    elevation: 0,
    shadowColor: '#232f38',
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
    },
    flexDirection: 'column',
    justifyContent: 'space-between',
    shadowRadius: 0,
  },
  buttonStyle: {
    borderRadius: 50,
    color: '#073b4e',
    fontWeight: "800",
    backgroundColor: '#00b9e8',
    borderWidth: 0,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 30,
  },
  textInputStyle: {
    borderRadius: 50,
    color: '#636e7e',
    paddingLeft: 20,
    backgroundColor: '#232f38',
    paddingBottom: 10,
    marginBottom: 10
  }
});