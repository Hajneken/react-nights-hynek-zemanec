import React, { Component } from "react";

import config from "./config";
import { unlink, link } from "fs";

const getToken = () =>
  fetch(`${config.apiUrl}/oauth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      grant_type: "client_credentials",
      client_id: config.clientId,
      scope: config.scope
    })
  }).then(res => res.json());

const getSkus = access_token =>
  fetch(`${config.apiUrl}/api/skus`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`
    }
  }).then(res => res.json());

class App extends Component {
  state = {
    isLoading: "true",
    products: []
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
    const { access_token } = await getToken();

    const products = await getSkus(access_token);

    this.setState({ products, isLoading: false });
  }

  render() {

    const {
      isLoading,
      products: { data },
    } = this.state;

    return (
      <div>
        <h1>E-commerce App</h1>
        {/* conditional rendering */}
        {isLoading && "..."}
        {!isLoading && (
        <ul>
            {data.map(item => (
              <li key={item.attributes.id}>
                <h2>{item.attributes.name}</h2>
                <img src={item.attributes.image_url} height='60' alt={item.attributes}/>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default App;

