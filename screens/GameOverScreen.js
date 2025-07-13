import { View, Text, StyleSheet, Image } from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({ userNumber, roundsNumber, onStartNewGame }) {
  return (
    <View style={styles.contentContainer}>
      <Title style={styles.title}>Game Over!</Title>
      <Image
        source={require('../assets/Images/success.png')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.text}>Thanks for playing.</Text>
      <Text style={styles.summaryText}>
        Your phone took <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess number <Text style={styles.highlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ddb52f',
    marginBottom: 16,
    fontFamily: 'open-sans-bold',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  summaryText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 24,
    textAlign: 'center',
  },
  highlight: {
    color: '#ddb52f',
    fontWeight: 'bold',
    fontSize: 24,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 24,
    marginBottom: 24,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#ddb52f',
  },
});