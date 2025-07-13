import { View, StyleSheet } from "react-native";
function Card ({children}){
return     <View style={styles.inputContainer}>
</View>
}
export default Card ;
const styles= StyleSheet.create({
    card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#3b021f',
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },});