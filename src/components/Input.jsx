import { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles/colors';

const Input = props => {
  const { value, onChangeText, placeholder, outerStyles, rightButton, autofocus = false, secureTextEntry = false, onBlur: onBlurCustom } = props;
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = () => setIsFocused(true);

  const onBlur = () => {
    setIsFocused(false);

    if (onBlurCustom) {
      onBlurCustom();
    }
  };

  return (
    <View style={[style.input, isFocused && style.focused, outerStyles]}>
      <TextInput
        {...props}
        value={value}
        onChangeText={onChangeText}
        autoFocus={autofocus}
        placeholder={placeholder}
        placeholderTextColor={colors.input.default.placeholder}
        secureTextEntry={secureTextEntry}
        style={style.text}
        autoCapitalize='none'
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {rightButton}
    </View>
  );
};

const style = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: colors.input.default.border,
    backgroundColor: colors.input.default.background,
    padding: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 16,
  },
  text: {
    color: colors.input.default.text,
  },
  focused: {
    borderColor: colors.input.focused.border,
    backgroundColor: colors.input.focused.background,
  },
});

export default Input;
