import { useState } from "react";
import CreatableSelect from "react-select/creatable";
import { SelectOptionStyles } from "./SelectOptionStyles";

const SelectOption = ({options}) => {
   const [option, setOption] = useState(options)
  return (
      <CreatableSelect
      required
      closeMenuOnSelect={true}
      options={option}
      onCreateOption={(inputValue) => {
        const newOption = {
          value: inputValue,
          label: inputValue.toUpperCase().trim(),
          color: "red"          
        };
        setOption([newOption,...option])
      }}
      placeholder={"Select or type"}
      styles={SelectOptionStyles}
    />
  )
}

export default SelectOption


/*

1. crea recuadro y sobreponlo sobre el budgetlist con sombreado en el fondo
2.Que al oprimir Return se apague ese recuadro y se pueda seguir trabajando budgetlist
3. Al marcar SaveList se debe agregar el BudgetContext en un useState en PopUp, luego 
en el recuadro al marcar Save se debe agregar a ese estado el nombre del comercio y el 
nombre del presupuesto que se agregue y enviarse a un nuevo contexto 
para imprimir la versión final que se comparte a movil o se guardara en base de datos


*/