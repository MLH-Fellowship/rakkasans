import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { StyleSheet, ScrollView, Text, TouchableOpacity } from "react-native";
import CustomListItem from "../../components/CustomListItem";
//import { auth, db } from "../firebase";
//import "firebase/firestore";
import { Avatar } from "react-native-elements";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import Firebase from "../../constants/FireBaseDb";
import Colors from "../../constants/Colors";
import Dimensions from "../../constants/Dimensions";

const HomeScreen = ({navigation}) => {

    const [chats, setChats] = useState([]);

/*     const signOutUser = () =>  {
        Firebase.auth().signOut().then(() => {
            navigation.replace("Login"); //change this to "Chat" to use our login
        });
    }; */ //sign out function not necessary right now

    useEffect(() => {
        const unsubscribe = Firebase.app().firestore().collection('chats').onSnapshot((snapshot) => 
            setChats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })) //pulling from firebase
            )
        );
        return unsubscribe;
    }, []);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerStyle: { backgroundColor: Colors.primary, fontSize: 25, fontFamily: "fira-sans" },
            headerTitleStyle: { color: Colors.white, fontSize: 25, fontFamily: "fira-sans" },
            headerTintColor: "white",
/*              headerLeft: () => (
            <View style={{ marginLeft: 20 }}>
                <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                    <Avatar rounded source={{ uri: Firebase.auth()?.currentUser?.photoURL }}/>
                </TouchableOpacity>
            </View>
            ), */ //button to log-out now needed rn
            headerRight: () => (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 40,
                    marginRight: 20,
                }}>
{/*                     <TouchableOpacity activeOpacity={0.5}>
                        <AntDesign name="camerao" size={24} color="black" />
                    </TouchableOpacity> */}
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("AddChat")} //button to create a new chat
                        activeOpacity={0.5}
                        >
                        <SimpleLineIcons name="pencil" size={24} color={Colors.white} />
                    </TouchableOpacity>
                </View>
            ),
        });
    }, [navigation]);

    const enterChat = (id, chatName) => {
        navigation.navigate('ChatScreen', {
            id,
            chatName,
        });
    }; //function to navigate with an id and chat name

    return(
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({id, data: { chatName }}) => (
                    <CustomListItem 
                        key={id} 
                        id={id} 
                        chatName={chatName} 
                        enterChat={enterChat}  
                    /> //sets up the list of conversations
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        height: "100%"
    }
});