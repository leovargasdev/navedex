import React from 'react';
import { Image, View, useWindowDimensions } from 'react-native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import LogoNavers from '../assets/logo.png';
import Home from '../pages/Home';
import Naver from '../pages/Naver';
import CreateNaver from '../pages/CreateNaver';
import EditNaver from '../pages/EditNaver';

import { useAuth } from '../hooks/auth';

const LogoTitle = () => (
  <Image style={{ resizeMode: 'contain', height: 32 }} source={LogoNavers} />
);

const StackNaver = createStackNavigator();

const MenuToggle = (navigation: any) => {
  return (
    <RectButton onPress={() => navigation.toggleDrawer()}>
      <Icon name="bars" color="#212121" size={24} />
    </RectButton>
  );
};

const MenuGoBack = (navigation: any) => {
  return (
    <RectButton onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" color="#424242" size={24} />
    </RectButton>
  );
};

const NaversNavigator = () => {
  return (
    <StackNaver.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { height: 80 },
        headerTitleAlign: 'center',
        headerTitle: () => LogoTitle(),
        headerLeftContainerStyle: {
          marginLeft: 16,
        },
      }}
    >
      <StackNaver.Screen
        name="Navers"
        component={Home}
        options={({ navigation }) => ({
          headerLeft: () => MenuToggle(navigation),
        })}
      />
      <StackNaver.Screen
        name="Naver"
        component={Naver}
        options={({ navigation }) => ({
          headerLeft: () => MenuGoBack(navigation),
        })}
      />
      <StackNaver.Screen
        name="CreateNaver"
        component={CreateNaver}
        options={({ navigation }) => ({
          headerLeft: () => MenuGoBack(navigation),
        })}
      />
      <StackNaver.Screen
        name="EditNaver"
        component={EditNaver}
        options={({ navigation }) => ({
          headerLeft: () => MenuGoBack(navigation),
        })}
      />
    </StackNaver.Navigator>
  );
};

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const { signOut } = useAuth();
  const dimensions = useWindowDimensions();

  return (
    <DrawerContentScrollView {...props} style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          height: dimensions.height,
        }}
      >
        <DrawerItem
          key="menu"
          onPress={() => props.navigation.toggleDrawer()}
          label={() => <Icon name="bars" color="#212121" size={24} />}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        <DrawerItemList {...props} />
        <DrawerItem
          key="signout"
          label="Sair"
          onPress={() => {
            props.navigation.toggleDrawer();
            signOut();
          }}
          labelStyle={{ fontSize: 25, color: '#212121' }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const AppRoutes: React.FC = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContent={({ ...props }) => <CustomDrawerContent {...props} />}
    drawerStyle={{
      flex: 1,
      backgroundColor: '#FFF',
    }}
    drawerContentOptions={{
      activeBackgroundColor: '#fff',
      activeTintColor: '#212121',
      labelStyle: {
        fontSize: 25,
      },
    }}
  >
    <Drawer.Screen name="Navers" component={NaversNavigator} />
  </Drawer.Navigator>
);

export default AppRoutes;
