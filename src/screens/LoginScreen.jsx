import React, { useState } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { style } from '../../styles/general';
import { colors } from '../../styles/colors';
import Input from '../components/Input';
import Button from '../components/Button';
import { showPasswordButton } from '../components/ShowPassButton';

export default function LoginScreen({ setIsLoggedin }) {
  const navigation = useNavigation();
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [securePassEntry, setSecurePassEntry] = useState(true);

  const doLogin = () => {
    setIsLoggedin(true);
  };

  const doSignup = () => {
    navigation.navigate('Register');
  };

  return (
    <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
      <Image source={require('../../assets/images/register_bg.jpg')} style={style.backgroundImage} />
      <KeyboardAvoidingView style={style.authWindowContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Text style={style.loginTitle}>Login</Text>
        <Input value={userEmail} onChangeText={setUserEmail} placeholder='Email address' textContentType='emailAddress' autofocus={true} />
        <Input
          value={userPass}
          onChangeText={setUserPass}
          placeholder='Password'
          secureTextEntry={securePassEntry}
          rightButton={showPasswordButton({ securePassEntry, setSecurePassEntry })}
        />
        <Button onPress={doLogin} outerStyle={{ marginHorizontal: 'auto', marginTop: 43 - 16 }}>
          <Text style={{ color: colors.button.default.text }}>Log in</Text>
        </Button>
        <View style={style.redirectText}>
          <Text>
            Don't have an account?
            <TouchableWithoutFeedback onPress={doSignup}>
              <Text style={{ color: colors.text.link }}> Register</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  );
}
