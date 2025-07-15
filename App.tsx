import '@expo/metro-runtime'
import { StatusBar } from 'expo-status-bar';
import { Easing, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/screens/Home';
import Food from '@/screens/Food';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import Care from './screens/Care';
import Cobis from './screens/Cobis';
import Health from './screens/Health';
import Hay from './screens/Hay';
import Cage from './screens/Cage';

export type RootStackParamList = {
  Home: undefined;
  Alimentacion: undefined;
  Henos: undefined;
  Salud: undefined;
  Recintos: undefined;
  Cuidados: undefined;
  Razas: undefined;
};

enableScreens();

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            transitionSpec: {
              open: { animation: 'timing', config: { duration: 160, easing: Easing.out(Easing.ease) } },
              close: { animation: 'timing', config: { duration: 160, easing: Easing.out(Easing.ease) } }
            }
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Alimentacion" component={Food} />
          <Stack.Screen name="Henos" component={Hay} />
          <Stack.Screen name="Cuidados" component={Care} />
          <Stack.Screen name="Razas" component={Cobis} />
          <Stack.Screen name="Salud" component={Health} />
          <Stack.Screen name="Recintos" component={Cage} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
