import { FiShoppingCart } from "react-icons/fi";

function ShoppingCart({
  className,
  size = 25,
}: {
  className?: string;
  size?: number;
}) {
  return <FiShoppingCart size={size} className={className} />;
}

export default ShoppingCart;
