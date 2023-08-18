import Button from 'react-bootstrap/Button';

//import * as Bootstrap from 'react-bootstrap'; //in order to import everything from bootstrap library, it is costly and more memory consuming

const Test =()=>{
    return <div>
        {/* <Bootstrap.Button variant="secondary" >Example Button<Bootstrap.Button> */}
        <Button variant="primary" >Example Button</Button>
    </div>
}

export default Test;