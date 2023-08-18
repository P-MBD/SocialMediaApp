import { StyleSheet } from "react-native";
const style = StyleSheet.create({
    header:{
            paddingTop:30,
            paddingRight:26,
            paddingLeft:17,
            flex:1, 
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'     
    },
    messageIcon:{
        backgroundColor:'#F9FAFB',
        padding:12,
        borderRadius:100,
    },
    messageNumberContainer:{
        width:10,
        height:10,
        backgroundColor:'#F35BAC',
        borderRadius:10, 
        flex:1,
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center',
       position:'absolute',
       right:7,
       top:10,
       },
       userStoryContainer:{
        paddingHorizontal:28,
        marginTop:12,
        
       }
})
export default style;