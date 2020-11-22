import * as React from "react";
import { StatusBar, View } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import IcomoonConfig from "./assets/icomoon/selection.json";
import MyIcon from "./assets/icomoon/iconConfig";

import Colors from "./constants/Colors";
import HubTab from "./tabs/HubTab";
import NewsTab from "./tabs/NewsTab";
import CmdTab from "./tabs/CmdTab";
import GameTab from "./tabs/GameTab";
import AccountTab from "./tabs/AccountTab";

// hub screens
import BattScreen from "./tabs/hubScreens/BattScreen";
import MapScreen from "./tabs/hubScreens/MapScreen";
import ForumsScreen from "./tabs/hubScreens/ForumScreen";
import ResourcesScreen from "./tabs/hubScreens/ResourcesScreen";
import HistoryScreen from "./tabs/hubScreens/HistoryScreen";
import SchoolsScreen from "./tabs/hubScreens/SchoolsScreen";
import HandbookScreen from "./tabs/hubScreens/HandbookScreen";
import ProcessingScreen from "./tabs/hubScreens/ProcessingScreen";
import InProcessing from "./tabs/hubScreens/InProcessing";
import OutProcessing from "./tabs/hubScreens/OutProcessing";
import RakFitScreen from "./tabs/hubScreens/RakFitScreen";
import BattUnitScreen from "./tabs/hubScreens/BattUnitScreen";
import BattHHCScreen from "./tabs/hubScreens/BattHHCScreen";
import BattShopListScreen from "./tabs/hubScreens/BattShopListScreen";
import BattShopScreen from "./tabs/hubScreens/BattShopScreen";
import CallRosterScreen from "./tabs/hubScreens/CallRosterScreen";
import ResourcePageScreen from "./tabs/hubScreens/ResourcePageScreen";
import SchoolsPageScreen from "./tabs/hubScreens/SchoolsPageScreen";
import MoH from "./tabs/hubScreens/MoHScreen";
import FallenScreen from "./tabs/hubScreens/FallenScreen";
import LineageHonorsScreen from "./tabs/hubScreens/LineageHonorsScreen";
import NotableEventsScreen from "./tabs/hubScreens/NotableEventsScreen";

// cmd screens
import OffLimitsScreen from "./tabs/cmdScreens/OffLimitsScreen";
import PolicyLettersScreen from "./tabs/cmdScreens/PolicyLettersScreen";
import VisionScreen from "./tabs/cmdScreens/VisionScreen";
import WelcomeLetterScreen from "./tabs/cmdScreens/WelcomeLetterScreen";

//other screens
import WelcomeScreen from "./tabs/otherScreens/WelcomeScreen";
import NewsScreen from "./tabs/otherScreens/NewsScreen";
import Topics from "./tabs/otherScreens/Topics";
import Posts from "./tabs/otherScreens/Posts";
import NewPost from "./tabs/otherScreens/NewPost";
import ChatRoom from "./tabs/otherScreens/ChatRoom";
import Comments from "./tabs/otherScreens/Comments";
import NewComment from "./tabs/otherScreens/NewComment";
import PostDetail from "./tabs/otherScreens/PostDetail";
import PostReply from "./tabs/otherScreens/PostReply";
// authentication screens
import Login from "./tabs/Login";
import LogOut from "./tabs/LogOut";
import SignUp from "./tabs/SignUp";
import SplashScreen from "./tabs/SplashScreen";

