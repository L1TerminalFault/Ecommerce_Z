"use client";

import { usePathname } from "next/navigation";

export default function TitlePath({ classname }: { classname?: string }) {
  const path = usePathname();

  return (
    <div className={`${classname || ""} text-gray-400 text-sm pl-8 pt-5 pb-2`}>
      {`${path.charAt(1).toUpperCase() + path.split("/")[1].slice(1)}`}

      {path.split("/")[2] ? (
        <span>
          <span style={{ fontFamily: "Iosevka Nerd Font" }}>{" > "}</span>
          {path.split("/")[2]}
        </span>
      ) : null}
    </div>
  );
}
