import React from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';
import { colors } from '../../styles/colors';

const defaultPost = {
  id: 1,
  image: '../../assets/images/register_bg.jpg',
  title: 'Forest',
  location: 'Kyiv, Ukraine',
  comments: [],
};

export const Post = ({ post = defaultPost, style: outerStyle = {}, metaLine: MetaLine }) => {
  const { image, title, comments, location } = post;
  // const imagePath = `../../assets/images/${image}`;
  // console.log({ image, imagePath });
  return (
    <Pressable style={[styles.container, outerStyle]}>
      {/* <Image source={{ uri: '../../assets/images/post1.jpg' }} style={styles.postImage} /> */}
      {/* <Image source={{ uri: imagePath }} style={styles.postImage} /> */}
      {/* <Image source={require(`../../assets/images/${image}`)} style={styles.postImage} /> */}
      <Image source={require('../../assets/images/post1.jpg')} style={styles.postImage} />
      <Text style={styles.postTitle}>{title}</Text>
      {MetaLine ? (
        <MetaLine />
      ) : (
        <View style={styles.postMeta}>
          <Text style={[styles.postDescription, { color: comments.length > 0 ? colors.default : colors.text.secondary }]}>
            <Ionicons name='chatbubbles-outline' size={16} /> <Text style={styles.postDescription}>{comments.length}</Text>
          </Text>
          <Text style={[styles.postDescription, { color: colors.text.secondary }]}>
            {location && (
              <>
                <Ionicons name='location-outline' size={16} />{' '}
                <Text style={[styles.postDescription, { color: colors.text.default, textDecorationLine: 'underline' }]}>
                  {location.city}, ${location.country}
                </Text>
              </>
            )}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  container: {
    height: 299,
    flex: 1,
    borderRadius: 12,
    boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.1)',
  },
  postImage: {
    width: '100%',
    height: 225,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: colors.text.default,
    marginTop: 8,
  },
  postMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  postDescription: {
    fontSize: 16,
    fontWeight: 400,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
});
