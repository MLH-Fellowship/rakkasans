import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Thread from "../../components/Thread";
import { useFocusEffect } from '@react-navigation/native';
import moment from 'moment';
import { AntDesign } from '@expo/vector-icons'; 

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
        <View style={styles.padding}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{post.first_name} {post.last_name}</Text>
            <Text style={styles.date}>{moment(post.created_at).fromNow()}</Text>
          </View>
          <View>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.post}>{post.body}</Text>
          </View>
          <View style={styles.borderContainer}>
            <Text style={styles.reply} onPress={_handlePress}><AntDesign name="plussquareo" size={16} color="black" /> Reply</Text>
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
    marginHorizontal: 5
  },
  date: {
    fontWeight: "200",
    fontSize: 12,
    color: "#474747"
  },
  nameContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 20
  },
  buttonView: {
    width: "100%"
  },
  title: {
    fontSize: 24,
    paddingBottom: 10
  },
  name: {
    fontWeight: "500",
    fontSize: 12,
    marginRight: 5,
    color: "#474747"
  },
  post: {
    paddingBottom: 15
  },
  borderContainer: {
    borderBottomColor: "#939393",
    borderBottomWidth: .5
  },
  reply: {
    paddingBottom: 10
  },
  padding: {
    paddingHorizontal: 10
  }
});
