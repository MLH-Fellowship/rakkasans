import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import AddChatScreen from "./AddChatScreen";
import * as Firebase from "firebase";

/**USER LIST
 * This screen shows all the users in the firestore database.
 * It also includes a search bar so that users can search for
 * specific people.
 */
class UserList extends Component {
  constructor(props) {
    super(props);
    this.firestoreRef = Firebase.firestore().collection("users");
    this.state = {
      loading: false,
      data: [],
      error: null,
    };
    this.arrayholder = [];
  }

  goToNextScreen = () => {
    return navigation.navigate(AddChatScreen);
    //const navigation = useNavigation();
    //navigation.navigate(AddChatScreen);
  };

  componentDidMount() {
    //this.makeRemoteRequest();
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  getCollection = (querySnapshot) => {
    const data = [];
    querySnapshot.forEach((res) => {
      const { first, last, email, imageURL } = res.data();
      data.push({
        key: res.id,
        res,
        first,
        last,
        email,
        imageURL,
      });
    });
    this.setState({
      data,
      isLoading: false,
    });
  };

  /*  makeRemoteRequest = () => {
    const url = `https://randomuser.me/api/?&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.results,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.results;
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }; */

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%",
        }}
      />
    );
  };

  searchFilterFunction = (text) => {
    this.setState({
      value: text,
    });

    const newData = this.state.data.filter((item) => {
      const itemData = `${item.first.toUpperCase()} ${item.last.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={(text) => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };

  render() {
    //const navigation = useNavigation();
    if (this.state.loading) {
      return (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          renderItem={({ item, navigation }) => (
            <TouchableHighlight
              onPress={() => this.props.navigation.navigate("AddChatScreen")}
            >
              <ListItem
                leftAvatar={{ source: { uri: item.imageURL } }}
                title={`${item.first} ${item.last}`}
                subtitle={item.email}
              />
            </TouchableHighlight>
          )}
          keyExtractor={(item) => item.email}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default UserList;
