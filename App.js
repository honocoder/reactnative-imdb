import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default function App() {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("./assets/logo-imdb.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.majorInfos}>
          <Text style={styles.title}>Interstellar</Text>
          <View style={styles.yatg}>
            <Text style={styles.details}>2014</Text>
            <Text style={styles.details}>PG-13</Text>
            <Text style={styles.details}>2h 49min</Text>
            <Text style={styles.details}>Adventure, Drama, Sci-Fi</Text>
          </View>
          <View style={styles.picDescBtn}>
            <Image
              source={require("./assets/affiche-interstellar.jpg")}
              style={styles.affiche}
              resizeMode="contain"
            />
            <View style={styles.descBtn}>
              <Text style={styles.description}>
                A team of explorers travel through a wormhole in space in an
                attempt to ensure humanity's survival.
              </Text>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>+ Add to watchlist</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.icons}>
            <FontAwesome name="star" size={30} color="#EEBC1D" />
            <FontAwesome name="star-o" size={30} color="white" />
            <Text style={styles.metascore}>74</Text>
          </View>
          <View style={styles.iconsText}>
            <View style={styles.rates}>
              <Text style={styles.scoresText}>8.6/10</Text>
              <Text style={styles.scoresSubText}>1.1M</Text>
            </View>
            <Text style={styles.rateThisText}>Rate This</Text>
            <View style={styles.metascoreDetails}>
              <Text style={styles.metascoreText}>Metascore</Text>
              <Text style={styles.metascoreSubText}>46 critic reviews</Text>
            </View>
          </View>
        </View>
        <View style={styles.cast}>
          <View style={styles.castHeader}>
            <Text style={styles.castTitle}>Top Billed Cast</Text>
            <TouchableOpacity style={styles.castBtn}>
              <Text style={styles.castBtnText}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.castPics}>
            <View style={styles.castCard}>
              <Image
                source={require("./assets/Matthew-McConaughey.jpeg")}
                style={styles.actorPic}
                resizeMode="contain"
              />
              <Text style={styles.actorName}>Matthew McConaughey</Text>
              <Text style={styles.actorRole}>Cooper</Text>
            </View>
            <View style={styles.castCard}>
              <Image
                source={require("./assets/Anne-Hathaway.jpeg")}
                style={styles.actorPic}
                resizeMode="contain"
              />
              <Text style={styles.actorName}>Anne Hathaway</Text>
              <Text style={styles.actorRole}>Brand</Text>
            </View>
            <View style={styles.castCard}>
              <Image
                source={require("./assets/Jessica-Chastain-2.jpeg")}
                style={styles.actorPic}
                resizeMode="contain"
              />
              <Text style={styles.actorName}>Jessica Chastain</Text>
              <Text style={styles.actorRole}>Murph</Text>
            </View>
          </View>
          <View style={styles.direction}>
            <Text style={styles.castSubtitle}>Director</Text>
            <Text style={styles.castSubtitleInfos1}>Christopher Nolan</Text>
            <Text style={styles.castSubtitle}>Writers</Text>
            <Text style={styles.castSubtitleInfos2}>
              Jonathan Nolan (written by) and Christopher Nolan (written by)
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "column",
    backgroundColor: "#0F1410",
  },

  container: {
    flex: 1,
    backgroundColor: "#0F1410",
    paddingTop: Constants.statusBarHeight,
  },

  header: {
    backgroundColor: "#393939",
    height: "10%",
    width: "100%",
  },

  logo: {
    height: 70,
    width: 100,
    marginTop: 5,
    marginLeft: 15,
  },

  majorInfos: {
    backgroundColor: "#212121",
    height: "50%",
  },

  title: {
    color: "white",
    fontSize: 30,
    paddingTop: 10,
    paddingLeft: 10,
  },

  yatg: {
    width: "85%",
    paddingLeft: 8,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "space-around",
  },

  details: {
    color: "grey",
  },

  picDescBtn: {
    width: "90%",
    height: "50%",
    marginLeft: "5%",
    marginTop: 20,
    flexDirection: "row",
  },

  descBtn: {
    width: "75%",
    height: 130,
    marginTop: 35,
  },

  affiche: {
    height: "100%",
    width: "25%",
    marginLeft: 10,
  },

  description: {
    color: "white",
    width: "100%",
    marginTop: 0,
    marginLeft: 10,
  },

  btn: {
    backgroundColor: "#0177BD",
    borderRadius: 5,
    width: "80%",
    height: 30,
    marginLeft: 10,
    marginTop: 10,
  },

  btnText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "600",
    textAlign: "center",
    marginTop: 5,
  },

  icons: {
    height: "18%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "center",
  },

  metascore: {
    fontSize: 24,
    color: "white",
    backgroundColor: "#64C851",
    height: 28,
  },

  iconsText: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",

    alignSelf: "center",
    marginTop: -30,
  },

  rates: {
    marginLeft: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  scoresText: {
    color: "white",
    fontWeight: "700",
  },

  scoresSubText: {
    color: "grey",
  },

  rateThisText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "700",
    marginLeft: 40,
  },

  metascoreDetails: {
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  metascoreText: {
    color: "white",
    fontWeight: "700",
  },

  metascoreSubText: {
    color: "grey",
  },

  cast: {
    marginTop: 10,
    backgroundColor: "#212121",
    height: "100%",
  },

  castHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  castTitle: {
    color: "white",
    fontSize: 30,
    fontWeight: "300",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 20,
  },

  castBtn: {
    marginTop: 40,
    marginRight: 10,
  },

  castBtnText: {
    color: "#0177BD",
    textTransform: "uppercase",
    fontWeight: "700",
  },

  castPics: {
    flexDirection: "row",
    width: "100%",
  },

  castCard: {
    width: 150,
    backgroundColor: "#2A2A2A",
    marginRight: 10,
  },

  actorPic: {
    height: 200,
    width: 150,
  },

  actorName: {
    color: "white",
    fontWeight: "700",
    marginLeft: 10,
  },

  actorRole: {
    color: "grey",
    fontSize: 12,
    marginLeft: 10,
  },

  direction: {
    marginTop: 20,
    marginLeft: 10,
  },

  castSubtitle: {
    color: "white",
    fontWeight: "700",
  },

  castSubtitleInfos1: {
    color: "grey",
    marginTop: 5,
    marginBottom: 20,
  },

  castSubtitleInfos2: {
    color: "grey",
    marginTop: 5,
  },
});
