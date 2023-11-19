import React, { useContext, useRef, useState } from 'react'
import './GameCard.css'
import { ShopContext } from '../context/ShopContext'

export const GameCard = ({id, name, image, platforms, release}) => {
    const {addToCart, cartItems} = useContext(ShopContext);

    const {itemAmount, setItemAmount} = useState(cartItems?.find(item => item.id === id)?.quantity)
    const [isPlatformSelected, setSelectedPlatform] = useState(false);
    const [platform, setPlatform] = useState(null);
    const platformRef = useRef([]);


    const releaseYear = new Date(release).getFullYear();
    let priceBasedOnRelease = 0;

    if(releaseYear < 2000){
        priceBasedOnRelease = 75.99;
    }else{
        priceBasedOnRelease = 59.99;
    }

    const traverseRefs = (e) => {
        console.log(platformRef.current);
        platformRef.current.map((item) => {
            if(item.classList.contains('platform-name-selected')){
                item.classList.remove('platform-name-selected')
                e.target.classList.add('platform-name-selected');
            }
        })
    }

    const handleClick = (e, platformSelected) => {

        if(isPlatformSelected === false){
            setSelectedPlatform(true);
            e.target.classList.add("platform-name-selected")
            setPlatform(platformSelected);
        }else if(isPlatformSelected && e.target.classList.contains('platform-name-selected')){
            setSelectedPlatform(false);
            e.target.classList.remove("platform-name-selected")
        }else{
            traverseRefs(e);
            console.log("deselecting other platform");
        }
    }
    
  return (
    <div className='gameCard'>
        <h1 className='gameTitle'>{name}</h1>
        <img src={image} alt={name} className='gameImage'></img>
        <p className='gamePrice'>${priceBasedOnRelease}</p>
        <div className='platforms'> 
            <p>Choose the Platform:</p>
            <div className='platforms-list'>
                {platforms?.map((platform, index) => {
                    return <h1 className='platform-name' ref={el => platformRef.current[index] = el } value="platform" key={platform.platform.name} onClick={(e) => {handleClick(e, platform.platform.name)}}> {platform.platform.name} </h1>
                })}
            </div>
        </div> 

        { isPlatformSelected && <div className='cardButtonSection'>
            <button tabIndex='0' className='addToCart' onClick={() => addToCart(id,name,image, priceBasedOnRelease, platform)}> Add to Cart </button>
                {itemAmount > 0 &&  <div className='quantity'> <p> {itemAmount} </p></div>}   
        </div>}
    </div>
  )
}
