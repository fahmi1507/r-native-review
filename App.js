import React, { useState } from "react";
import Home from "./screens/Home";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Navigator from "./routes/homeStack";
import DrawerNavigator from "./routes/drawer";

const customFonts = {
  "nunito-reg": require("./assets/fonts/Nunito-Regular.ttf"),
  "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
};

const getFonts = () => Font.loadAsync(customFonts);

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return <AppLoading onError={console.warn} startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />;
  }

  // return <Home />;
}
