import PupUp from "./PopUp";


const options = [
  {value: "exito", label: "Éxito"},
  {value: "alkosto", label: "Alkosto"},
  { value: "olimpica", label: "Olímpica"},
  { value: "jumbo", label: "Jumbo"},
  { value: "homeCenter", label: "Home Center"},
  { value: "tiendasD1", label: "D1"},
  { value: "falabella", label: "Falabella"},
  { value: "almacenesLa14", label: "Almacenes La 14"},
  { value: "tiendasAra", label: "Tiendas ara"},
  { value: "makro", label: "Mackro"},
  { value: "priceSmart", label: "Pricesmar"},
  { value: "priceSmart", label: "Pricesmar"},
  { value: "justoYBueno", label: "Mercadería Justo & Bueno"},
  { value: "megaTiendas", label: "MEGATIENDAS"},
  { value: "supermercadoBelalcazar", label: "Supermercado Belalcázar"}
]


const PopUpContainer = () => {
  return (
    <>
    <PupUp options={options}/>
    </>
  )
}

export default PopUpContainer