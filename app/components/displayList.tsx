import { Country } from "../types";
import Link from "next/link";
interface Props {
  countries: Country[];
}

const CountryList: React.FC<Props> = ({ countries }) => {
  return (
    <>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 cursor-pointer">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-center items-center">
          {countries.map((country) => (
                <Link href={`/country/${country.name.official}`}>
            <div
              key={country.name.official}
              className="w-full h-[450px] max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 cursor-pointer lightModeNav "
              id="cardBody"
            >
              <img
                className="object-cover w-full h-56"
                src={country.flags.png}
                alt={`${country.flags.alt===undefined?country.name.official:country.flags.alt} flag`}
              />
              <div className="py-5 pl-5 text-start">
                <div className="font-high w-full my-3 text-lg">
                  {country.name.official}
                </div>
                <p>
                  <span className="font-mid text-homepageItems">
                    Population:
                  </span>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-mid text-homepageItems">
                    Region:
                  </span>{" "}
                  {country.region}
                </p>
                <p>
                  <span className="font-mid text-homepageItems">
                    Capital:
                  </span>{" "}
                  {country.capital===undefined?"None":country.capital}
                </p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CountryList;
