import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";

import SignUp from "./pages/Sign/SignUp";
import SignIn from "./pages/Sign/SignIn";

import Main from "./pages/App/Main";
import Profile from "./pages/App/Profile";

const Routes = createAppContainer(
  createSwitchNavigator({
    SignUp,
    SignIn,
    Main,
    Profile
  })
);

export default Routes;
