import * as React from "react";
import { StyleSheet } from "react-native";
import { Dialog, Portal, Text, Provider } from "react-native-paper";

const DialogBox = (visible) => {
  const hideDialog = () => setVisible(!visible);

  return (
    <Provider>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Icon icon="alert" />
          <Dialog.Title style={styles.title}>This is a title</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">This is simple dialog</Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Provider>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
  },
});

export default DialogBox;
