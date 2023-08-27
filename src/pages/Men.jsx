import Products from './Product';
import axios from 'axios';
import Header from '../Components/Header';

const api = "https://fakestoreapi.com/products/category/men's clothing";

const { data: mensclothing} = await axios.get(api)

const Men = () => {
    
    return(
        <div>
            {<Header />}
        <div style={{display: 'flex', flexWrap: 'wrap', margin: '4rem', gap:"4rem"}}>
            {Array.isArray(mensclothing) && mensclothing.map((product) => (
                <Products key={product.id} {...product}/>  
                
            ))}
           
        </div>
        </div>
    )
}

export default Men;