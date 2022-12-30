


import React from 'react';
import { Container, Row, Col  } from 'reactstrap';
import './choose-us.css'
import pastaImg from '../../assets/images/pasta.png';

const ChooseUs = () => {
    return <section>
<Container>
<Row>
    <Col lg = '6'>
        <img src={pastaImg} alt="" className='w-100'/>
    </Col>

    <Col lg='6'>
        <div className="choose__content">
            <h4>Quienes Somos?</h4>
            <h2>Echa un vistazo a los beneficios que tenemos para ti!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, deleniti illum omnis nostrum nihil veniam.</p>
        </div>

        <div className="features mt-4">
            <div className="feature1 d-flex align-items-center gap-5">
                <div className="single__feature">
                    <span><i class="ri-truck-fill"></i></span>
                    <h6>Envios gratis </h6>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="single__feature">
                    <span className="feature__icon-2"> <i class="ri-money-dollar-box-line"></i> </span>
                    <h6>Cash back en tus compras</h6>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>

            <div className="feature1 mt-3 d-flex align-items-center gap-5">
                <div className="single__feature">
                    <span className="feature__icon-3">
                    <i class="ri-secure-payment-fill"></i></span>
                    <h6>Pagos seguro </h6>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>

                <div className="single__feature">
                    <span className="feature__icon-4"> <i class="ri-24-hours-line"></i></span>
                    <h6>Soporte 24/7</h6>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
            </div>
        </div>
    </Col>
</Row>

</Container>

    </section>
}

export default ChooseUs;