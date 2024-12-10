import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import CreatePostsScreen from '../screens/CreatePostsScreen';
import PostsScreen from '../screens/PostsScreen';
import { LogoutButton } from '../components/LogoutButton';
import { colors } from '../../styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

const comments = [
  { id: 1, post_id: 2, text: 'Thank you! That was very helpful!', date: '2024-03-21' },
  { id: 2, post_id: 2, text: 'Thank you! That was very helpful!', date: '2024-04-21' },
  { id: 3, post_id: 2, text: 'Thank you! That was very helpful!', date: '2024-05-21' },
  { id: 4, post_id: 2, text: 'Thank you! That was very helpful!', date: '2024-06-21' },
  { id: 5, post_id: 2, text: 'Thank you! That was very helpful!', date: '2024-03-27' },
  { id: 6, post_id: 3, text: 'Thank you! That was very helpful!', date: '2024-04-27' },
  { id: 7, post_id: 3, text: 'Thank you! That was very helpful!', date: '2024-05-27' },
  { id: 8, post_id: 3, text: 'Thank you! That was very helpful!', date: '2024-06-27' },
  { id: 9, post_id: 3, text: 'Thank you! That was very helpful!', date: '2024-07-27' },
];

const posts = [
  { id: 1, image: 'post1.jpg', title: 'Forest', location: { city: 'Ivano-Frankivsk region', country: 'Ukraine' } },
  { id: 2, image: 'post2.jpg', title: 'Black see sunset', location: { city: 'Krimea', country: 'Ukraine' } },
  { id: 3, image: 'post3.jpg', title: 'Old house', location: { city: 'Verona', country: 'Italy' } },
];

const user = {
  name: 'Natali Romanova',
  email: 'email@example.com',
  avatar: 'avatar.jpg',
};

const HomeNavigator = ({ doLogout }) => {
  const headerOptions = {
    headerRight: () => <LogoutButton onPress={doLogout} />,
    tabBarLabel: '',
    tabBarStyle: { display: 'flex', gap: 32, justifyContent: 'center' },
    tabBarOptions: {
      activeTintColor: colors.accent,
      inactiveTintColor: colors.text.default,
    },
  };

  return (
    <Tab.Navigator initialRouteName='Create Post' screenOptions={{ headerStatusBarHeight: 44 }}>
      <Tab.Screen
        name='Posts'
        component={() => <PostsScreen user={user} comments={comments} posts={posts} />}
        options={{
          ...headerOptions,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.bottomButton, focused && styles.bottomButtonActive]}>
              <Ionicons name={focused ? 'apps' : 'apps-outline'} size={24} color={focused ? colors.accent : colors.text.default} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Create Post'
        component={CreatePostsScreen}
        options={{
          ...headerOptions,
          tabBarIcon: () => (
            <View style={[styles.bottomButton, styles.bottomButtonBig, styles.bottomButtonBigActive]}>
              <Ionicons name={'add'} size={24} color={colors.white} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={() => <ProfileScreen user={user} comments={comments} posts={posts} />}
        options={{
          ...headerOptions,
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={[styles.bottomButton, focused && styles.bottomButtonActive]}>
              <Ionicons name={focused ? 'person' : 'person-outline'} size={24} color={focused ? colors.accent : colors.text.default} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomButton: {
    width: 40,
    height: 40,
    marginVertical: 'auto',
    backgroundColor: 'transparent',
    color: colors.text.default,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonActive: {
    color: colors.accent,
  },
  bottomButtonBig: {
    width: 70,
    height: 40,
    color: colors.accent,
    borderColor: colors.accent,
    borderWidth: 1,
    borderRadius: 20,
  },
  bottomButtonBigActive: {
    backgroundColor: colors.accent,
    color: colors.white,
  },
});

export default HomeNavigator;
