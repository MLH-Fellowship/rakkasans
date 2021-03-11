import {
  ScrollView, StyleSheet, Text, View,
} from 'react-native';
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';
import Thread from '../../components/Thread';
import Post from '../../components/Post';

export default function Comments({ route, navigation }) {
  const { post } = route.params;

  const [comments, setComments] = useState({});
  useFocusEffect(React.useCallback(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts/${post.id}/comments`);
        const json = await response.json();

        const order = orderPosts(json);
        setComments(order);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []));

  const orderPosts = (rawPosts) => {
    const findChildPosts = (parentPost, localPosts) => {
      const parentId = parentPost.id;

      rawPosts.forEach((childPost) => {
        if (childPost.parent_id === parentId) {
          const children = localPosts[parentId] ? localPosts[parentId].children : {};

          localPosts[parentId] = {
            content: parentPost,
            children: {
              ...children,
              [childPost.id]: {
                content: childPost,
                children: {},
              },
            },
          };

          findChildPosts(childPost, localPosts[parentId].children);
        }
      });

      if (!localPosts[parentId]) {
        localPosts[parentId] = {
          children: {},
          content: parentPost,
        };
      }
    };

    const nestedPosts = {};
    const topLevelMessages = () => rawPosts.forEach((post) => {
      if (post.parent_id === null) {
        findChildPosts(post, nestedPosts);
      }
    });

    topLevelMessages();

    return nestedPosts;
  };

  const _handlePress = () => {
    navigation.navigate('New Comment', {
      post_id: post.id,
    });
  };

  return (
    <ScrollView style={styles.container}>
      { post && (
      <Post
        username={`${post.first_name} ${post.last_name}`}
        title={post.title}
        content={post.body}
        date={moment(post.created_at).format('Do MMM YY, HH:mm:ss')}
      />
      )}
      <Thread comments={comments} post={post} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  date: {
    fontWeight: '200',
    fontSize: 12,
    color: '#474747',
  },
  nameContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
  },
  buttonView: {
    width: '100%',
  },
  title: {
    fontSize: 24,
    paddingBottom: 10,
  },
  name: {
    fontWeight: '500',
    fontSize: 12,
    marginRight: 5,
    color: '#474747',
  },
  post: {
    paddingBottom: 15,
  },
  borderContainer: {
    borderBottomColor: '#939393',
    borderBottomWidth: 0.5,
  },
  reply: {
    paddingBottom: 10,
  },
  padding: {
    paddingHorizontal: 10,
  },
});
