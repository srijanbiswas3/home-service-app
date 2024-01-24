
import { View, StatusBar, Text, Button, SafeAreaView } from 'react-native';
import Login from './App/Screen/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import * as SecureStore from "expo-secure-store";
import TabNavigation from './App/Navigations/TabNavigation';
import Colors from './App/Utils/Colors';
import 'react-native-gesture-handler';


const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_ZXhhY3QtbWFybW9zZXQtODUuY2xlcmsuYWNjb3VudHMuZGV2JA">

      <SafeAreaView className="flex-1" >
        <StatusBar
          animated={true}
          backgroundColor={Colors.PRIMARY}
          hidden={false}
        />

        <SignedIn >
          <TabNavigation />
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>

  );
}


