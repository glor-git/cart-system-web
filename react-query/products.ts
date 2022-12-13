import axios from "axios";

export async function getProductItems() {
  const { data } = await axios({
    method: 'get',
    url: 'http://localhost:3000/api/product/items'
  })

  return data
}