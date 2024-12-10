import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { Post } from './Post';

export const PostList = ({ posts, style: outerStyle = {}, listHeaderComponent: ListHeaderComponent }) => {
  return <FlatList data={posts} renderItem={({ item }) => <Post key={item.id} post={item} />} ListHeaderComponent={ListHeaderComponent} style={[style.postList, outerStyle]} />;
};

const style = StyleSheet.create({
  postList: {
    flex: 1,
    width: '100%',

    gap: 32,
    margin: 0,
    paddingHorizontal: 32,
  },
});
