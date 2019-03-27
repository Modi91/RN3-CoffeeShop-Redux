import { createStackNavigator, createAppContainer } from "react-navigation";

import Profile from "../Components/Profile";
import Login from "../Components/Login";
import CoffeeList from "../Components/CoffeeList";

const AuthStack = createStackNavigator(
  {
    Profile: Profile,
    Login: Login,
    CoffeeList: CoffeeList
  },
  {
    initialRouteName: "Login",
    cardStyle: {
      backgroundColor: "rgb(20,90,100)"
    },
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "rgb(20,90,100)"
      },
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerTintColor: "white"
    }
  }
);

export default AuthStack;
