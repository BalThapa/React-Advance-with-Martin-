import Product from './Product';
import axios from 'axios';

const api = "https://fakestoreapi.com/products/";

const { data: products} = await axios.get(api)

const ProductsList = () => {

     console.log(products);

    return(
        <div style={{display: 'flex', flexWrap: 'wrap', margin: '3rem', gap:"3rem"}}>
            {Array.isArray(products) && products.map((product) => (
                <Product key={product.id} {...product}/>
            ))}
        </div>
    )
}

export default ProductsList;