import { StyleSheet, Text, View } from "react-native";
import {
  SafeAreaInsetsContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/components/home";
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
import view7MahinayBeroon from "./src/components/screensMardData/view7MahinayBeroon";
import form from "./src/components/addDataForm/form";
import ViewCharMahinay from "./src/components/screensMardData/viewCharMahinay";
import ViewChillahData from "./src/components/screensMardData/ViewChillaData";
import ViewIjtimaData from "./src/components/screensMardData/ViewIjtimaData";
import ViewSehrozaData from "./src/components/screensMardData/ViewSehroza";
import ViewTeenDin from "./src/components/screensMastoraatData/ViewTeenDin";

import ViewChalisDin from "./src/components/screensMastoraatData/ViewChalisDin";
import ViewTeenMahinay from "./src/components/screensMastoraatData/ViewTeenMahinay";
import Signup from "./src/auth/SignUp";
import ViewPandraDin from "./src/components/screensMastoraatData/ViewPandraDin"

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
          <Stack.Screen name="SignUp" component={Signup} />
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
            name="form"
            component={form}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ViewSaalAndroon"
            component={ViewSaalAndroon}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="view7MahinayBeroon"
            component={view7MahinayBeroon}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="viewCharMahinay"
            component={ViewCharMahinay}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="viewChilla"
            component={ViewChillahData}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="viewIjtima"
            component={ViewIjtimaData}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="viewSehroza"
            component={ViewSehrozaData}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="viewTeenDin"
            component={ViewTeenDin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="viewPandraDin"
            component={ViewPandraDin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="viewChalisDin"
            component={ViewChalisDin}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="viewTeenMahinay"
            component={ViewTeenMahinay}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
