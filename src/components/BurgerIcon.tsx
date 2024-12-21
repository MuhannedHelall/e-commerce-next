"useClient";
import { RxHamburgerMenu } from "react-icons/rx";

function BurgerIcon({
  className,
  size = 25,
  children,
}: {
  className?: string;
  size?: number;
  children: React.ReactNode;
}) {
  return (
    <label>
      <input type="checkbox" className="hidden peer" />
      <RxHamburgerMenu
        size={size}
        className={`lg:hidden cursor-pointer ${className}`}
      />
      {children}
    </label>
  );
}

export default BurgerIcon;
