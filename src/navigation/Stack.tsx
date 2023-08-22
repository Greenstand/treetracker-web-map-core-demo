import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import AuthContext from "../context/AuthContext";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import SplashScreen from "../screens/SplashScreen";
import NotificationScreen from "../screens/NotificationScreen";

type AuthStackParams = {
  Home: undefined;
  SignIn: undefined;
  Notification: undefined;
};

const StackNavigation = createStackNavigator<AuthStackParams>();

type State = {
  isLoading: boolean;
  isSignout: boolean;
  userToken: undefined | string;
};

type Action =
  | { type: "RESTORE_TOKEN"; token: undefined | string }
  | { type: "SIGN_IN"; token: string }
  | { type: "SIGN_OUT" };

export default function MyStack() {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: undefined,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: undefined,
    },
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "RESTORE_TOKEN", token: undefined });
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const isSignedIn = state.userToken !== undefined;

  const authContext = React.useMemo(
    () => ({
      isSignedIn,
      signIn: () => dispatch({ type: "SIGN_IN", token: "dummy-auth-token" }),
      signOut: () => dispatch({ type: "SIGN_OUT" }),
    }),
    [isSignedIn],
  );

  if (state.isLoading) {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <StackNavigation.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isSignedIn ? (
          <StackNavigation.Screen
            name="SignIn"
            options={{
              title: "Sign in",
              animationTypeForReplace: state.isSignout ? "pop" : "push",
            }}
            component={SignInScreen}
          />
        ) : (
          <>
            <StackNavigation.Screen name="Home" component={HomeScreen} />
            <StackNavigation.Screen name="Notification" component={NotificationScreen} />
          </>

        )}
      </StackNavigation.Navigator>
    </AuthContext.Provider>
  );
}
