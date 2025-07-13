import { View, Text, StyleSheet,Alert } from 'react-native';
import Title from '../components/ui/Title';
import { useState ,useEffect } from 'react';
import Number from '../components/game/Number';
import PrimaryButton from '../components/ui/PrimaryButton';
// import Card from '../components/ui/card';
import {Ionicons} from '@expo/vector-icons';

function generaterandomebetween (min,max,exclude){
  const rndNum =Math.floor(Math.random()* (max-min))+min;
  if(rndNum==exclude){
    return generaterandomebetween (min,max,exclude)
  }
  else{
    return rndNum;
  }
}

let minBoundry=1;
let maxBoundry=100;

function GameScreen({ userNumber, onGameOver, setRoundsNumber }) {
  const initialGuess = generaterandomebetween(1, 100, userNumber);
  const [currentGuess, setCureentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState(1);

  useEffect(() => {
    if (currentGuess === userNumber) {
      setRoundsNumber(guessRounds); 
      onGameOver();
    }
  }, [currentGuess, userNumber, onGameOver, guessRounds, setRoundsNumber]);

  function nextguess(direction) {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    const nextRndNumber = generaterandomebetween(minBoundry, maxBoundry, currentGuess);
    setCureentGuess(nextRndNumber);
    setGuessRounds((prev) => prev + 1); 
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Number>{currentGuess}</Number>
      <View style={styles.card}>
        <Text style={styles.numberinput}>Higher or lower?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextguess.bind(this, 'lower')}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextguess.bind(this, 'greater')}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
      {/* <View> LOG ROUNDS </View> */}
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,

  },
  numberinput: {
        fontFamily:'open-sans-bold',

    fontSize: 22,
    borderBottomColor: '#ddb52f',
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom:22,

  },
    card: {
          fontFamily:'open-sans-bold',

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: '#3b021f',
    elevation: 6,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    
  },
    buttonsContainer: {
    flexDirection: 'row',
    
  },
  buttonContainer: {
    flex: 1,
    marginBottom:12
  },
});


