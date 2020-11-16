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

  const _hasReplies = () => {
    return Object.keys(children).length > 0
  }

  const _handlePress = () => {
    navigation.navigate("New Comment", {
      parent_id: id,
      post_id: post.id
    });
  }

  const ToggleRepliesComponent = () => {
    if (repliesShown){
      return (
        <View style={styles.nameContainer}>
          <Text style={{ alignItems: 'center', justifyContent: 'center' }}>Hide replies</Text>
          <Image source={require('../assets/images/less_ic.png')} style={{height: 18, width: 18}}/>
        </View>
      )
    } else {
      return (
        <View style={styles.nameContainer}>
          <Text>Show replies</Text>
          <Image source={require('../assets/images/more_ic.png')} style={{height: 18, width: 18}} />
        </View>
      )
    }
  }

  return (
    <View>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#CFCFCF"
        onPress={() => setRepliesShown(!repliesShown)}>
      <View style={styles.commentContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{first_name} {last_name}</Text>
          <Text style={styles.date}>{moment(created_at).fromNow()}</Text>
        </View>
        <Text style={styles.content}>{content}</Text>
        <View style={styles.nameContainer}>
          <Text onPress={_handlePress}><AntDesign name="plussquareo" size={16} color="black" /> Reply</Text>
          {_hasReplies() && <Text style={{marginLeft: 8, marginRight: 8}}>|</Text>}
          {_hasReplies() && <ToggleRepliesComponent/>}
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
    paddingTop: 2,
    alignContent: "center"
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
