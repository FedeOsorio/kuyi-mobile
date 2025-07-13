import { StatusBar } from 'expo-status-bar';
import { Easing, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '@/screens/Home';
import Food from '@/screens/Food';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

export type RootStackParamList = {
  Home: undefined;
  Alimentacion: undefined;
  Hay: undefined;
  Care: undefined;
  // Agregá acá las demás pantallas si tenés más
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
              open: {animation: 'timing', config: {duration: 170, easing: Easing.out(Easing.ease)}},
              close: {animation: 'timing', config: {duration: 170, easing: Easing.out(Easing.ease)}}
            }
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Alimentacion" component={Food} />
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
