// screens/SignInScreen.js
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

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitScale = useRef(new Animated.Value(1)).current;

  const onSubmitIn = () => Animated.spring(submitScale, { toValue: 0.97, useNativeDriver: true }).start();
  const onSubmitOut = () => {
    Animated.spring(submitScale, { toValue: 1, useNativeDriver: true }).start();
    // placeholder for auth logic
    // alert("Sign in pressed");
    navigation.replace("Home"); // example behavior: go back to Home
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Sign In</Text>

        <View style={styles.form}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="example@mail.com"
            placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />

          <Text style={[styles.label, { marginTop: 16 }]}>Password</Text>
          <TextInput
            placeholder="Your password"
            placeholderTextColor="#999"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />

          <Animated.View style={{ transform: [{ scale: submitScale }], width: "100%" }}>
            <TouchableOpacity
              style={styles.submitBtn}
              activeOpacity={0.9}
              onPressIn={onSubmitIn}
              onPressOut={onSubmitOut}
            >
              <Text style={styles.submitText}>Sign In</Text>
            </TouchableOpacity>
          </Animated.View>

          <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.linkText}>Don't have an account? Create one</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.smallBack} onPress={() => navigation.goBack()}>
            <Text style={styles.smallBackText}>← Back</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "700",
    color: "#000",
  },
  form: {
    marginTop: 28,
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
  submitBtn: {
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 20,
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  link: {
    marginTop: 16,
    alignItems: "center",
  },
  linkText: {
    color: "#000",
    fontWeight: "500",
  },
  smallBack: {
    marginTop: 28,
    alignItems: "flex-start",
  },
  smallBackText: {
    color: "#666",
  },
});
