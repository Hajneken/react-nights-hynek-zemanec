import React, { Component } from "react";
import {Link} from 'react-router-dom';

import {H1} from '../../components/Typography'
import { getProducts } from "../../api/get-products";
import Loader from "../../components/Loader";


export class ProductList extends Component {
  state = {
    isLoading: "true",
    products: {}
  };

  // equvalent to ⬇
  // -------------------------
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     isLoading: 'true',
  //     products: [],
  //   }
  // }

  async componentDidMount() {

    const products = await getProducts();

  this.setState({
    isLoading: false,
    products,
    })
  }

  render() {

    const {
      isLoading,
      products: { data },
    } = this.state;

    return (
    <div>
      <H1 textAlign={"center"}>E-Commerce app</H1>
      {isLoading && <Loader/>}
      {data && (
        <ul>
          {data.map(({ id, attributes: item }) => (
            <li key={id}>
              <Link nk to={`/${id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    )
  }
}
