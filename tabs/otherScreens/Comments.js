import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Thread from "../../components/Thread";
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';

export default function Comments({ route, navigation }) {
  const { post } = route.params

  const [comments, setComments] = useState({});
  useFocusEffect(React.useCallback(() => {
    const getPosts = async () => {
      try {
        const response = await fetch(`http://localhost:3000/posts/${post.id}/comments`)
        const json = await response.json();

        const order = orderPosts(json)
        setComments(order);

      } catch (error) {
        console.log(error);
      }
    }

    getPosts();
  }, [])
  )


  const orderPosts = (rawPosts) => {
    const findChildPosts = (parentPost, localPosts) => {
      const parentId = parentPost.id;

      rawPosts.forEach(childPost => {
        if (childPost.parent_id === parentId) {
          const children = localPosts[parentId] ? localPosts[parentId].children : {};

          localPosts[parentId] = {
            content: parentPost,
            children: {
              ...children,
              [childPost.id]: {
                content: childPost,
                children: {}
              }
            }
          }

          findChildPosts(childPost, localPosts[parentId].children)
        }
      })

      if (!localPosts[parentId]) {
        localPosts[parentId] = {
          children: {},
          content: parentPost
        }
      }
    }

    const nestedPosts = {};
    const topLevelMessages = () => {
      return rawPosts.forEach(post => {
        if (post.parent_id === null) {
          findChildPosts(post, nestedPosts)
        }
      })
    }

    topLevelMessages()

    return nestedPosts;
  }

  const _handlePress = () => {
    navigation.navigate("New Comment", {
      post_id: post.id
    });
  }

  return (
    <ScrollView style={styles.container}>
      { post && (
        <View >
          <View style={styles.nameContainer}>
            {/* <Text style={styles.name}>{first_name} {last_name}</Text> */}
            <Text style={styles.date}>{moment(post.created_at).fromNow()}</Text>
          </View>
          <View>
            <Text style={styles.title}>{post.title}</Text>
            <Text>{post.body}</Text>
          </View>
          <View>
            <Text onPress={_handlePress}>Reply</Text>
          </View>
        </View>
      )}
      <Thread comments={comments} post={post} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  date: {
    fontWeight: "200",
    fontSize: 12,
  },
  nameContainer: {
    flex: 1,
    flexDirection: "row",
  },
  buttonView: {
    width: "100%",
  },
  title: {
    fontSize: 24
  }
});
