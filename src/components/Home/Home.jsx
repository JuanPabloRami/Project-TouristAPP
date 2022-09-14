import React from 'react'
import './Home.css';
import { useState } from 'react';
import { Navbar } from '../Navbar/Navbar'
import Image from '../images/Home/s.png'
import { Slide } from '../Swiper/Slide';

export const ModalOpen = ({ Open, CloseModal }) => {
  const [inputDepartment, setInputDepartment] = useState("");
  const [inputCity, setInputCity] = useState("");


  const locationCity = (event) => {
    const city = event.target.value;
    return setInputCity(city);
  }

  const locationDepartment = (event) => {
    const department = event.target.value;
    return setInputDepartment(department);
  }

  const locationChange = () => {
    const location = inputCity + " - " + inputDepartment;
    console.log(location);
    <Navbar location={location} />
    return location;
  }


  return (

    <div className={`modal ${Open && 'modal-open'}`}>
      <div className="filter-modal">
        <button onClick={CloseModal} className='btn-close'>X</button>
        <h2>Escoge una ubicación</h2>
        <div className="filter-select">
          <select onClick={locationDepartment}>
            <option value="" selected disabled hidden>Departamentos...</option>
            <option>Quindío</option>
          </select >
          <select onChange={locationCity}>
            <option value="" selected disabled hidden>Municipios...</option>
            <option>Armenia</option>
            <option>Circasia</option>
            <option>Calarcá</option>
            <option>Montenegro</option>
            <option>Quimbaya</option>
            <option>Salento</option>
            <option>Pijao</option>
            <option>Córdoba</option>
            <option>Tebaida</option>
            <option>Filandia</option>
            <option>Génova</option>
            <option>Buenavista</option>
          </select>
        </div>
        <button onClick={locationChange} className='btn-change-location'>Cambiar</button>
      </div>
    </div>
  );
}

export const Home = () => {

  return (
    <>
    <div className="home">
      <div className="backgroundImg">
        <h1 >HOME</h1>
      </div>
    </div>
      <section>
        <div className="slide-container">
          <div className="slide-content">
            <div className="card-wrapper">
              <div className="card">
                <div className="image-content">
                  <span className="overlay"></span>
                  <div className="card-image">
                    <img src={Image} alt="imagen1" className="card-img" />
                  </div>
                </div>
                <div className="card-content">
                  <h2 className="name">UNICENTRO</h2>
                  <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, eos tempore amet qui doloribus officia veniam saepe corrupti quo voluptatibus delectus. Consequatur delectus incidunt doloribus excepturi? Dolores laboriosam vero fugiat.</p>
                  <button className="button">Ver más</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <h1 data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, asperiores similique? Adipisci recusandae soluta voluptatum vitae, cupiditate pariatur vel veritatis amet quod voluptas error non nobis eligendi alias aspernatur consequuntur?</h1> */}
      <Slide/>
    </section>
  </>
  )
}
