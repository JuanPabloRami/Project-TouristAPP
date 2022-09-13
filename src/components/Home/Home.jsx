import React from 'react'
import './Home.css';

export const ModalOpen = ({Open, CloseModal}) =>{

  const locationChange = () => {
  

  }

  const locationCity = (event) =>{
    const city = event.target.value;
    console.log(city);
    return city
  }

  const locationDepartment = (event) =>{
    const department = event.target.value;
    console.log(department);
    return department
  }

  return( 
  <div className={`modal ${Open && 'modal-open'}`}>
    <div className="filter-modal">
      <button onClick={CloseModal} className='btn-close'>X</button>
      <h2>Escoge una ubicación</h2>
      <div className="filter-select">
        <select onClick={locationDepartment}>
        <option value="" selected disabled hidden>Departamentos...</option>
          <option>Quindio</option>
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
    <div className="home">
      <div className="backgroundImg">
        <h1 >HOME</h1>
      </div>
      <div  className="vacio">
        <h1 data-aos="fade-up">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, asperiores similique? Adipisci recusandae soluta voluptatum vitae, cupiditate pariatur vel veritatis amet quod voluptas error non nobis eligendi alias aspernatur consequuntur?</h1>
      </div>
    </div>
  )
}
