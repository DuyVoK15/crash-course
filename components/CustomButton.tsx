import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

interface IButton {
  title: string;
  handlePress?: () => void;
  containerStyles?: string;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton: React.FC<IButton> = (props) => {
  console.log(props.isLoading);
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${
        props.containerStyles
      } ${props.isLoading ? "opacity-50" : ""}`}
      disabled={props.isLoading}
    >
      {!props.isLoading ? (
        <Text
          className={`text-primary font-psemibold text-lg ${props.textStyles}`}
        >
          {props.title}
        </Text>
      ) : (
        <ActivityIndicator size={"large"} color={"rgb(22 22 34 / var(--tw-text-opacity))"} />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
