import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Platform, Button, View, ImageSourcePropType } from 'react-native';
import CardStyles from '@/components/CardStyles';

type Wrestler = {
  name: string;
  image: ImageSourcePropType;
  height: number;
  weight: number;
  power: string;
  rank: number;
  favAttacks: string[];
};

const getPowerDetails = (power: string) => {
  switch (power.toLowerCase()) {
    case "max":
      return { borderColor: "black", emoji: "⬆️" };
    case "high":
      return { borderColor: "black", emoji: "⚡️" };
    case "medium":
      return { borderColor: "black", emoji: "👌🏻" };
    case "low":
      return { borderColor: "black", emoji: "👇🏻" };
    default:
      return { borderColor: "red", emoji: "❔" };
  }
};

const wrestlers: Wrestler[] = [
  {
    name: "John Cena",
    image: require('../assets/images/johnCena.png'),
    height: 170,
    weight: 93,
    power: "max",
    rank: 1,
    favAttacks: ["AAA", "Chock Slam", "Codebreaker"]
  },
  {
    name: "Randy Orton",
    image: require('../assets/images/randyOrtan.png'),
    height: 182,
    weight: 83,
    power: "max",
    rank: 2,
    favAttacks: ["dead Lock", "Chock Slam", "AAA"]
  },
  {
    name: "Roman Reigns",
    image: require('/home/apsal/Workspace/website/React_Native/WweCardGame/assets/images/RomanReigns.png'),
    height: 158,
    weight: 88,
    power: "max",
    rank: 3,
    favAttacks: ["Sphear", "Slam", "upper cut"]
  },
  {
    name: "Hulk",
    image: require('../assets/images/hulk.png'),
    height: 112,
    weight: 343,
    power: "medium",
    rank: 4,
    favAttacks: ["Slam", "Neck Kick", "deadLock"]
  },
  {
    name: "Kurt Angle",
    image: require('../assets/images/kurtAngle.png'),
    height: 196,
    weight: 118,
    power: "high",
    rank: 5,
    favAttacks: ["Rock Bottom", "People Elbow", "Samoan Drop"]
  },
  // {
  //   name: "Jeff Hardy",
  //   image: require('../assets/images/JeffHardy.png'),
  //   height: 188,
  //   weight: 102,
  //   power: "high",
  //   rank: 6,
  //   favAttacks: ["Stone Cold Stunner", "Elbow Drop", "Mudhrole Stomping"]
  // },
  {
    name: "Brock Lesnar",
    image: require('../assets/images/BrockLesnar.png'),
    height: 191,
    weight: 130,
    power: "max",
    rank: 7,
    favAttacks: ["F5", "Suplex City", "German Suplex"]
  },
  {
    name: "Rey Mesterio",
    image: require('../assets/images/ReyMysterio.png'),
    height: 191,
    weight: 116,
    power: "high",
    rank: 8,
    favAttacks: ["Pedigree", "Sledgehammer", "Spinebuster"]
  },
  {
    name: "Steve Bordan",
    image: require('../assets/images/SteveBordan.png'),
    height: 185,
    weight: 102,
    power: "medium",
    rank: 9,
    favAttacks: ["Sweet Chin Music", "Elbow Drop", "Superkick"]
  },
  {
    name: "Daniel Brain",
    image: require('../assets/images/DanielBrain.png'),
    height: 196,
    weight: 104,
    power: "medium",
    rank: 10,
    favAttacks: ["Spear", "RKO", "DDT"]
  }
]

function index() {
  const [currentValue, setCurrentValue] = useState<number>(0);

  const nextCard = () => {
    const randomIndex = Math.floor(Math.random() * wrestlers.length);
    setCurrentValue(randomIndex);
  };

  const { borderColor, emoji } = getPowerDetails(wrestlers[currentValue].power);

  return (
    <SafeAreaView style={styles.container}>
      <CardStyles {...wrestlers[currentValue]} borderColor={borderColor} emoji={emoji} />
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={nextCard} />
      </View>
    </SafeAreaView>
  );
}

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecd6d2",
    paddingTop: Platform.OS === "android" ? 20 : 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    marginTop: 20,
  }
});
