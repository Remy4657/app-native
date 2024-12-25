import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = () => {
    // Perform login logic here
  };

  return (
    <View style={styles.container as any}>
      <View style={styles.logoContainer as any}>
        <Image
          source={{
            uri: "https://www.bootdey.com/img/Content/avatar/avatar5.png",
          }}
          style={styles.logo as any}
        />
      </View>
      <View style={styles.card as any}>
        <View style={styles.inputContainer as any}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />
        </View>
        <View style={styles.inputContainer as any}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.inputContainer as any}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          style={styles.button as any}
          onPress={handleLoginPress}
        >
          <Text style={styles.buttonText as any}>Register</Text>
        </TouchableOpacity>
        <Text>Are you have account?</Text>
        <Link href="/test-login">Login</Link>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 120,
    marginBottom: 10,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    resizeMode: "contain",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  card: {
    borderRadius: 10,
    backgroundColor: "#eee",
    margin: 10,
    padding: 15,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    borderRadius: 10,
    backgroundColor: "#eee",
    margin: 10,
    padding: 15,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  input: {
    fontSize: 16,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#0066cc",
    borderRadius: 10,
    padding: 15,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
};

export default Register;
