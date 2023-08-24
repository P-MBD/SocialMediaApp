import {StyleSheet} from 'react-native';
const style = StyleSheet.create({
name:{
    fontFamily:'Inter',
    fontWeight:'500',
    fontSize:16,
    lineHeight:19
},
location:{
    fontFamily:'Inter',
    fontWeight:'400',
    fontSize:12,
    lineHeight:15,
    color:'#79869F',
},
userInformation:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
},
userPostInformation:{
    marginLeft:10,

},
image:{
    borderWidth:1,
    borderColor:'#F35BAC',
    borderRadius:50,
    padding:3,
},
userInformationContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
}
});
export default style;