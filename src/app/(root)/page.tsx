import { categories } from "@/src/components/Navbar";
import Stars from "@/src/components/Stars";
import Link from "next/link";
import { GoArrowUpRight, GoHeart } from "react-icons/go";

export default function Home() {
  return (
    <>
      <section className="grid grid-cols-4 grid-rows-4 gap-5 my-5">
        <div className="border shadow rounded-md p-4 w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-300 h-10 w-10" />
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-300 rounded" />
              <div className="space-y-3">
                <div className="h-2 bg-slate-300 rounded" />
                <div className="h-2 bg-slate-300 rounded" />
              </div>
            </div>
          </div>
        </div>
        <div className="border shadow rounded-md p-4 w-full mx-auto col-span-2">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-300 rounded" />
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-300 rounded col-span-2" />
                  <div className="h-2 bg-slate-300 rounded col-span-1" />
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-300 rounded col-span-1" />
                  <div className="h-2 bg-slate-300 rounded col-span-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border shadow rounded-md p-4 w-full mx-auto row-span-3">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-5">
              <div className="h-2 bg-slate-300 rounded" />

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="border shadow rounded-md p-4 w-full mx-auto row-span-3">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-5">
              <div className="h-2 bg-slate-300 rounded" />

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="border shadow rounded-md p-4 w-full mx-auto col-span-2 row-span-3">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-5">
              <div className="h-2 bg-slate-300 rounded" />

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-1" />
                <div className="h-2 bg-slate-300 rounded col-span-2" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-2 bg-slate-300 rounded col-span-2" />
                <div className="h-2 bg-slate-300 rounded col-span-1" />
              </div>
            </div>
          </div>
        </div>
        <div className="border shadow rounded-md p-4 w-full mx-auto">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-slate-300 h-10 w-10" />
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-300 rounded" />
              <div className="space-y-3">
                <div className="h-2 bg-slate-300 rounded" />
                <div className="h-2 bg-slate-300 rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-between gap-4 overflow-x-auto my-10">
        {categories.map((category) => {
          if (category !== "Installment")
            return (
              <div
                key={category}
                className="flex flex-col items-center w-24 xl:w-28 gap-2"
              >
                <div className="w-24 h-24 xl:w-28 xl:h-28 rounded-2xl bg-sky-500">
                  <div className="object-cover w-full h-full block align-middle animate-pulse bg-sky-400" />
                </div>
                <p className="text-sm text-center font-medium text-blue-950 px-2.5">
                  {category}
                </p>
              </div>
            );
        })}
      </section>

      <section className="my-10">
        <div className="text-center">
          <h1 className="text-title">Our Top offers</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 py-5">
          <div className="relative bg-white rounded-3xl border p-4">
            <div className="heart-icon">
              <GoHeart size={24} fontWeight="200" />
            </div>
            <div className="block w-fit bg-lime-600 px-3 py-1 rounded-xl mb-2">
              <span className="capitalize text-sm text-white">
                15% Off Interest
              </span>
            </div>
            <div className="block w-fit bg-red-600 px-3 py-1 rounded-xl">
              <span className="uppercase text-white text-sm">12% Off</span>
            </div>
            <div className="w-4/5 mx-auto h-44 rounded-3xl animate-pulse bg-yellow-100 my-4"></div>
            <Stars num={4} />
            <h2 className="text-sm capitalize line-clamp-3 h-16 my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae voluptate dolorem dolorum?
            </h2>
            <div className="flex items-center justify-between text-sm capitalize border-b pb-5">
              <h4 className="text-blue-600 font-semibold">12,145 EGP</h4>
              <h4 className="text-gray-600 line-through">16,145 EGP</h4>
            </div>
            <div className="text-xs py-2">
              <p>
                From <span>836 EGP </span>/ 36 Months with Raya Installments
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border p-4">
            <div className="heart-icon">
              <GoHeart size={24} fontWeight="200" />
            </div>
            <div className="block w-fit bg-lime-600 px-3 py-1 rounded-xl mb-2">
              <span className="capitalize text-sm text-white">
                15% Off Interest
              </span>
            </div>
            <div className="block w-fit bg-red-600 px-3 py-1 rounded-xl">
              <span className="uppercase text-white text-sm">12% Off</span>
            </div>
            <div className="w-4/5 mx-auto h-44 rounded-3xl animate-pulse bg-yellow-100 my-4"></div>
            <Stars num={3} />
            <h2 className="text-sm capitalize line-clamp-3 h-16 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <div className="flex items-center justify-between text-sm capitalize border-b pb-5">
              <h4 className="text-blue-600 font-semibold">12,145 EGP</h4>
              <h4 className="text-gray-600 line-through">16,145 EGP</h4>
            </div>
            <div className="text-xs py-2">
              <p>
                From <span>836 EGP </span>/ 36 Months with Raya Installments
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border p-4">
            <div className="heart-icon">
              <GoHeart size={24} fontWeight="200" />
            </div>
            <div className="block w-fit bg-lime-600 px-3 py-1 rounded-xl mb-2">
              <span className="capitalize text-sm text-white">
                15% Off Interest
              </span>
            </div>
            <div className="block w-fit bg-red-600 px-3 py-1 rounded-xl">
              <span className="uppercase text-white text-sm">12% Off</span>
            </div>
            <div className="w-4/5 mx-auto h-44 rounded-3xl animate-pulse bg-yellow-100 my-4"></div>
            <Stars num={1} />
            <h2 className="text-sm capitalize line-clamp-3 h-16 my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, repudiandae excepturi?
            </h2>
            <div className="flex items-center justify-between text-sm capitalize border-b pb-5">
              <h4 className="text-blue-600 font-semibold">12,145 EGP</h4>
              <h4 className="text-gray-600 line-through">16,145 EGP</h4>
            </div>
            <div className="text-xs py-2">
              <p>
                From <span>836 EGP </span>/ 36 Months with Raya Installments
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border p-4">
            <div className="heart-icon">
              <GoHeart size={24} fontWeight="200" />
            </div>
            <div className="block w-fit bg-lime-600 px-3 py-1 rounded-xl mb-2">
              <span className="capitalize text-sm text-white">
                15% Off Interest
              </span>
            </div>
            <div className="block w-fit bg-red-600 px-3 py-1 rounded-xl">
              <span className="uppercase text-white text-sm">12% Off</span>
            </div>
            <div className="w-4/5 mx-auto h-44 rounded-3xl animate-pulse bg-yellow-100 my-4"></div>
            <Stars num={5} />
            <h2 className="text-sm capitalize line-clamp-3 h-16 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, facilis.
            </h2>
            <div className="flex items-center justify-between text-sm capitalize border-b pb-5">
              <h4 className="text-blue-600 font-semibold">12,145 EGP</h4>
              <h4 className="text-gray-600 line-through">16,145 EGP</h4>
            </div>
            <div className="text-xs py-2">
              <p>
                From <span>836 EGP </span>/ 36 Months with Raya Installments
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border p-4">
            <div className="heart-icon">
              <GoHeart size={24} fontWeight="200" />
            </div>
            <div className="block w-fit bg-lime-600 px-3 py-1 rounded-xl mb-2">
              <span className="capitalize text-sm text-white">
                15% Off Interest
              </span>
            </div>
            <div className="block w-fit bg-red-600 px-3 py-1 rounded-xl">
              <span className="uppercase text-white text-sm">12% Off</span>
            </div>
            <div className="w-4/5 mx-auto h-44 rounded-3xl animate-pulse bg-yellow-100 my-4"></div>
            <Stars num={0} />
            <h2 className="text-sm capitalize line-clamp-3 h-16 my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt, laudantium?
            </h2>
            <div className="flex items-center justify-between text-sm capitalize border-b pb-5">
              <h4 className="text-blue-600 font-semibold">12,145 EGP</h4>
              <h4 className="text-gray-600 line-through">16,145 EGP</h4>
            </div>
            <div className="text-xs py-2">
              <p>
                From <span>836 EGP </span>/ 36 Months with Raya Installments
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center my-5">
          <Link href="/" className="section-btn">
            <span className="ms-2 font-medium">Explore Offers</span>
            <span className="bg-blue-700 rounded-full p-2">
              <GoArrowUpRight size={20} className="text-white" />
            </span>
          </Link>
        </div>
      </section>

      <section className="my-10">
        <div className="text-center my-5">
          <h1 className="text-title">Best Sellers</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 py-5">
          <div className="relative bg-white rounded-3xl border p-4">
            <div className="heart-icon">
              <GoHeart size={24} fontWeight="200" />
            </div>
            <div className="block w-fit bg-lime-600 px-3 py-1 rounded-xl mb-2">
              <span className="capitalize text-sm text-white line-clamp-1">
                15% Off Interest
              </span>
            </div>
            <div className="block w-fit bg-blue-600 px-3 py-1 rounded-xl">
              <span className="text-white text-sm">Bestseller</span>
            </div>
            <div className="w-4/5 mx-auto h-44 rounded-3xl animate-pulse bg-yellow-100 my-4"></div>
            <Stars num={4} />
            <h2 className="text-sm capitalize line-clamp-3 h-16 my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae voluptate dolorem dolorum?
            </h2>
            <div className="flex items-center justify-between text-sm capitalize border-b pb-5">
              <h4 className="text-blue-600 font-semibold">12,145 EGP</h4>
              <h4 className="text-gray-600 line-through">16,145 EGP</h4>
            </div>
            <div className="text-xs py-2">
              <p>
                From <span>836 EGP </span>/ 36 Months with Raya Installments
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border p-4">
            <div className="heart-icon">
              <GoHeart size={24} fontWeight="200" />
            </div>
            <div className="block w-fit bg-lime-600 px-3 py-1 rounded-xl mb-2">
              <span className="capitalize text-sm text-white">
                15% Off Interest
              </span>
            </div>
            <div className="block w-fit bg-red-600 px-3 py-1 rounded-xl">
              <span className="uppercase text-white text-sm">12% Off</span>
            </div>
            <div className="w-4/5 mx-auto h-44 rounded-3xl animate-pulse bg-yellow-100 my-4"></div>
            <Stars num={3} />
            <h2 className="text-sm capitalize line-clamp-3 h-16 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h2>
            <div className="flex items-center justify-between text-sm capitalize border-b pb-5">
              <h4 className="text-blue-600 font-semibold">12,145 EGP</h4>
              <h4 className="text-gray-600 line-through">16,145 EGP</h4>
            </div>
            <div className="text-xs py-2">
              <p>
                From <span>836 EGP </span>/ 36 Months with Raya Installments
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border p-4">
            <div className="heart-icon">
              <GoHeart size={24} fontWeight="200" />
            </div>
            <div className="block w-fit bg-lime-600 px-3 py-1 rounded-xl mb-2">
              <span className="capitalize text-sm text-white">
                15% Off Interest
              </span>
            </div>
            <div className="block w-fit bg-red-600 px-3 py-1 rounded-xl">
              <span className="uppercase text-white text-sm">12% Off</span>
            </div>
            <div className="w-4/5 mx-auto h-44 rounded-3xl animate-pulse bg-yellow-100 my-4"></div>
            <Stars num={1} />
            <h2 className="text-sm capitalize line-clamp-3 h-16 my-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellat, repudiandae excepturi?
            </h2>
            <div className="flex items-center justify-between text-sm capitalize border-b pb-5">
              <h4 className="text-blue-600 font-semibold">12,145 EGP</h4>
              <h4 className="text-gray-600 line-through">16,145 EGP</h4>
            </div>
            <div className="text-xs py-2">
              <p>
                From <span>836 EGP </span>/ 36 Months with Raya Installments
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border p-4">
            <div className="heart-icon">
              <GoHeart size={24} fontWeight="200" />
            </div>
            <div className="block w-fit bg-lime-600 px-3 py-1 rounded-xl mb-2">
              <span className="capitalize text-sm text-white">
                15% Off Interest
              </span>
            </div>
            <div className="block w-fit bg-red-600 px-3 py-1 rounded-xl">
              <span className="uppercase text-white text-sm">12% Off</span>
            </div>
            <div className="w-4/5 mx-auto h-44 rounded-3xl animate-pulse bg-yellow-100 my-4"></div>
            <Stars num={5} />
            <h2 className="text-sm capitalize line-clamp-3 h-16 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Excepturi, facilis.
            </h2>
            <div className="flex items-center justify-between text-sm capitalize border-b pb-5">
              <h4 className="text-blue-600 font-semibold">12,145 EGP</h4>
              <h4 className="text-gray-600 line-through">16,145 EGP</h4>
            </div>
            <div className="text-xs py-2">
              <p>
                From <span>836 EGP </span>/ 36 Months with Raya Installments
              </p>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border p-4">
            <div className="heart-icon">
              <GoHeart size={24} fontWeight="200" />
            </div>
            <div className="block w-fit bg-lime-600 px-3 py-1 rounded-xl mb-2">
              <span className="capitalize text-sm text-white">
                15% Off Interest
              </span>
            </div>
            <div className="block w-fit bg-red-600 px-3 py-1 rounded-xl">
              <span className="uppercase text-white text-sm">12% Off</span>
            </div>
            <div className="w-4/5 mx-auto h-44 rounded-3xl animate-pulse bg-yellow-100 my-4"></div>
            <Stars num={0} />
            <h2 className="text-sm capitalize line-clamp-3 h-16 my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Incidunt, laudantium?
            </h2>
            <div className="flex items-center justify-between text-sm capitalize border-b pb-5">
              <h4 className="text-blue-600 font-semibold">12,145 EGP</h4>
              <h4 className="text-gray-600 line-through">16,145 EGP</h4>
            </div>
            <div className="text-xs py-2">
              <p>
                From <span>836 EGP </span>/ 36 Months with Raya Installments
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
