import React from 'react';
import {SafeAreaView, Text, ScrollView,View, Pressable} from 'react-native';
import Title from './components/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main'
const App = () => {
  return (
    <SafeAreaView>
        <ScrollView>
           <View style={style.header}>
             <Title title={"Lets Explore"} />
             <Pressable style={style.messageIcon}>
                 <FontAwesomeIcon icon={faEnvelope} color='#CACDDE' size={20} />
                 <View style={style.messageNumberContainer}>
                     <Text style={{fontSize:6,fontFamily: 'Inter',fontWeight: '600',lineHeight:7,color:'#FFFFFF'}} >2</Text>
                 </View>
                 
             </Pressable>
             
           </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default App;