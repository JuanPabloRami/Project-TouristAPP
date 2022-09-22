import React from 'react'

export const Select = () => {
  return (
    <>
      <select name="Departamento">
        <option value="" selected disabled hidden>Departamentos...</option>
        <option value="Quindio">Quindío</option>
      </select >
      <select name="Municipios">
        <option value="" selected disabled hidden>Municipios...</option>
        <option value="Armenia">Armenia</option>
        <option value="Circasia">Circasia</option>
        <option value="Calarcá">Calarcá</option>
        <option value="Montenegro">Montenegro</option>
        <option value="Quimbaya">Quimbaya</option>
        <option value="Salento">Salento</option>
        <option value="Pijao">Pijao</option>
        <option value="Córdoba">Córdoba</option>
        <option value="Tebaida">Tebaida</option>
        <option value="Filandia">Filandia</option>
        <option value="Génova">Génova</option>
        <option value="Buenavista">Buenavista</option>
      </select>
    </>
  )
}
