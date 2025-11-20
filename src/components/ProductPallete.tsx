import Image, { StaticImageData } from "next/image";

export default function ProductPallete({
  image,
  price,
  name,
}: {
  image: StaticImageData;
  price: number;
  name: string;
}) {
  return (
    <div className="flex flex-col gap-2 p-2 rounded-3xl hover:bg-white/5 transition-all">
      <div className="w-40 h-48 flex items-center bg-white/5 justify-center overflow-hidden rounded-2xl">
        <Image alt="" width={200} height={200} src={image} className="w-full" />
      </div>
      <div className="flex flex-col px-2 text-sm">
        <div className="text-lg">${price.toFixed(2)}</div>
        <div className="text-xs text-gray-400">{name}</div>
      </div>
    </div>
  );
}
