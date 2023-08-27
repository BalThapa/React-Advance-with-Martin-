import Products from './Product';
import axios from 'axios';
import Header from '../Components/Header';

const api = "https://fakestoreapi.com/products/category/jewelery";

const { data: jewelery} = await axios.get(api)

const Jewelery = () => {
    
    return(
        <div>
            {<Header />}
        <div style={{display: 'flex', flexWrap: 'wrap', margin: '4rem', gap:"4rem"}}>
            {Array.isArray(jewelery) && jewelery.map((product) => (
                <Products key={product.id} {...product}/>  
                
            ))}
           
        </div>
        </div>
    )
}

export default Jewelery;