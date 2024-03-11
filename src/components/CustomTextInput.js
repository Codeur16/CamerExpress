import React from "react";
import { View, TextInput } from "react-native-paper";
import { Width, Height } from "../utils/DimensionScreen";
export function CustomTextInput({
  mode,
  label,
  placeholder,
  right,
  value,
  onFocus,
  onPress,
  onChangeText,
  theme,
  styles,
}) {
  return (
    <View style={{ width: Width * 0.5, height: "auto" }}>
      <TextInput
        // style={styles}
        mode={mode}
        label={label}
        placeholder={placeholder}
        // right={right}
        // value={value}
        // onFocus={onFocus}
        // onPress={onPress}
        // onChangeText={onChangeText}
        // theme={theme}
      />
    </View>
  );
}
