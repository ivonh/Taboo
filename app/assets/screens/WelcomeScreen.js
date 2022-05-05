import { 
    StyleSheet , 
    ImageBackground, 
    View 
} from 'react-native';
import React from 'react';

function WelcomeScreen(props) {
  return (
   <ImageBackground
     source={require('./app/assets/background.jpg')} 
   >
   </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",    
    },
    loginButton: {
        width: ' 100%',
        height: 70,
        backColor: ' #fc5c65',
    }
})

export default WelcomeScreen;
