import Products from './Product';
import axios from 'axios';
import Header from './Components/Header';


const api = "https://fakestoreapi.com/products/";

const { data: products} = await axios.get(api)

const ProductsList = () => {
    
    return(
        <div>
            {<Header />}
        <div style={{display: 'flex', flexWrap: 'wrap', margin: '4rem', gap:"4rem"}}>
            {Array.isArray(products) && products.map((product) => (
                <Products key={product.id} {...product}/>  
                
            ))}
           
        </div>
        </div>
    )
}

export default ProductsList;