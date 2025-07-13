import { StyleSheet, ImageBackground } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen'; 
import GameOverScreen from './screens/GameOverScreen'; 
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect, Callback } from 'react';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [roundsNumber, setRoundsNumber] = useState(0);

  const [fontsLoaded] = useFonts({
    'Open-Sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'Open-Sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  useEffect(() => {
    async function hideSplash() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplash();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    SplashScreen.preventAutoHideAsync();
    return null;
  }

  function pickedNumberHandler(pickNumber) {
    setUserNumber(pickNumber);
    setGameIsOver(false);
  }
  function gameover() {
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onpicknumber={pickedNumberHandler} />;
  if (userNumber && !gameIsOver) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        onGameOver={gameover}
        setRoundsNumber={setRoundsNumber}
      />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundsNumber={roundsNumber}
        onStartNewGame={() => {
          setUserNumber(null);
          setGameIsOver(false);
          setRoundsNumber(0);
        }}
      />
    );
  }

  return (
    <LinearGradient colors={['#4e0329', '#ddb52f']} style={styles.rootscreen}>
      <ImageBackground
        source={require('./assets/Images/background.png')}
        resizeMode="cover"
        style={styles.rootscreen}
        imageStyle={styles.backgroundimage}
      >
        <SafeAreaView style={styles.rootscreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootscreen: {
    flex: 1,
  },
  backgroundimage: {
    opacity: 0.15,
  },
});