import COLORS from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    backgroundColor: COLORS.Secondary,
    width: 320,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  tittle: {
    fontWeight: "500",
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
  },
  buttonContainer: {
    marginVertical: 14,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
