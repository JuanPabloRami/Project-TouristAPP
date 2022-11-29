import React, { useContext, useState } from "react";
import "./search.css";
//icons
import { GrFormClose as CloseSearch } from "react-icons/gr";
import { BiSearchAlt2 as Searching } from "react-icons/bi";
import axios from "../../api/axios/axios";
import { useEffect } from "react";
import { UsersContext } from "../../context/Users/UsersContext";
import { Navigate } from "react-router";

export const Search = () => {
  const [search, setSearch] = useState(false);
  const [searchBusinnes, setSearchBusinnes] = useState("");
  const [dataBussiness, setDataBussiness] = useState({})

  const searching = () => {
    return setSearch(true);
  };

  const closeSearching = () => {
    return setSearch(false);
  };

  const getBusiness = (names) => {
    axios.get(`api/negocio/?nombre__contains=${names}`)
      .then((response) => {
        setDataBussiness(response.data)
        console.log("holi",response);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleChange = (e) => {
    setSearchBusinnes(e.target.value);
    getBusiness(e.target.value);
  };

  const showValues = () => {
  const valueResult = document.querySelector(".resultSearch");
  valueResult.classList.add('showValue');
  }

  useEffect(() => {
    getBusiness()
  },[]);

  const {getValue,value,idBusiness,setValue} = useContext(UsersContext)

  if(value){
    setValue(false);
    return <Navigate to={`/negocio/${idBusiness}`}/>;
  }
  return (
    <>
      {search && (
        <>
          <input
            className="search_input"
            type="text"
            name="search"
            placeholder="Busca en TouristApp"
            value={searchBusinnes}
            onChange={handleChange}
            onClick={showValues}
            autocomplete="off"
          />
          <CloseSearch className="icon_close_search" onClick={closeSearching} />
          <Searching className="icon_search" />
          <div className="resultSearch">
            {dataBussiness.map((element, index)=>(
            <div key={index} className="containerValue">
              <button value={element.id} onClick={getValue}></button>
              <img src={element.imgperfil}></img>
            <div className="category">
              <p>{element.nombre}</p>
              <p id="valueCategories">{element.tipo_Negocio.nombre}</p>
            </div>
              </div>
            ))}
          </div>
        </>
      )}
      <li id="search" className="list" onClick={searching}>
        Buscar
      </li>
    </>
  );
};

