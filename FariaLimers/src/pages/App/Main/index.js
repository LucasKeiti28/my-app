import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Card, Button } from "react-native-elements";

import Deck from "../../../components/Deck";

import { Container } from "./styles";

const DATA = [
  {
    id: 1,
    text: "Card #1",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 2,
    text: "Card #2",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 3,
    text: "Card #3",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 4,
    text: "Card #4",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  },
  {
    id: 5,
    text: "Card #5",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg"
  },
  {
    id: 6,
    text: "Card #6",
    uri: "http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg"
  },
  {
    id: 7,
    text: "Card #7",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg"
  },
  {
    id: 8,
    text: "Card #8",
    uri: "http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg"
  }
];

class Main extends Component {
  constructor(props) {
    super(props);

    const { navigation } = props;
  }

  renderCard(item) {
    return (
      <Card title={item.text} image={{ uri: item.uri }} key={item.id}>
        <Text>{item.text}</Text>
        <Text style={{ marginBottom: 10 }}>Descricao da Image</Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
          laborum impedit. Optio veritatis voluptatem obcaecati aliquid possimus
          aspernatur quia, omnis consectetur deserunt, molestiae eius
          recusandae. Facere ab sed aspernatur perspiciatis!
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
          laborum impedit. Optio veritatis voluptatem obcaecati aliquid possimus
          aspernatur quia, omnis consectetur deserunt, molestiae eius
          recusandae. Facere ab sed aspernatur perspiciatis!
        </Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum,
          laborum impedit. Optio veritatis voluptatem obcaecati aliquid possimus
          aspernatur quia, omnis consectetur deserunt, molestiae eius
          recusandae. Facere ab sed aspernatur perspiciatis!
        </Text>
      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="Acabou!">
        <Text style={{ marginBottom: 10 }}>
          Por enquanto você viu todos os cards, volte depois!
        </Text>
      </Card>
    );
  }
  render() {
    return (
      <Container>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
          style={styles.deck}
        />
      </Container>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  deck: {
    position: "absolute"
  }
});
