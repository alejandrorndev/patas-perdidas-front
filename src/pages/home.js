import React from 'react'
import { products } from '../products'
import ProductCart from '../components/productCart'
const Home = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center text-grey-600 my-8 tracking-wide">Animales perdidos</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
            {products.map((product, key) => 
                <ProductCart key={key} data={product}/>
            )}
        </div>
    </div>
  )
}

export default Home