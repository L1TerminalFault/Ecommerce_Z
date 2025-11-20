import {
  FaShirt as Cloth,
  FaBook as Book,
  FaGears as Service,
} from "react-icons/fa6";
import Link from "next/link";

import ProductPallete from "@/components/ProductPallete";
import f from "@/../public/IMG_20251112_155844_707.jpg";
import j from "@/../public/IMG_20251112_155853_495.jpg";
import t from "@/../public/IMG_20251112_155853_682.jpg";
import r from "@/../public/IMG_20251112_155902_006.jpg";
import w from "@/../public/IMG_20251112_155902_448.jpg";
import o from "@/../public/IMG_20251112_155853_932.jpg";
import a from "@/../public/IMG_20251112_155901_851.jpg";
import b from "@/../public/IMG_20251112_155901_897.jpg";
import c from "@/../public/IMG_20251112_155902_174.jpg";
import d from "@/../public/IMG_20251112_155902_292.jpg";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="slide-to-left">
      <div className="">
        <div className="flex flex-col p-3 pb-0 gap-3">
          <div className="text-lg text-gray-300">Categories</div>

          <div className="flex max-md:justify-around justify-start md:pl-12 md:gap-12">
            <Link
              href={"/products"}
              className="flex flex-col transition-all gap-3 px-4 py-2 rounded-lg items-center hover:bg-white/5"
            >
              <Cloth size={35} />
              <div className="text-base">Clothes</div>
            </Link>
            <Link
              href={"/products?section=books"}
              className="flex flex-col transition-all gap-3 p-4 py-2 rounded-lg items-center hover:bg-white/5 "
            >
              <Book size={35} />
              <div className="text-base">Books</div>
            </Link>
            <Link
              href={"/products?section=services"}
              className="flex flex-col transition-all gap-3 p-4 py-2 rounded-lg items-center hover:bg-white/5 "
            >
              <Service size={35} />
              <div className="text-base">Services</div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col p-3 gap-3">
          <div className="text-lg text-gray-300">New</div>

          <div className="p-2">
            <div className="rounded-2xl bg-white/5 flex items-center justify-between">
              <div className="py-20 w-1/2 flex flex-col items-center justify-center text-base text-gray-200">
                <div>
                  <div className="text-2xl">$199,999.00</div>
                  <div className="text-gray-400">Product name</div>
                  <div className="text-sm text-gray-400">
                    Product description goes here
                  </div>
                </div>
              </div>

              {/* TODO: put the image here instead of this <div> */}
              <div className="h-full w-1/2 flex items-center justify-center text-sm text-gray-500">
                PlaceholderImage
              </div>
              {/* <Image
                alt=""
                width={90}
                height={60}
                src={}
                className=""
              /> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col p-3 gap-3">
          <div className="text-lg text-gray-300">Top Picks</div>

          <div className="flex justify-between scrollbar-hidden gap-4 overflow-scroll">
            <ProductPallete image={f} price={34999} name="Product one" />
            <ProductPallete image={t} price={98499} name="Product two" />
            <ProductPallete image={j} price={56999} name="Product three" />
            <ProductPallete image={r} price={98499} name="Product four" />
            <ProductPallete image={w} price={45999} name="Product five" />
            <ProductPallete image={a} price={45999} name="Product six" />
            <ProductPallete image={b} price={45999} name="Product seven" />
            <ProductPallete image={c} price={45999} name="Product eight" />
            <ProductPallete image={d} price={45999} name="Product nine" />
            <ProductPallete image={o} price={58499} name="Product ten" />
          </div>
        </div>

        <div className="flex flex-col p-3 gap-3">
          <div className="text-lg text-gray-300">Advertisement</div>

          <div className="p-2">
            <div className="rounded-2xl bg-white/5 flex items-center justify-between">
              <div className="w-1/2 py-28 flex-col flex justify-center items-center text-base text-gray-200">
                <div>
                  <div className="">Ad section</div>
                </div>
              </div>

              {/* TODO: put the image here instead of this <div> */}
              <div className="h-full w-1/2 flex items-center justify-center text-sm text-gray-500">
                PlaceholderImage
              </div>
              {/* <Image
                alt=""
                width={90}
                height={60}
                src={}
                className=""
              /> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col p-3 gap-3">
          <div className="text-lg text-gray-300">Upcoming </div>
          <div className="p-2">
            <div className="rounded-2xl bg-white/5 flex items-center justify-between">
              <div className="w-1/2 py-20 flex flex-col justify-center items-center text-base text-gray-200">
                <div>
                  <div className="text-2xl">$79,999.00</div>
                  <div className="text-gray-400">Product name</div>
                  <div className="text-sm text-gray-400">
                    Product description goes here
                  </div>
                </div>
              </div>

              {/* TODO: put the image here instead of this <div> */}
              <div className="h-full w-1/2 flex items-center justify-center text-sm text-gray-500">
                PlaceholderImage
              </div>
              {/* <Image
                alt=""
                width={90}
                height={60}
                src={}
                className=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
