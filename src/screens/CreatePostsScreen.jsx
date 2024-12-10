import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, Pressable, ScrollView, Text, View } from 'react-native';
import { colors } from '../../styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';

const CreatePostsScreen = () => {
  const [imageData, setImageData] = useState(null);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState({});
  const navigate = useNavigation();

  const setPicture = () => {
    console.log('Setting picture...');
    setImageData('some image data. base64 encoded?');
  };

  const selectLocation = () => {
    console.log('Select location');
    setLocation({ city: 'Kyiv', country: 'Ukraine' });
  };

  const createPost = () => {
    console.log('Creating post');
    setImageData(null);
    setTitle('');
    setLocation({});
    navigate.navigate('Posts');
  };

  return (
    <ScrollView
      style={{ flex: 1, width: '100%', borderWidth: 1, borderColor: 'red', padding: 16, backgroundColor: colors.backgroundMain }}
      contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', direction: 'column', gap: 32 }}>
      <Pressable onPress={setPicture} style={{ flex: 1, gap: 8, width: '100%' }}>
        <View style={{ width: '100%', height: 240, borderWidth: 1, borderColor: colors.input.default.border, borderRadius: 8, backgroundColor: colors.backgroundSecondary }}>
          {imageData ? (
            <>
              <Image source={require('../../assets/images/post3.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
              <View
                style={{
                  position: 'absolute',
                  top: 90,
                  left: '50%',
                  transform: 'translateX("-30px")',
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: `${colors.white}4C`,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name='camera' size={24} color={colors.white} />
              </View>
            </>
          ) : (
            <View
              style={{
                position: 'absolute',
                top: 90,
                left: '50%',
                transform: 'translateX("-30px")',
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Ionicons name='camera' size={24} color={colors.text.secondary} />
            </View>
          )}
        </View>
        <Text style={{ color: colors.text.secondary }}>{imageData ? 'Edit picture' : 'Upload picture'}</Text>
      </Pressable>
      <KeyboardAvoidingView style={{ width: '100%', direction: 'column', gap: 16 }}>
        <Input value={title} onChangeText={setTitle} placeholder='Title...' />
        <Input value={location.city && `${location.city}, ${location.country}`} onPress={selectLocation} placeholder='Location...' />
      </KeyboardAvoidingView>
      <Button onPress={createPost}>
        <Text style={{ color: colors.white }}>Create new post</Text>
      </Button>
    </ScrollView>
  );
};

export default CreatePostsScreen;
