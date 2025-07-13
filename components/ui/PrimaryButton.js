import { View, Text ,Pressable ,StyleSheet} from 'react-native';

function PrimaryButton({ children,onPress }) {

  return (
  <View style={style.buttonoutercontainer}>
   
    <Pressable style={({pressed})=> pressed ? [style.buttoninnercontainer,style.pressed] : style.buttoninnercontainer}
     onPress={onPress}
      android_ripple={{color:'#640233'}}> 
      
      <Text style={style.buttonText}>{children}</Text>

    </Pressable>
       </View>
  );
}

export default PrimaryButton;
const style = StyleSheet.create({
buttoninnercontainer:{
      backgroundColor:'#72063c',
      borderRadius:28,
      paddingVertical:8,
      paddingHorizontal:16,
      elevation:2,

},
buttonoutercontainer:{
  borderRadius:28,
  margin:4,
  overflow:'hidden',
},
buttonText:{
  color:'white',
  textAlign:'center',
},
pressed:{
opacity:0.75,

},
});