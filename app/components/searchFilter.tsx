import { useEffect, useState } from "react";
import Image from "next/image";
import SearchIcon from "../assets/search-icon.svg";
import SearchIconWhite from "../assets/search-icon-white.svg";
import { Country } from "../types";
import CountryList from "./displayList";
import data from "../assets/data.json";
import LoadingPage from "./LoadingPage";

export default function SearchFilter() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [allCountries, setAllCountries] = useState<Country[]>([]);
  const [filterAllCountries, setFilterAllCountries] = useState<Country[]>([]);
  const [searchOptionCountries, setSearchOptionCountries] = useState<Country[]>(
    []
  );
  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTheme, setIsTheme] = useState<boolean>(true);
  const [searchCountry, setSearchCountry] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (response.ok) {
          const latestData = await response.json();
          setCountries(latestData);
          setAllCountries(latestData);
          setFilterAllCountries(latestData);
          setSearchOptionCountries(latestData);
          setLoading(false);
        } else {
          setCountries(data);
          setAllCountries(data);
          setSearchOptionCountries(data);
          setFilterAllCountries(data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
        setCountries(data);
        setAllCountries(data);
        setSearchOptionCountries(data);
        setFilterAllCountries(data);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const optionHandle = () => {
    setIsOpen(!isOpen);
    setIsTheme(
      document.querySelector("#options-menu")?.classList.contains("darkModeNav")
        ? false
        : true
    );
  };

  const handleOptionClick = (option: string) => {
    if (option === "All") {
      setCountries(allCountries);
      setSearchOptionCountries(allCountries);
      setFilterAllCountries(allCountries);
    } else {
      const filterCountries: Country[] = allCountries.filter(
        (e) => option === e.region
      );
      setCountries(filterCountries);
      setSearchOptionCountries(filterCountries);
      setFilterAllCountries(filterCountries);
    }
    setIsOpen(false);
    setIsTheme(
      document.querySelector("#options-menu")?.classList.contains("darkModeNav")
        ? false
        : true
    );
  };
  const searchCountries = (event: React.ChangeEvent<HTMLInputElement>) => {
    let query = event.target.value;
    if (query === "") {
      setCountries(filterAllCountries);
      setSearchOptionCountries(filterAllCountries);
    } else {
      const filterNewCountries: Country[] = searchOptionCountries.filter((e) =>
        e.name.official.toLowerCase().includes(query.toLowerCase())
      );
      setCountries(filterNewCountries);
    }
  };
  if (loading) return <LoadingPage />;
  else
    return (
      <>
        <div className="flex w-full justify-center h-fit items-center pl-3">
          <div className="flex w-[96%] flex-col sm:flex-row justify-between items-start sm:items-center my-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-10 pointer-events-none">
                <Image
                  src={SearchIcon}
                  className="block"
                  width={20}
                  height={20}
                  alt="Search Options"
                  id="search-icon-black"
                />
                <Image
                  src={SearchIconWhite}
                  className="hidden"
                  width={20}
                  height={20}
                  alt="Search Options"
                  id="search-icon-white"
                />
              </div>
              <input
                type="search"
                id="default-search"
                value={searchCountry}
                onChange={(e) => setSearchCountry(e.target.value)}
                onInput={searchCountries}
                className="lightModeNav block min-w-full md:w-[500px] p-4 pl-20 text-homepageItems text-gray-900 border-none bg-gray-50 focus:ring-blue-500 dark:bg-gray-700 dark:placeholder-gray-400 focus:border-none focus:outline-none dark:text-white dark:focus:ring-blue-500"
                placeholder="Search for a country..."
              />
            </div>
            <div className="relative inline-block text-left my-4">
              <div>
                <button
                  type="button"
                  className="lightModeNav inline-flex justify-center w-56 border-none shadow-sm px-4 py-4 bg-white focus:border-none text-homepageItems font-mid text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  onClick={optionHandle}
                >
                  Filter By Region
                  <svg
                    className="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" d="M10 14l-5-5h10l-5 5z" />
                  </svg>
                </button>
              </div>
              {isOpen && (
                <div
                  id="options-item"
                  className={`${
                    isTheme ? "lightModeNav" : "darkModeNav"
                  } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {options.map((option) => (
                      <a
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                        id="options-lists"
                      >
                        {option}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <CountryList countries={countries} isTheme={isTheme} />
      </>
    );
}
