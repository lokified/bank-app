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

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
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
            title: "Balance"
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
    </NavigationContainer>
  );
}
