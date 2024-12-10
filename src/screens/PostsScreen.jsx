import React from 'react';
import { View } from 'react-native';
import { PostList } from '../components/PostList';
import { UserInfo } from '../components/UserInfo';

const PostsScreen = ({ posts, comments, user }) => {
  return (
    <View style={{ flex: 1, alignItems: 'start', justifyContent: 'center' }}>
      <PostList
        listHeaderComponent={<UserInfo user={user} style={{ marginVertical: 32 }} />}
        posts={posts.map(post => ({ ...post, comments: comments.filter(comment => comment.post_id === post.id) }))}
        user={user}
      />
    </View>
  );
};

export default PostsScreen;
