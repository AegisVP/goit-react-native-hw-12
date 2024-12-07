import { StyleSheet } from 'react-native';

export const colors = StyleSheet.create({
  white: '#FFFFFF',
  backgroundMain: '#FFFFFF',
  backgroundSecondary: '#F6F6F6',
  black: '#000000',
  text: {
    default: '#212121',
    link: '#1B4371',
  },
  button: {
    default: {
      background: '#FF6C00',
      text: '#FFFFFF',
    },
    // selected: {
    //   background: '',
    //   text: '',
    // },
    // disabled: {
    //   background: '',
    //   text: '',
    // },
  },
  input: {
    default: {
      text: '#212121',
      placeholder: '#BDBDBD',
      border: '#EBEBEB',
      background: '#F6F6F6',
    },
    focused: {
      border: '#FF6C00',
      background: '#FFFFFF',
    },
  },
});
