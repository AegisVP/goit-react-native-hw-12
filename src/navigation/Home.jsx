import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import CreatePostsScreen from '../screens/CreatePostsScreen';
import PostsScreen from '../screens/PostsScreen';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator initialRouteName='Posts' screenOptions={{ headerStatusBarHeight: 32 }}>
      <Tab.Screen name='Posts' component={PostsScreen} options={{}} />
      <Tab.Screen name='CreatePost' component={CreatePostsScreen} />
      <Tab.Screen name='Profile' component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default Home;
