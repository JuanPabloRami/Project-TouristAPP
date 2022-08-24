import React from 'react'

export const CrearItem = () => {
  return (
    <section className="form-register">
            <h4>Crea Tu Item</h4>
            <label htmlFor="nombreItem">Nombre del Item</label>
            <input className="controls" type="text"  name="nombreItem" id="nombreNegocio" placeholder="Ejemplo: pan de 1000"/> 
            <label htmlFor="categoria">Categoria</label>
            <select className="controls" type="text" name="categoria" id="categoria" placeholder="Selecciona el tipo">
                <option value="value1">Computadores</option>
                <option value="value2">Celulares</option>
                <option value="value3">Partes</option>
            </select>
            <br/>
            <label htmlFor="descripcion">Descripcion breve del item</label>
            <input className="controls" type="text" maxLength="300" />

            <label htmlFor="imagen">Imagen del item</label><br />
            <input type="file" />
            
            <input className="botons" type="submit" value="Crear Item"/>
        </section> 
  )
}