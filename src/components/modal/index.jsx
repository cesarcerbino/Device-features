import { Button, Modal, Text, View } from "react-native";

import { BackHandler } from "react-native";
import COLORS from "../../constants/colors";
import React from "react";
import { styles } from "./styles";

const CustomModal = ({ handleGranted, modalVisible }) => {
  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        style={styles.modal}
        visible={modalVisible}
      >
        <View style={styles.container}>
          <View style={styles.modal}>
            <Text style={styles.tittle}>
              Si no otorga permisos de ubicacion la aplicacion no funcionara
            </Text>
            <Text style={styles.text}>¿Desea otorgar permisos?</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Otorgar"
                color={COLORS.primary}
                onPress={handleGranted}
              />
              <Button
                title="Denegar"
                color={COLORS.primary}
                onPress={BackHandler.exitApp}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CustomModal;
