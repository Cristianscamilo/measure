import { useCount } from "../../../hooks/useCount";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({ quantity }) => {
  const { addOne, subOne, count } = useCount(quantity);
  return <ItemCount addOne={addOne} subOne={subOne} count={count} />;
};

export default ItemCountContainer;
