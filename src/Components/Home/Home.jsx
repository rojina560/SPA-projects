import { useEffect } from 'react';
import './Home.css'
const Home = () => {
    useEffect(() =>{
        fetch("./data.json")
        .then(( res)=> res.json() )
        .then((data)=> console.log(data));
    },[] )
    return (
        <div className='container'>
            <div className='cart-container'>
                <div className='card'>
                    <img className='photo' src="https://plus.unsplash.com/premium_photo-1698339161104-841f2fed237c?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
                    <h2>antony danesh</h2>
                <p><small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam blanditiis nihil</small></p>
                <div className='info'>
                    <p>salary</p>
                 <p>writer</p>
                
                </div>
                <button className='card-btn'>select</button>
            
                </div>
               
            </div>
          
            
        </div>
    );
};

export default Home;