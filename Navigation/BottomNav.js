import { createBottomTabNavigator } from "react-navigation";

import AuthStack from "./AuthStack";
import CoffeeStack from "./CoffeeStack";
import OrderStack from "./OrderStack";
import React from "react";
import { Icon } from "native-base";
const BottomNav = createBottomTabNavigator(
  {
    Auth: AuthStack,
    Coffee: CoffeeStack,
    Order: OrderStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = "";
        let iconType = "";
        switch (routeName) {
          case "Auth":
            iconName = "account";
            iconType = "MaterialCommunityIcons";
            break;
          case "Coffee":
            iconName = "ios-cafe";
            iconType = "Ionicons";
            break;
          case "Order":
            iconName = "ios-cart";
            iconType = "Ionicons";
            break;
          default:
            iconName = "account";
            iconType = "MaterialCommunityIcons";
        }
        return (
          <Icon name={iconName} type={iconType} style={{ color: tintColor }} />
        );
      }
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "white",
      inactiveTintColor: "black",
      style: {
        backgroundColor: "rgb(20,90,100)"
      }
    }
  }
);

export default BottomNav;
