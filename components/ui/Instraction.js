import { Children } from "react";
import { Text,Stylesheet} from "react-native-web"
function   Instrction(Children){
    return  <Text style={styles.instrctionText}> {Children}</Text>
}
export default Instrction
const styles =Stylesheet.create({
      instrctionText:{
    color:'#ddb52f',
    fontSize:24,
  }
});