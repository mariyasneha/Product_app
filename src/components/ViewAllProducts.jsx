import React, { useState } from 'react'
import ProductNavBar from './ProductNavBar'

const ViewAllProducts = () => {
  const [productData, ChangeproductData] = useState([
    { "name": "Wireless Mouse", "description": "Ergonomic wireless mouse with USB receiver", "price": "259", "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG4VyR9BglAHpMm5DvfNQG1f95on64c6EeIg&s" },
    { "name": "Gaming Keyboard", "description": "Mechanical RGB backlit gaming keyboard", "price": "499", "image": "https://images-cdn.ubuy.co.in/63400c68afe02d2b0c7aeb85-mechanical-gaming-keyboard-87-keys-small.jpg" },
    { "name": "Bluetooth Speaker", "description": "Portable waterproof Bluetooth speaker", "price": "599", "image": "https://www.sencor.com/getmedia/6770caad-d0be-4d0d-b5f0-01bbc4c1c555/35059169.jpg.aspx?width=2100&height=2100&ext=.jpg" },
    { "name": "Smart Watch", "description": "Fitness tracker with heart rate monitor", "price": "1699", "image": "https://m.media-amazon.com/images/I/61pIzNaNRWL.jpg" },
    { "name": "LED Monitor", "description": "24-inch full HD LED monitor", "price": "9999", "image": "https://www.primeabgb.com/wp-content/uploads/2023/10/SAMSUNG-24-inch-Full-HD-LED-Backlit-IPS-Panel-Frameless-Monitor-LS24R356FHWXXL.jpg" },
  ])
  return (
    <div>
      <div className="container">
        <ProductNavBar />
        <div className="row">
          <center><h1>Product Details</h1></center>
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {productData.map(
                (value, index) => {
                  return (
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                      <div class="card h-100">
                        <img src={value.image} class="card-img-top" alt={value.name} />
                        <div class="card-body">
                          <h5 class="card-title">{value.name}</h5>
                          <p class="card-text">{value.description}</p>
                          <p class="card-text">{value.price}</p>
                          <a href="#" class="btn btn-primary">Buy</a>
                        </div>
                      </div>
                    </div>
                  )
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewAllProducts