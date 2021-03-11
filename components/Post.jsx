import React from 'react';
import {
  StyleSheet, Text, View
} from 'react-native';

import {
  FontAwesome as FontIcon,
  MaterialIcons as MatIcon,
  AntDesign as AntIcon,
  Entypo as EnIcon,
  Feather as FIcon,
} from '@expo/vector-icons';

const Post = ({
  username, title, content, date,
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    // pdf: {
    //   width: "100%",
    //   height: "100%",
    // },
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontIcon
          name="user"
          size={24}
          color="#5D669A"
          style={{ paddingHorizontal: 10, paddingVertical: 10 }}
        />
        <View style={styles.user}>
          <Text style={styles.username}>{username}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.content_text}>{content}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default Post;
