import { Navigate } from "react-router";

export const ProtectedRouteCreateBusiness = ({children}) => {
  if (localStorage.getItem('typeUser') === "Emprendedor"){
    return children
  }
  return <Navigate to="/" />;
  
};


export const ProtectedRouteCreateItem = () => {
  if (localStorage.getItem("typeUser") === "Emprendedor") {
    return <Navigate to="/" />;
  }
  return <Navigate to="/crear-negocio" />;
};
