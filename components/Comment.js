import React, { useState } from "react";
import { TouchableHighlight, View, StyleSheet, Text, Image } from "react-native";
import Thread from "./Thread";
import moment from 'moment';
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';

export default function Comment({ comment, post, children = null }) {
  const navigation = useNavigation();
  let { first_name, last_name, content, created_at, id } = comment;

  const [repliesShown, setRepliesShown] = useState(false);

  const renderChildren = (responses) => {
    if (responses) {
      return (
        <Thread comments={responses} post={post} />
      )
    }
  }

  const _handlePress = () => {
    navigation.navigate("New Comment", {
      parent_id: id,
      post_id: post.id
    });
  }

  return (
    <View>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#CFCFCF"
        onPress={() => setRepliesShown(!repliesShown)}>
      <View style={styles.commentContainer}>
        <View style={styles.nameContainer}>
          {Object.keys(children).length > 0 && repliesShown && <Image source={require('../assets/images/less_ic.png')} style={{height: 18, width: 18}} />}
          {Object.keys(children).length > 0 && !repliesShown && <Image source={require('../assets/images/more_ic.png')} style={{height: 18, width: 18}} />}
          <Text style={styles.name}>{first_name} {last_name}</Text>
          <Text style={styles.date}>{moment(created_at).fromNow()}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
        <View>
          <Text onPress={_handlePress}><AntDesign name="plussquareo" size={16} color="black" /> Reply</Text>
        </View>
      </View>
      </TouchableHighlight>

      <View style={styles.container}>
        {repliesShown && renderChildren(children)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderLeftWidth: 1,
    borderLeftColor: "black"
  },
  nameContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 2
  },
  name: {
    fontWeight: "800",
    fontSize: 12,
    marginRight: 5
  },
  username: {
    fontWeight: "200",
    fontSize: 12,
  },
  content: {
    fontSize: 16,
    paddingBottom: 10
  },
  date: {
    fontWeight: "200",
    fontSize: 12,
  },
  commentContainer:{
    marginVertical: 5
  }
});
