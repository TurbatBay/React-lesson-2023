import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Product from './Product'
import Product2 from './Product2';
import ProductFunc from './ProductFunc';
import products from './Seed';


function App() {

   const productList = products.map((product) => {
        console.log(product)
        return <ProductFunc 
        id ={product.id}
        title = {product.title}
        description = {product.description}
        url = {product.url}
        votes = {product.votes}
        submitterAvatarUrl = {product.submitterAvatarUrl}
        productImageUrl= {product.productImageUrl}
        />
  })
//classaar hiih gj bn
  const productList2 = products.map((product) => {
      return <ProductFunc 
      id ={product.id}
      title = {product.title}
      description = {product.description}
      url = {product.url}
      votes = {product.votes}
      submitterAvatarUrl = {product.submitterAvatarUrl}
      productImageUrl= {product.productImageUrl}
      />
  })

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Popular Products</h3>
          <hr />
          {productList}

        </div>

      </header>
    </div>
  )};


export default App;