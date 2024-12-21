import Link from "next/link";

function LinkItem({ href = "", className, children }: any) {
  return (
    <Link
      href={href}
      className={`inline-block w-fit capitalize transition duration-200 hover:scale-105 hover:font-bold hover:after:bg-yellow-500 hover:after:block hover:after:h-[2px] hover:after:w-4/5 hover:after:absolute hover:after:-left-3 hover:after:-bottom-[2px] hover:after:rounded-full ${className}`}
    >
      {children}
    </Link>
  );
}

export default LinkItem;
