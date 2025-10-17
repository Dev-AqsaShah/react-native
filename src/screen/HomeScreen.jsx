// screens/HomeScreen.js
import React, { useEffect, useRef } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const titleY = useRef(new Animated.Value(30)).current;    // slide up
  const titleOpacity = useRef(new Animated.Value(0)).current; // fade in
  const btnScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.delay(300),
      Animated.parallel([
        Animated.timing(titleY, { toValue: 0, duration: 600, useNativeDriver: true }),
        Animated.timing(titleOpacity, { toValue: 1, duration: 600, useNativeDriver: true }),
      ]),
    ]).start();
  }, []);

  const onPressIn = () => {
    Animated.spring(btnScale, { toValue: 0.96, useNativeDriver: true }).start();
  };
  const onPressOut = (route) => {
    Animated.spring(btnScale, { toValue: 1, useNativeDriver: true }).start();
    navigation.navigate(route);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.container}>
        <Animated.View
          style={[
            styles.titleWrap,
            { transform: [{ translateY: titleY }], opacity: titleOpacity },
          ]}
        >
          <Text style={styles.brand}>WELCOME</Text>
          <Text style={styles.subtitle}>Simple · Clean · Fast</Text>
        </Animated.View>

        <View style={styles.centerBox}>
          <Text style={styles.bigText}>Hello 👋</Text>
          <Text style={styles.smallText}>
            This is a minimal animated welcome screen. Black & White theme.
          </Text>
        </View>

        <View style={styles.actions}>
          <Animated.View style={{ transform: [{ scale: btnScale }] }}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPressIn={onPressIn}
              onPressOut={() => onPressOut("SignIn")}
              style={styles.primaryBtn}
            >
              <Text style={styles.primaryText}>Sign In</Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("SignUp")}
            style={styles.ghostBtn}
          >
            <Text style={styles.ghostText}>Create account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Made with ♡ — Minimal UI</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  titleWrap: {
    alignItems: "center",
    marginTop: 10,
  },
  brand: {
    fontSize: 28,
    letterSpacing: 4,
    fontWeight: "700",
    color: "#000",
  },
  subtitle: {
    marginTop: 6,
    fontSize: 12,
    color: "#444",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  centerBox: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  bigText: {
    fontSize: 36,
    fontWeight: "700",
    color: "#000",
  },
  smallText: {
    marginTop: 10,
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    lineHeight: 20,
  },
  actions: {
    width: "100%",
    alignItems: "center",
  },
  primaryBtn: {
    backgroundColor: "#000",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  primaryText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  ghostBtn: {
    borderWidth: 1,
    borderColor: "#000",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  ghostText: {
    color: "#000",
    fontSize: 15,
    fontWeight: "500",
  },
  footer: {
    alignItems: "center",
  },
  footerText: {
    fontSize: 12,
    color: "#666",
  },
});
