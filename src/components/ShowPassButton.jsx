import { TouchableOpacity, Text } from 'react-native';
import { style } from '../../styles/general';

export const showPasswordButton = ({ securePassEntry, setSecurePassEntry }) => (
  <TouchableOpacity onPress={() => setSecurePassEntry(p => !p)}>
    <Text style={style.showPassText}>{securePassEntry ? 'Show' : 'Hide'} password</Text>
  </TouchableOpacity>
);
