import type { FC } from "react";
import { Cards } from "nextra/components";
// import {} from "nextra/";
//
//
const sections = [
  {
    title: "Overview",
    href: "/docs",
  },
  {
    title: "Ezrah Creds SDK",
    href: "/docs/creds/creds-sdk",
  },
  {
    title: "Ezrah Credential Wallet SDK",
    href: "",
  },
  {
    title: "Ezrah Encrypted Cloud Wallet",
    href: "",
  },
];

const IndexPage: FC = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="container min-h-screen">
          <div className="flex md:mx-[100px] mt-[150px] flex-col mb-[140px]">
            <h3 className="text-6xl pb-5 text-left">Build with Ezrah</h3>
            <p className="text-base text-left">
              At Ezrah Labs, we're building the future of decentralized
              Identity. Integrate programmable, and easily customizable for
              partners and businesses looking to make this a reality, Looking to
              learn more about our process and experience, and how you can
              integrate with us? look no further than these documentations.
            </p>
          </div>
          <div className="flex md:mx-[100px] flex-row">
            <h3 className="text-center text-2xl">Let's get started</h3>
            <div className="divide-neutral-100"></div>
          </div>
          <div className="flex flex-row mt-4 mb-4">
            <div className="mx-auto flex-row flex gap-4 justify-items-center">
              {sections.map((item, index) => {
                return (
                  <Cards.Card
                    key={index}
                    title={item.title}
                    href={item.href}
                    arrow={true}
                  />
                );
              })}
              {/* <Cards.Card */}
              {/*   title="Understanding decentralized id" */}
              {/*   href="/decentralized-id" */}
              {/*   arrow={true} */}
              {/* /> */}
              {/* <Cards.Card */}
              {/*   title="Understanding decentralized id" */}
              {/*   href="/decentralized-id" */}
              {/*   arrow={true} */}
              {/* /> */}

              {/* <div className="flex border-1 border-b-gray-700 w-[500px] rounded-xl p-2"> */}
              {/*   <h3> */}
              {/**/}
              {/*   </h3> */}
              {/*   <p> */}
              {/*   </p> */}
              {/* </div> */}
              {/* <div className="flex border-1 border-b-gray-700 w-[500px] runded-xl p-2"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
