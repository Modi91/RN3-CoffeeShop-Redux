import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
// NativeBase Components
import { Container, Header } from "native-base";
import AppContainer from "../../Navigation";
// Style
import styles from "./styles";
import { getCoffeeShops } from "../../store/actions/coffeeActions";
// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

class HomePage extends Component {
  componentDidMount() {
    this.props.getCoffeeShops();
  }
  render() {
    console.log(this.props.navigation);
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <AppContainer />
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getCoffeeShops: () => dispatch(getCoffeeShops())
});
export default connect(
  null,
  mapDispatchToProps
)(HomePage);
