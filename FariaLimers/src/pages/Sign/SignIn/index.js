import React, { useState } from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";

import { Container, Input, ButtonView } from "./styles";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onHandleSubmit() {
    if (email === "teste@email.com" && password === "12345678") {
      return navigation.navigate("Main");
    }
    return Alert.alert("Falha no login.", "Verifique a sua senha");
  }

  return (
    <Container behavior="padding" enabled keyboardVerticalOffset>
      <Text style={styles.logo}>FariaLimers</Text>

      <Input>
        <Text style={styles.label}>EMAIL:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu e-mail"
          placeholderTextColor="#8F8BA7"
          value={email}
          onChangeText={setEmail}
          autoCapitalize={false}
          autoCorrect={false}
        />
      </Input>

      <Input>
        <Text style={styles.label}>SENHA:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a sua senha"
          secureTextEntry
          placeholderTextColor="#8F8BA7"
          value={password}
          onChangeText={setPassword}
        />
      </Input>
      <TouchableOpacity onPress={() => onHandleSubmit()}>
        <ButtonView>
          <Text style={styles.button}>ENTRAR</Text>
        </ButtonView>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.login}>
          Nāo tem cadastro? Clique aqui para fazer o cadastro.
        </Text>
      </TouchableOpacity>
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 40
  },
  label: {
    color: "#eee"
  },
  input: {
    height: 40,
    borderBottomColor: "#8F8BA7",
    borderBottomWidth: 1,
    paddingLeft: 8
  },
  button: {
    fontSize: 20,
    color: "#eee",
    fontWeight: "bold"
  },
  login: {
    fontSize: 15,
    marginTop: 10,
    color: "#eee"
  }
});
