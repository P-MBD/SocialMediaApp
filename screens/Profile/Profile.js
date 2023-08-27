import React from 'react';
import {SafeAreaView, View, Text,ScrollView,Image} from 'react-native';

import globalStyle from '../../assets/styles/main';
import style from './style';

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView>
         <View style={style.profileImageContainer}>
              <Image source={require("../../assets/images/default-profile.png")} /> 
         </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;