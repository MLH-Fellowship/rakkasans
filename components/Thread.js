import React from "react";
import { View, StyleSheet } from "react-native";
import SinglePost from "./SinglePost";

const Thread = ({ comments, post }) => {

  const renderParents = (entries) => {
    const parents = [];
    for (const postId in entries) {
      parents.push(
        <SinglePost
          key={postId}
          comment={entries[postId].content}
          children={entries[postId].children}
          post={post}
        />
      )
    }

    return parents
  }

  return (
    <View style={styles.container}>
      {renderParents(comments)}
    </View>
  )
}

export default Thread;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 25
  }
});