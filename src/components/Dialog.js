import * as React from "react";
import { Dialog, Portal, Text , Provider} from "react-native-paper";

const Dialogue = () => {
  const [visible, setVisible] = React.useState(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Content>
            <Text variant="bodyMedium">This is simple dialog</Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Provider>
  );
};

export default Dialogue;
