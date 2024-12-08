import React from 'react';
import Home from './Home';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import { createStackNavigator } from '@react-navigation/stack';

const AuthNavStack = createStackNavigator();

const AuthNavigator = ({ isLoggedin, setIsLoggedin }) => {
  return (
    <AuthNavStack.Navigator>
      {isLoggedin ? (
        <AuthNavStack.Screen name='Home' options={{ mode: 'card', headerMode: 'none' }}>
          {() => <Home setIsLoggedin={setIsLoggedin} />}
        </AuthNavStack.Screen>
      ) : (
        <>
          <AuthNavStack.Screen name='Login' options={{ mode: 'card', headerMode: 'none' }}>
            {() => <LoginScreen setIsLoggedin={setIsLoggedin} />}
          </AuthNavStack.Screen>
          <AuthNavStack.Screen name='Register' options={{ mode: 'card', headerMode: 'none' }}>
            {() => <RegistrationScreen setIsLoggedin={setIsLoggedin} />}
          </AuthNavStack.Screen>
        </>
      )}
    </AuthNavStack.Navigator>
  );
};

export default AuthNavigator;
