import Select from "react-select";
import {SelectUnitStyles} from "./SelectUnitStyles";

const options = [
  { value: "kg", label: "Kilogram (kg)" },
  { value: "g", label: "Gram (g)" },
  { value: "L", label: "Liter (L)" },
  { value: "ml", label: "Milliliter (ml)" },
  { value: "unit", label: "Unit (unit)" },
  { value: "lbs", label: "Pound (lbs)" },
  { value: "oz", label: "Ounce (oz)" },
  { value: "gal", label: "Gallon (gal)" },
  { value: "dozen", label: "Dozen" },
];

const SelectUnit = () => {
  return (
    <div>
      <Select
        options={options}
        placeholder={"Select the unit (kg, ml, g, etc.)."}
        styles={SelectUnitStyles}
      />
    </div>
  );
};

export default SelectUnit;
