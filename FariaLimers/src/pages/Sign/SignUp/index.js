import React from "react";
import { TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Container, Input, ButtonView } from "./styles";

export default function SignUp({ navigation }) {
  return (
    <Container behavior="padding" enabled keyboardVerticalOffset>
      <Text style={styles.logo}>FariaLimers</Text>
      <Input>
        <Text style={styles.label}>NOME:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu nome"
          placeholderTextColor="#8F8BA7"
        />
      </Input>

      <Input>
        <Text style={styles.label}>EMAIL:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o seu e-mail"
          placeholderTextColor="#8F8BA7"
        />
      </Input>

      <Input>
        <Text style={styles.label}>SENHA:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a sua senha"
          secureTextEntry
          placeholderTextColor="#8F8BA7"
        />
      </Input>

      <Input>
        <Text style={styles.label}>CONFIRMAÇĀO DA SENHA:</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme a sua senha"
          secureTextEntry
          placeholderTextColor="#8F8BA7"
        />
      </Input>
      <TouchableOpacity>
        <ButtonView>
          <Text style={styles.button}>CADASTRAR</Text>
        </ButtonView>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.login}>
          Já tem cadastro? Clique aqui para fazer o login.
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
