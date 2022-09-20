import React from "react";

export const BussinesCreate = () => {
  return (
    <section className="form-register">
      <h4>Crea Tu Negocio</h4>
      <label htmlFor="nombreNegocio">Nombre del negocio</label>
      <input
        className="controls"
        type="text"
        name="nombreNegocio"
        id="nombreNegocio"
        placeholder="Ejemplo: panapp"
      />
      <label htmlFor="categoria">Categoria</label>
      <select
        className="controls"
        type="text"
        name="categoria"
        id="categoria"
        placeholder="Selecciona el tipo"
      >
        <option value="value1">Panadería</option>
        <option value="value2">Moda</option>
        <option value="value3">Miscelanea</option>
      </select>
      <br />
      <label htmlFor="descripcion">Descripcion breve del negocio</label>
      <input className="controls" type="text" maxLength="300" />

      <label htmlFor="imagen">Imagen de tu negocio</label>
      <br />
      <input type="file" />

      <input className="botons" type="submit" value="Crear Negocio" />
    </section>
  );
};
