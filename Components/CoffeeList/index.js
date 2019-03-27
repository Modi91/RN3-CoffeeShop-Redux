import React, { Component } from "react";
import { connect } from "react-redux";
// NativeBase Components
import { List, Content, Spinner } from "native-base";
import CartButton from "../CartButton";
// Store
import coffeeshops from "./list";

// Component
import CoffeeItem from "./CoffeeItem";
import { getCoffeeShops } from "../../store/actions/coffeeActions";
class CoffeeList extends Component {
  static navigationOptions = {
    title: "Coffee List",
    headerRight: <CartButton />
  };

  render() {
    const { coffeeShops, loading } = this.props.coffeeReducer;
    let shops;

    if (loading) {
      return <Spinner />;
    }
    shops = coffeeShops.map(coffeeShop => (
      <CoffeeItem coffeeShop={coffeeShop} key={coffeeShop.id} />
    ));

    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffeeReducer: state.coffeeReducer
});

export default connect(mapStateToProps)(CoffeeList);
