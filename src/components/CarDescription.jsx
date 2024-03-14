import React from 'react'

export default function CarDescription({orderText}) {
  return (
    <div className='container mt-5'>
        <div className="row">
            <div className={orderText==1 ? 'col-md-6 order-md-1' : 'col-md-6 order-md-2'} data-aos={orderText==1 ? 'fade-right':'fade-left'} data-aos-delay="400" data-aos-duration ="700">
                <h3>
                Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                </h3>
                <p>
                Delectus alias ut incidunt delectus nam placeat in consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui aut distinctio. Cumque fugit earum est quam officiis numquam. Ducimus corporis autem at blanditiis beatae incidunt sunt.

Voluptas saepe natus quidem blanditiis. Non sunt impedit voluptas mollitia beatae. Qui esse molestias. Laudantium libero nisi vitae debitis. Dolorem cupiditate est perferendis iusto.

Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore sint quia modi. Numquam est aut fuga mollitia exercitationem nam accusantium provident quia.
                </p>
            </div>
            <div className={orderText==2 ? 'col-md-6 order-md-1' : 'col-md-6 order-md-2'} data-aos={orderText==2 ? 'fade-right':'fade-left'} data-aos-delay="400" data-aos-duration ="700" >
            <img src={'images/cars/car3.png'} alt="" />
            </div>
        </div>
      
    </div>
  )
}