import { Image, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Slot, Tabs, useNavigation } from "expo-router";
import { icons } from "../../constants";

const TabsLayout = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const TabIcon = ({
    icon,
    focused,
    color,
    name,
  }: {
    icon: any;
    focused: any;
    color: any;
    name: string;
  }) => {
    return (
      <View className="items-center justify-center gap-2">
        <Image
          source={icon}
          resizeMode="contain"
          tintColor={color}
          className="w-6 h-6"
        />
        <Text
          className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
          style={{ color: color }}
        >
          {name}
        </Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {
          backgroundColor: "#161622",
          borderTopWidth: 1,
          borderTopColor: "#232533",
          height: 84,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color }: any) => (
            <TabIcon
              icon={icons.home}
              focused={focused}
              color={color}
              name={"Home"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: "Bookmark",
          tabBarIcon: ({ focused, color }: any) => (
            <TabIcon
              icon={icons.bookmark}
              focused={focused}
              color={color}
              name={"Bookmark"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: "Create",
          tabBarIcon: ({ focused, color }: any) => (
            <TabIcon
              icon={icons.plus}
              focused={focused}
              color={color}
              name={"Create"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color }: any) => (
            <TabIcon
              icon={icons.profile}
              focused={focused}
              color={color}
              name={"Profile"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
