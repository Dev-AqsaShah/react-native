// screens/SignUpScreen.js
import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Animated,
  StatusBar,
} from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createScale = useRef(new Animated.Value(1)).current;

  const onCreateIn = () => Animated.spring(createScale, { toValue: 0.97, useNativeDriver: true }).start();
  const onCreateOut = () => {
    Animated.spring(createScale, { toValue: 1, useNativeDriver: true }).start();
    // placeholder for sign up logic
    navigation.replace("Home");
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Create Account</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Full name</Text>
          <TextInput
            placeholder="Your name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
            style={styles.input}
          />

          <Text style={[styles.label, { marginTop: 12 }]}>Email</Text>
          <TextInput
            placeholder="example@mail.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />

          <Text style={[styles.label, { marginTop: 12 }]}>Password</Text>
          <TextInput
            placeholder="Choose a password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <Animated.View style={{ transform: [{ scale: createScale }], width: "100%" }}>
            <TouchableOpacity
              style={styles.createBtn}
              activeOpacity={0.9}
              onPressIn={onCreateIn}
              onPressOut={onCreateOut}
            >
              <Text style={styles.createText}>Create account</Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity style={styles.smallBack} onPress={() => navigation.goBack()}>
            <Text style={styles.smallBackText}>← Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "700",
    color: "#000",
  },
  form: {
    marginTop: 18,
    width: "100%",
  },
  label: {
    color: "#222",
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e6e6e6",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10,
    fontSize: 15,
    color: "#000",
    backgroundColor: "#fafafa",
  },
  createBtn: {
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
  },
  createText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  smallBack: {
    marginTop: 22,
    alignItems: "flex-start",
  },
  smallBackText: {
    color: "#666",
  },
});
