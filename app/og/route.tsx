/* eslint react/no-unknown-property: ['error', { ignore: ['tw'] }] */
// import { NextraLogo } from "@components/icons";
import Image from "next/image";
import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
const fontPath = join(process.cwd(), "app/og/Inter-SemiBold.otf");
const font = readFileSync(fontPath); // eslint-disable-next-line unicorn/prefer-top-level-await -- this will break og image
// const font = fetch(new URL("Inter-SemiBold.otf", import.meta.url)).then((res) =>
//   res.arrayBuffer(),
// );

export async function GET(req: Request): Promise<Response> {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const title =
      searchParams.get("title")?.slice(0, 75) || "Nextra Documentation";

    return new ImageResponse(
      (
        <div
          tw="text-white px-20 py-[70px] bg-[#030303] h-full w-full flex justify-between flex-col"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)",
            backgroundSize: "100px 100px",
            backgroundPosition: "-30px -10px",
          }}
        >
          <Image alt="Logo" src="/img/ezrah-logo-white.png" height="40" />
          <h1
            tw="text-transparent text-[82px] m-0 mb-10 tracking-tighter leading-[1.1]"
            style={{
              textShadow: "0 2px 30px #000",
              backgroundImage: "linear-gradient(90deg, #fff 40%, #aaa)",
              backgroundClip: "text",
              // To preserve new line
              whiteSpace: "pre",
            }}
          >
            {title}
          </h1>
          <p tw="m-0 text-3xl tracking-tight">Credentials that scale</p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "inter",
            data: await font,
            style: "normal",
          },
        ],
      },
    );
  } catch (error) {
    console.error(error);
    return new Response("Failed to generate the image", { status: 500 });
  }
}
