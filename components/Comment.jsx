import React, { useState } from 'react';
import {
  TouchableHighlight, View, StyleSheet, Text, Image,
} from 'react-native';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, FontAwesome as FontIcon } from '@expo/vector-icons';
import Thread from './Thread';

export default function Comment({ comment, post, children = null }) {
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      borderColor: '#D1D1D1',
      borderWidth: 1,
      marginVertical: 10,
    },
    box: {
      marginLeft: 10,
    },
    nameContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
    },
    repliesContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    name: {
      fontSize: 16,
      marginRight: 5,
    },
    date: {
      fontWeight: '200',
      fontSize: 16,
    },
    content: {
      fontSize: 16,
      paddingBottom: 10,
    },
  });

  const {
    first_name, last_name, content, created_at, id,
  } = comment;

  const [repliesShown, setRepliesShown] = useState(false);

  const renderChildren = (responses) => {
    if (responses) {
      return (
        <Thread comments={responses} post={post} />
      );
    }
  };

  const _hasReplies = () => Object.keys(children).length > 0;

  const _handlePress = () => {
    navigation.navigate('New Comment', {
      parent_id: id,
      post_id: post.id,
    });
  };

  const ToggleRepliesComponent = () => {
    if (repliesShown) {
      return (
        <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
          <Text>Hide replies</Text>
          <Image source={require('../assets/images/less_ic.png')} style={{ height: 18, width: 18 }} />
        </View>
      );
    }
    return (
      <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
        <Text>Show replies</Text>
        <Image source={require('../assets/images/more_ic.png')} style={{ height: 18, width: 18 }} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#CFCFCF"
        onPress={() => setRepliesShown(!repliesShown)}
      >
        <View style={styles.box}>
          <View style={styles.nameContainer}>
            <FontIcon
              name="user"
              size={24}
              color="#5D669A"
              style={{ marginRight: 10, paddingVertical: 10 }}
            />
            <Text style={styles.name}>
              {first_name}
              {' '}
              {last_name}
            </Text>
            <Text style={styles.date}>{moment(created_at).fromNow()}</Text>
          </View>
          <Text style={styles.content}>{content}</Text>
          <View style={styles.repliesContainer}>
            <Text onPress={_handlePress}>
              <AntDesign name="plussquareo" size={16} color="black" />
              {' '}
              Reply
            </Text>
            {_hasReplies() && <Text style={{ marginLeft: 8, marginRight: 8 }}>|</Text>}
            {_hasReplies() && <ToggleRepliesComponent />}
          </View>
        </View>
      </TouchableHighlight>

      <View>
        {repliesShown && renderChildren(children)}
      </View>
    </View>
  );
}
