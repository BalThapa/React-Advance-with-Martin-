import Products from './Product';
import axios from 'axios';
import Header from '../Components/Header';

const api = "https://fakestoreapi.com/products/category/women's clothing";

const { data: womensclothing} = await axios.get(api)

const Women = () => {
    
    return(
        <div>
            {<Header />}
        <div style={{display: 'flex', flexWrap: 'wrap', margin: '4rem', gap:"4rem"}}>
            {Array.isArray(womensclothing) && womensclothing.map((product) => (
                <Products key={product.id} {...product}/>  
                
            ))}
           
        </div>
        </div>
    )
}

export default Women;