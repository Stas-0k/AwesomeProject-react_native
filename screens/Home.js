import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import PostsScreen from './PostsScreen'
import CreatePostsScreen from './CreatePostsScreen'
import ProfileScreen from './ProfileScreen'


const Tabs = createBottomTabNavigator();

export default function Home() {
    return (       
        <Tabs.Navigator screenOptions={({ route }) => {
            tabBarIcon: ({ focused, color, size }) => {
                let iconName

                if (route.name === "CreatePosts") {
                    iconName = focused ? "ios-information-circle" : "ios-information-circle-outline"
                } else if (route.name === "Profile") {
                     iconName = focused ? "ios-list-box" : "ios-list"
                }
                return <Ionicons name={iconName} size={size} color={color}/>
            }
        }}>
            <Tabs.Screen name="Posts" component={PostsScreen} />
            <Tabs.Screen name="CreatePosts" component={CreatePostsScreen} />
            <Tabs.Screen name="Profile" component={ProfileScreen} />
            
            </Tabs.Navigator>    
    )
}