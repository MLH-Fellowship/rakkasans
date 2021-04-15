import AsyncStorage from "@react-native-async-storage/async-storage";

getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@user_data");
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

export default getData;
