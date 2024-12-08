import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './src/navigation/AuthNavigator';

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <NavigationContainer>
      <AuthNavigator isLoggedin={isLoggedin} setIsLoggedin={setIsLoggedin} />
    </NavigationContainer>
  );
};

export default App;
