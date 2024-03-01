import {
  View,
  Text,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {appInfor} from '../contants/appInfos';
import {SpaceComponent} from '../components';
import {appColors} from '../contants/appColors';

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash-img.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      imageStyle={{flex: 1}}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{width: appInfor.sizes.WIDTH * 0.7, resizeMode: 'contain'}}
      />
      <SpaceComponent height={16} />
      <ActivityIndicator size={22} color={appColors.primary} />
    </ImageBackground>
  );
};

export default SplashScreen;
