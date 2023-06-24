import { notFound } from "next/navigation";
import { CountryInfo } from "@/app/types";
import Link from "next/link";
interface PageProps {
  params: {
    name: string;
  };
}
const fetchCountryInfo = async (name: string) => {
  if (name.endsWith("-code")) {
    name = name.slice(0, -5);
    const res2 = await fetch(`https://restcountries.com/v3.1/alpha/${name}`, {
      cache: "no-cache",
    });
    if (!res2.ok) return notFound();
    return res2.json();
  } else {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`, {
      cache: "no-cache",
    });
    if (!res.ok) {
      return notFound();
    }
    return res.json();
  }
};
const showCountryInfo = async ({ params: { name } }: PageProps) => {
  const cntry: CountryInfo[] = await fetchCountryInfo(name);
  if (cntry.length === 0 || cntry.length > 1) return notFound();
  return (
    <>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center">
        {cntry.map((e) => (
          <>
            <div className=" w-[100%] sm:w-[40%] h-fit flex px-10 py-12 justify-start items-start">
              <img
                className="object-cover"
                src={e.flags.png}
                width={500}
                height={400}
                alt={`${
                  e.flags.alt === undefined ? e.name.official : e.flags.alt
                } flag`}
              />
            </div>
            <div className="w-[100%] pl-6 sm:w-[60%] sm:pl-0">
              <div>
                <div className="text-lg font-high flex justify-start text-justify items-start sm:items-center my-4 px-3 py-3">
                  {e.name.official}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-start sm:items-center flex-1 my-4 px-3 py-3">
                <div className="flex-1">
                  <div className="font-mid my-2">
                    Native Name:{" "}
                    <span className="font-low">
                      {
                        e.name.nativeName[Object.keys(e.name.nativeName)[0]]
                          .official
                      }
                    </span>
                  </div>
                  <div className="font-mid my-2">
                    Population:{" "}
                    <span className="font-low">
                      {e.population.toLocaleString()}
                    </span>
                  </div>
                  <div className="font-mid my-2">
                    Region: <span className="font-low">{e.region}</span>
                  </div>
                  <div className="font-mid my-2">
                    Sub Region: <span className="font-low">{e.subregion}</span>
                  </div>
                  <div className="font-mid my-2">
                    Capital:{" "}
                    <span className="font-low">
                      {e.capital === undefined ? "None" : e.capital}
                    </span>
                  </div>
                </div>
                <div className="flex-1 ">
                  <div className="font-mid my-2">
                    Top Level Domain:{" "}
                    <span className="font-low">{e.tld.join(", ")}</span>
                  </div>
                  <div className="font-mid my-2">
                    Currencies:{" "}
                    <span className="font-low">
                      {e.currencies[Object.keys(e.currencies)[0]].name}
                    </span>
                  </div>
                  <div className="font-mid my-2">
                    Languages:{" "}
                    <span className="font-low">
                      {Object.keys(e.languages).map((key, index) => {
                        const language = e.languages[key];
                        const languageNames = Array.isArray(language)
                          ? language.join(", ")
                          : language;
                        return (
                          <span key={index}>
                            {`${languageNames}`}
                            {index < Object.keys(e.languages).length - 1
                              ? ", "
                              : ""}
                          </span>
                        );
                      })}
                    </span>
                  </div>
                </div>
              </div>
              <div className="my-4 px-3 py-3">
                {e.borders !== undefined ? (
                  <div className="w-full h-fit flex flex-col sm:flex-row justify-start items-start sm:items-center">
                    <span className="font-mid pr-2">Border Countries: </span>
                    <div className="flex flex-row flex-wrap items-center justify-start">
                      {e.borders.map((e2) => {
                        return (
                          <Link href={`/country/${e2}-code`}>
                            <div
                              id="neiBtn"
                              className="border-none cursor-pointer countryBtnShadowLight w-[100px] h-[25px]  flex justify-center items-center mx-0 m-3 sm:m-1 sm:mx-3"
                            >
                              {e2}
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default showCountryInfo;
