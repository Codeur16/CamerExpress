import React, { useRef } from "react";
import { View, Button } from "react-native";
import QRCode from "react-native-qrcode-svg";
import ViewShot from "react-native-view-shot";
// import RNFS from "react-native-fs";

const QRCodeGenerator = ({ setUri, codeReservation, capture }) => {
  const viewShotRef = useRef(null);

  const captureQRCode = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      setUri(uri);
      console.log("Image captured:", uri);
      // Enregistrement de l'image localement
      // const path = `${RNFS.DocumentDirectoryPath}/QRCode.png`;
      // await RNFS.moveFile(uri, path);
      // console.log("Image saved at:", path);
    } catch (error) {
      console.error("Error capturing image:", error);
    }
  };

  return (
    <View>
      <ViewShot ref={viewShotRef} options={{ format: "png", quality: 1 }}>
        <QRCode value={codeReservation} />
      </ViewShot>
      <Button title="Capture QR Code" onPress={captureQRCode} />
    </View>
  );
};

export default QRCodeGenerator;
