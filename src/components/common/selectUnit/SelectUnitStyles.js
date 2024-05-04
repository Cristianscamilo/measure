export const SelectUnitStyles = {
    control: (styles) => {
      return {
        ...styles,
        backgroundColor: "var(--color-background)",
        borderRadius: "8px",
        minHeight: "50px",
        maxWidth: "310px",
        margin: "10px",
        fontSize: "18px",
      };
    },
    option: (provided, state) => {
      return {
        ...provided,
        color: state.isSelected ? "var(--color-primary)" : "var(--color-title)",
        backgroundColor: "var(--color-background)",
        width: "340px"
      };
    },
    singleValue: (provided) => {
      return {
        ...provided,
        color: "var(--color-title)",
      };
    },
    placeholder: (styles) => {
      return {
        ...styles,
        backgroundColor: "var(--color-background)",
        color: "var(--color-place-holder)",
      };
    },
  };