const HubStack = createStackNavigator();
function HubStackScreen() {
  return (
    <HubStack.Navigator
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: { fontSize: 25, fontFamily: "fira-sans" },
      }}
    >
      <HubStack.Screen
        name="Hub"
        component={HubTab}
        options={{ headerLeft: null }}
      />
      <HubStack.Screen name="KMZ Map" component={MapScreen} />
      <HubStack.Screen name="Battalions" component={BattScreen} />
      <HubStack.Screen name="RAK History" component={HistoryScreen} />
      <HubStack.Screen name="Bluebook" component={HandbookScreen} />
      <HubStack.Screen name="Training & Schools" component={SchoolsScreen} />
      <HubStack.Screen name="School" component={SchoolsPageScreen} />
      <HubStack.Screen name="In/Out Processing" component={ProcessingScreen} />
      <HubStack.Screen name="In Processing" component={InProcessing} />
      <HubStack.Screen name="Out Processing" component={OutProcessing} />
      <HubStack.Screen name="Forum" component={ForumsScreen} />
      <HubStack.Screen name="Army Resources" component={ResourcesScreen} />
      <HubStack.Screen name="RAKFIT" component={RakFitScreen} />
      <HubStack.Screen name="Battalion" component={BattUnitScreen} />
      <HubStack.Screen
        name="HHC"
        component={BattHHCScreen}
        options={{ title: "HHC" }}
      />
      <HubStack.Screen name="Batt Shop List" component={BattShopListScreen} />
      <HubStack.Screen name="Batt Shop" component={BattShopScreen} />
      <HubStack.Screen name="Call Roster" component={CallRosterScreen} />
      <HubStack.Screen name="Resource" component={ResourcePageScreen} />
      <HubStack.Screen name="Chat Room" component={ChatRoom} />
      <HubStack.Screen name="Topics" component={Topics} />
      <HubStack.Screen name="Posts" component={Posts} />
      <HubStack.Screen name="New Post" component={NewPost} />
      <HubStack.Screen name="Comments" component={Comments} />
      <HubStack.Screen name="New Comment" component={NewComment} />
      <HubStack.Screen name="Post Detail" component={PostDetail} />
      <HubStack.Screen name="Reply Post" component={PostReply} />
      <HubStack.Screen name="MoH" component={MoH} />
      <HubStack.Screen name="Lineage Honors" component={LineageHonorsScreen} />
      <HubStack.Screen name="Fallen Rakkasans" component={FallenScreen} />
      <HubStack.Screen name="Notable Events" component={NotableEventsScreen} />
    </HubStack.Navigator>
  );
}
const NewsStack = createStackNavigator();
function NewsStackScreen() {
  return (
    <NewsStack.Navigator
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: { fontSize: 25, fontFamily: "fira-sans" },
      }}
    >
      <NewsStack.Screen
        name="News"
        component={NewsTab}
        options={{ headerLeft: null }}
      />
      <NewsStack.Screen name="News Article" component={NewsScreen} />
    </NewsStack.Navigator>
  );
}
const CommandStack = createStackNavigator();
function CommandStackScreen() {
  return (
    <CommandStack.Navigator
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: { fontSize: 25, fontFamily: "fira-sans" },
      }}
    >
      <CommandStack.Screen
        name="Command"
        component={CmdTab}
        options={{ headerLeft: null }}
      />
      <CommandStack.Screen name="Welcome" component={WelcomeScreen} />
      <CommandStack.Screen
        name="Welcome Letter"
        component={WelcomeLetterScreen}
      />
      <CommandStack.Screen name="Commanders' Vision" component={VisionScreen} />
      <CommandStack.Screen
        name="Policy Letters"
        component={PolicyLettersScreen}
      />
      <CommandStack.Screen
        name="Off Limits Establishments"
        component={OffLimitsScreen}
      />
    </CommandStack.Navigator>
  );
}
const GameStack = createStackNavigator();
function GameStackScreen() {
  return (
    <GameStack.Navigator
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: { fontSize: 25, fontFamily: "fira-sans" },
      }}
    >
      <GameStack.Screen
        name="RAK Runner"
        component={GameTab}
        options={{ headerLeft: null }}
      />
    </GameStack.Navigator>
  );
}
const AccountStack = createStackNavigator();
function AccountStackScreen() {
  return (
    <AccountStack.Navigator
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: Colors.white,
        headerTitleStyle: { fontSize: 25, fontFamily: "fira-sans" },
      }}
    >
      <AccountStack.Screen
        name="Account"
        component={AccountTab}
        options={{ headerLeft: null }}
      />
      <AccountStack.Screen name="Log Out" component={LogOut} />
    </AccountStack.Navigator>
  );
}
/*
const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return (
    
  );
}
      <Stack.Screen name="Account" component={AccountTab} />
      <Stack.Screen name="Log Out" component={LogOut} />
*/

const Tab = createBottomTabNavigator();
function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Hub"
      lazy={false}
      tabBarOptions={{
        style: {
          backgroundColor: Colors.primary,
          paddingTop: 7,
        },
        labelStyle: {
          fontSize: 12,
          fontFamily: "fira-sans",
          textAlign: "center",
          top: "5%",
        },
        activeTintColor: Colors.accent,
        inactiveTintColor: Colors.lightGray,
        headerLeft: null,
        headerBackTitleVisible: false,
      }}
      /*
        
  tabBarOptions={((activeTintColor = Colors.accent),
  (inactiveTintColor = Colors.lightGray))(
    (activeBackgroundColor = { Colors }.primary)
  )}
  */
    >
      <Tab.Screen
        name="News"
        component={NewsStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="earth" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Command"
        component={CommandStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-group"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hub"
        component={HubStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MyIcon
              name="cutOutTori"
              color={color}
              size={26}
              config={IcomoonConfig}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Runner"
        component={GameStackScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="run" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountStackScreen}
        options={{
          tabBarColor: Colors.primary,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{
        headerShown: false,
        headerLeft: null,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={
          ({ title: "SplashScreen" },
          { headerLeft: null },
          { headerBackTitleVisible: false })
        }
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={
          ({ title: "Login" },
          { headerLeft: null },
          { headerBackTitleVisible: false })
        }
      />
      <Stack.Screen
        name="Tab Bar"
        component={TabBar}
        options={
          ({ title: "Tab Bar" },
          { headerLeft: null },
          { headerBackTitleVisible: false })
        }
      />
    </Stack.Navigator>
  );
}
