import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/components/screensMard/home";
import sehroza from "./src/components/screensMard/sehroza";
import chilla from "./src/components/screensMard/chilla";
import charMahiny from "./src/components/screensMard/charMahiny";
import sathMahiny from "./src/components/screensMard/sathMahiny";
import saalAndroon from "./src/components/screensMard/saalAndroon";
import ijtima from "./src/components/screensMard/ijtima";
import teenDin from "./src/components/screensMastoraat/teenDin";
import pandraDin from "./src/components/screensMastoraat/pandraDin";
import chalisDin from "./src/components/screensMastoraat/chalisDin";
import teenMahinyBeroon from "./src/components/screensMastoraat/teenMahinyBeroon";
import Login from "./src/auth/login";

import ViewSaalAndroon from "./src/components/screensMardData/viewSaalAndroon";
import SplashScreen from "./src/components/splashScreen";
import AdminScreen from "./src/auth/admin";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Splash"
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AdminScreen"
            component={AdminScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Sehroza"
            component={sehroza}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Ijtima"
            component={ijtima}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Chilla"
            component={chilla}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CharMahinay"
            component={charMahiny}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SathMahinay"
            component={sathMahiny}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SaalAndroon"
            component={saalAndroon}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TeenDin"
            component={teenDin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="PandraDin"
            component={pandraDin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChalisDin"
            component={chalisDin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TeenMahinayBeroon"
            component={teenMahinyBeroon}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ViewSaalAndroon"
            component={ViewSaalAndroon}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
