import React,{useState} from 'react';
import {SafeAreaView, Text, ScrollView,View, Pressable, FlatList} from 'react-native';
import Title from './components/Title/Title';
import UserStory from './components/UserStory/UserStory';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import style from './assets/styles/main'
const App = () => {
  //All of items in our stories
  const data = [
    {
      firstName: 'Joseph',
      id: 1,
    },
    {
      firstName: 'Angel',
      id: 2,
    },
    {
      firstName: 'White',
      id: 3,
    },
    {
      firstName: 'Olivier',
      id: 4,
    },
    {
      firstName: 'Nata',
      id: 5,
    },
    {
      firstName: 'Adam',
      id: 6,
    },
    {
      firstName: 'Sean',
      id: 7,
    },
    {
      firstName: 'Nicolas',
      id: 8,
    },
    {
      firstName: 'Frederic',
      id: 9,
    },
  ];
const pageSize=4;
const [pageNumber, setPageNumber] = useState(1);
const [isLoading, setIsLoading] = useState(false);
const [renderData,setRenderData]= useState([]);
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
           <View style={style.userStoryContainer}>
              <FlatList   showsHorizontalScrollIndicator={false} horizontal={true} data={data}  renderItem={({item}) => <UserStory firstName={item.firstName} />}/>
           </View>
        </ScrollView>
    </SafeAreaView>
  );
};

export default App;