import React from 'react'
import './Home.css';
import { Outlet } from '../Swiper/Outlet';
import { CardBusiness } from '../Swiper/CardBusiness';

export const Home = () => {
  return (
    <>
    <div className="home">
      <div className="backgroundImg">
        <h1 >HOME</h1>
      </div>
    </div>
      <section>
        {/* <h1 data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, asperiores similique? Adipisci recusandae soluta voluptatum vitae, cupiditate pariatur vel veritatis amet quod voluptas error non nobis eligendi alias aspernatur consequuntur?</h1> */}
        <CardBusiness/>
      <Outlet/>
    </section>
  </>
  )
}
