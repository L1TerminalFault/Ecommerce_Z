import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function SideBarButton({
  icon,
  title,
  selected,
  path,
}: Readonly<{
  icon: StaticImageData;
  title: string;
  selected: boolean;
  path: string;
}>) {
  return (
    <Link
      href={path}
      className={`${selected ? "bg-gray-950 gap-3 px-5" : "gap-0 px-3"} overflow-hidden max-md:sm:gap-3 max-md:sm:px-5 flex align-middle md:group-hover:gap-3 md:group-hover:p-2 md:rounded-full md:gap-0 md:group-hover:px-5 md:px-3 py-2 md:group-hover:rounded-xl rounded-full transition-all hover:bg-gray-950`}
    >
      <Image
        alt=""
        width={30}
        height={30}
        src={icon}
        className={`${selected ? "opacity-100" : "opacity-80 md:opacity-40"} transition-all size-5 md:mt-[1.9px] mt-px`}
      />
      <div
        className={`${selected ? "delay-100 duration-200 max-sm:w-[70px] opacity-100" : "max-sm:w-0 opacity-80 md:opacity-60"} md:group-hover:w-20 md:w-0 overflow-hidden transition-all md:text-base text-sm`}
      >
        {title}
      </div>
    </Link>
  );
}
