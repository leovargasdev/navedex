import * as React from 'react';
import { Button, View, Image } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import LogoNavers from '../assets/logo.png';
import Home from '../pages/Home';
import Naver from '../pages/Naver';
// import CreateNaver from '../pages/CreateNaver';
// import EditNaver from '../pages/EditNaver';

function NotificationsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => {}} title="Go back home" />
    </View>
  );
}

// const ButtonToggleMenu = ({}) => (
//   <RectButton onPress={() => {}}>
//     <Icon name="bars" color="#424242" size={24} />
//   </RectButton>
// );

const LogoTitle = () => (
  <Image style={{ resizeMode: 'contain', height: 32 }} source={LogoNavers} />
);

const StackNaver = createStackNavigator();

const NaversNavigator = () => {
  return (
    <StackNaver.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { height: 80 },
        headerTitleAlign: 'center',
        headerTitle: props => <LogoTitle {...props} />,
        headerLeftContainerStyle: {
          marginLeft: 16,
        },
      }}
    >
      <StackNaver.Screen
        name="Navers"
        component={Home}
        options={({ navigation }) => ({
          headerLeft: () => (
            <RectButton onPress={() => navigation.toggleDrawer()}>
              <Icon name="bars" color="#424242" size={24} />
            </RectButton>
          ),
        })}
      />
      <StackNaver.Screen
        name="Naver"
        component={Naver}
        options={({ navigation }) => ({
          headerLeft: () => (
            <RectButton onPress={() => navigation.goBack()}>
              <Icon name="chevron-left" color="#424242" size={24} />
            </RectButton>
          ),
        })}
      />
      {/* <StackNaver.Screen name="CreateNaver" component={CreateNaver} />
      <StackNaver.Screen name="EditNaver" component={EditNaver} /> */}
    </StackNaver.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Navers" component={NaversNavigator} />
      <Drawer.Screen name="Sair" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default App;
