import { GoStarFill } from "react-icons/go";

function Stars({ num }: { num: 0 | 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, i) => (
        <GoStarFill
          key={i}
          size={22}
          className={i < num ? "text-yellow-400" : "text-slate-200"}
        />
      ))}
    </div>
  );
}

export default Stars;
