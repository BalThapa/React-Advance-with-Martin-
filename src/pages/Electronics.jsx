import Products from './Product';
import axios from 'axios';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

const api = "https://fakestoreapi.com/products/category/electronics";

const { data: electronics} = await axios.get(api)

const Electronics = () => {
    
    return(
        <div>
            {<Header />}
        <div style={{display: 'flex', flexWrap: 'wrap', margin: '4rem', gap:"4rem"}}>
            {Array.isArray(electronics) && electronics.map((product) => (
                <Products key={product.id} {...product}/>  
                
            ))}
           
        </div>
        <Footer />
        </div>
    )
}

export default Electronics;