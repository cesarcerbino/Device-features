import * as Location from "expo-location";

import { Button, StyleSheet, Text, View } from "react-native";
import { Cmodal, Note } from "./components/index";
import { useEffect, useState } from "react";

import COLORS from "./constants/colors";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [location, setLocation] = useState([]);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("hola");
        setErrorMsg("permision denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(JSON.stringify(location.coords));
    })();
  }, []);

  const handleGranted = () => {
    async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("hola");
        setErrorMsg("permision denied");
        return;
      }
    };
  };

  const ShowLocation = () => {
    if (errorMsg !== null) {
      return <Text>Datos de gps: {location}</Text>;
    }
    return <Cmodal handleGranted={handleGranted} />;
  };

  return <View style={styles.container}>{ShowLocation()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.Background,
  },
});
