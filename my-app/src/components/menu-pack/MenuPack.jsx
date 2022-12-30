


import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProductCard from '../product-card/ProductCard'
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from '../../assets/fake-data/products'
import './menu-pack.css'


const MenuPack = () => {

    const [filter, setFilter] = useState('RICE-MENU')
    const [products, setProducts] = useState(fastFoodProducts)

    useEffect(() => {
        if(filter === 'RICE-MENU'){
            setProducts(riceMenuProducts)
        }
        if(filter === 'FAST-FOOD'){
            setProducts(fastFoodProducts)
}
if(filter === 'PIZZA'){
    setProducts(pizzaProducts)
}
if(filter === 'DESSERT'){
    setProducts(dessertProducts)
}

if(filter === 'COFFEE'){
    setProducts(coffeeProducts)
}
},[filter])
    return <section>
<Container>
    <Row>
        <Col lg ='12' className='text-center mb-4'> <h3 className="menu__title"> Nuestras promociones!</h3></Col>
        <Col lg='12' className='text-center mb-5'>
<button className='filter-btn' onClick={() => setFilter('FAST-FOOD')}>Fast food</button>
<button className='filter-btn active__btn' onClick={() => setFilter('RICE-MENU')}>rice Menu</button>
<button className='filter-btn' onClick={() => setFilter('PIZZA')}>Pizza</button>
<button className='filter-btn' onClick={() => setFilter('DESSERT')}>Desserts</button>
<button className='filter-btn' onClick={() => setFilter('COFFEE')}>Coffe</button>
        </Col>
        { products.map((item)=> (
                <Col lg='3' key={item.id} className="mb-4">
                    {" "}
                    <ProductCard item={item}/>
                    </Col>
            ) )}
    </Row>
</Container>

    </section>
}

export default MenuPack