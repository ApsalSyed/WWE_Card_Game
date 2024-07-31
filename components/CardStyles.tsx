import React from 'react';
import { Text, View, StyleSheet, Platform, Image, ImageSourcePropType } from 'react-native';

interface Props {
  name: string;
  image: ImageSourcePropType;
  height: number;
  power: string;
  weight: number;
  rank: number;
  favAttacks: string[];
  borderColor: string;
  emoji: string;
}

const CardStyles: React.FC<Props> = ({
  name,
  image,
  height,
  weight,
  power,
  rank,
  favAttacks,
  emoji,
  borderColor
}) => {
  return (
    <View style={[styles.card, { borderColor }]}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.rank}>Rank: {rank}</Text>
      </View>

      <Image
        source={image}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.emojiPowerContainer}>
        <Text style={styles.text}>Power: {power}</Text>
        <Text style={styles.emoji}>{emoji}</Text>
      </View>

      <View style={styles.heightWeightContainer}>
        <Text><Text style={styles.boldText}>Height:</Text> {height} cm</Text>
        <Text><Text style={styles.boldText}>Weight:</Text> {weight} kg</Text>
      </View>

      {/* <View style={styles.favAttContainer}> */}
      <View>
        <Text style={styles.favAttText}>
          <Text style={styles.boldText}>Fav Att:</Text> {favAttacks.join(", ")}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0d29e",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "gray",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      }
    })
  },
  nameContainer: {
    // flexDirection: "row",
    // justifyContent: "space-between",
    marginBottom: 32,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold"
  },
  rank: {
    fontSize: 32,
  },
  image: {
       width: 250,
    height: 250,
    marginBottom: 16,
  },
  emojiPowerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
  emoji: {
    fontSize: 20
  },
  text: {
    fontSize: 20,
    fontWeight: "500"
  },
  heightWeightContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16
  },
  boldText: {
    fontWeight: "bold"
  },
//   favAttContainer: {
//     alignItems: "center",
//   },
  favAttText: {
    borderColor: "#a64446",
    borderWidth: 1,
    padding: 4,
    backgroundColor:'#e4c8c8',
    width:'100%',
    textAlign:"center"
  },
});

export default CardStyles;
