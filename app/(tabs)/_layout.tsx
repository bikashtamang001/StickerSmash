import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"

export default function TabsLayout() {

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#0011ff",
                headerStyle: {
                    backgroundColor: "#25292e"
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                tabBarStyle:{
                    backgroundColor: "#25292e"
                }

            }}
        >

            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Home",
                    tabBarIcon: ({focused, color }) => (<Ionicons
                        name={focused ? "home-sharp" : "home-outline"}
                        color={color}
                        size={20}
                    />
                    ),
                }} />
            <Tabs.Screen
                name="about"
                options={{
                    headerTitle: "About",
                    tabBarIcon: ({focused, color }) => (<Ionicons
                        name={focused ? "information-circle" : "information-circle"}
                        color={color}
                        size={20}
                    />
                    ),
                }} />

        </Tabs>
    );
}
