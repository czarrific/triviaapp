import React from 'react';
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width:80, height:80}} source={require('../login/logo.png')}/>
      <Text style={{color: '#ffffff',fontSize:18}}>TRIVIA APP</Text>

      <TextInput style={styles.inputBox}
      placeholder="Email"
      placeholderTextColor="#ffffff"
      selectionColor="#fff"
      keyboardType="email-address"/>

      <TextInput style={styles.inputBox}
      placeholder="Password"
      secureTextEntry={true}
      placeholderTextColor="#ffffff"/>

      <TouchableOpacity style={styles.button}>
        <Text style ={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={{color: '#ffffff',fontSize:10}}>or use your Social Account</Text>
      <TouchableOpacity style={styles.buttonFB}>
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonGoogle}>
        <Text style={styles.buttonText}>Login with Google</Text>
      </TouchableOpacity>

      <View styles={styles.signupTextContainer}>
        <Text style={styles.signupText}>Don't Have an Account yet?<Text style= {styles.signupButton}> Signup</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0f4c81',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox:{
    width:300,
    height:45,
    backgroundColor:'rgba(255,255,255,0.3)',
    borderRadius:25,
    paddingHorizontal:16,
    fontSize:16,
    color:"#ffffff",
    marginVertical:10
  },
  buttonText:{
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  button:{
    width:300,
    backgroundColor: '#0277bd',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical:12
  },
  buttonFB:{
    width:300,
    backgroundColor:'#3b5998',
    borderRadius:25,
    marginVertical:10,
    paddingVertical:12
  },
  buttonGoogle:{
    width:300,
    backgroundColor:'#db4a39',
    borderRadius:25,
    marginVertical:10,
    paddingVertical:12
  },
  signupTextContainer:{
    flexGrow:1,
    alignItems:'center',
    justifyContent:'flex-end',
    marginVertical: 16,
  },
  signupText:{
    color: 'rgba(255,255,255,0.6)',
    fontSize:16,

  },
  signupButton:{
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500'
  },
});
