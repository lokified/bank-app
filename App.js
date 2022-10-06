import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BalanceScreen from "./app/screens/BalanceScreen";
import ChangePinScreen from "./app/screens/ChangePinScreen";
import DashboardScreen from "./app/screens/DashboardScreen";
import DepositScreen from "./app/screens/DepositScreen";
import FinancialTipsScreen from "./app/screens/FinancialTipsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import StopChequeScreen from "./app/screens/StopChequeScreen";
import { Screens } from "./config/Screens";

import { useEffect, useState } from "react";
import Loader from "./app/components/Loader";

export default function App() {
  const Stack = createNativeStackNavigator();

  const [initialRouteName, setInitialRouteName] = useState("");

  useEffect(() => {
    setTimeout(authUser, 2000);
  }, []);

  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem("user");

      if (userData) {
        userData = JSON.parse(userData);

        if (userData?.loggedIn) {
          setInitialRouteName(Screens.DashboardScreen);
        } else {
          setInitialRouteName(Screens.LoginScreen);
        }
      } else {
        setInitialRouteName(Screens.LoginScreen);
      }
    } catch (error) {
      setInitialRouteName(Screens.LoginScreen);
    }
  };

  return (
    <NavigationContainer>
      {initialRouteName == "" ? (
        <Loader visible={true} />
      ) : (
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{
            headerShadowVisible: false,
          }}
        >
          <Stack.Screen
            name={Screens.LoginScreen}
            component={LoginScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name={Screens.RegisterScreen}
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={Screens.DashboardScreen}
            component={DashboardScreen}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name={Screens.BalanceScreen}
            component={BalanceScreen}
            options={{
              title: "Balance",
            }}
          />
          <Stack.Screen
            name={Screens.DepositScreen}
            component={DepositScreen}
            options={{
              title: "Deposit",
            }}
          />

          <Stack.Screen
            name={Screens.StopChequeScreen}
            component={StopChequeScreen}
            options={{
              title: "Stop Cheque",
            }}
          />
          <Stack.Screen
            name={Screens.ChangePinScreen}
            component={ChangePinScreen}
            options={{
              title: "Change Pin",
            }}
          />
          <Stack.Screen
            name={Screens.FinancialTipsScreen}
            component={FinancialTipsScreen}
            options={{
              title: "Financial Tips",
            }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
