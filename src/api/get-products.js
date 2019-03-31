import config from "../config";
import {getToken} from "./get-token"

export const getProducts = async () => {
  const access_token = await getToken();

  const res = await fetch(`${config.apiUrl}/api/skus`, {
    method: 'GET',
    headers:{
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`
    }
  })

  return res.json();
}


