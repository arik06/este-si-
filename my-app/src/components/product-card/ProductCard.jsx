

import React from 'react'
import './producto-tarjeta.css'
const productCard = (props) => {

    const {title, imgUrl, price}=props.item

    return (
        <div className="single__product">
    <div className="product__img">
        <img src={imgUrl} alt="" className="w-100" />
    </div>
    <div className="product__content">
        <div className="rating text-center">
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-fill"></i></span>
            <span><i class="ri-star-fill"></i></span>
</div>
<h6>{title}</h6>

<div className="d-flex align-items-center justify content-between">
    <span className="price">Precios: $ <span>{price}</span> </span>
    <span><i class="ri-shopping-cart-fill "></i></span>
</div>
    </div>
</div>
    )
}

export default productCard