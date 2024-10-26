import CountryDetailCard from "@/app/components/CountryDetailCard/card";
import { CountryDetails } from "@/types/type";
import React from "react";


function CountriesName({ params }: { params: { country_name: string } }) {
  const countrydetails: CountryDetails[] = [
    {
      name: "Italy",
      population: 59280820,
      capital: "Rome",
    },
    {
      name: "Germany",
      population: 84552242,
      capital: "Berlin",
    },
    {
      name: "Qatar",
      population: 3048423,
      capital: "Doha",
    },
    {
      name: "UAE",
      population: 11027129,
      capital: "Abu Dhabi",
    },
    {
      name: "Oman",
      population: 5281538,
      capital: "Muscat",
    },
  ];

  const country = countrydetails.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );
  if (!country) {
    return <h1>Country not found</h1>;
  }

  return (
    <div>
      <CountryDetailCard
        name={country.name}
        population={country.population}
        capital={country.capital}
      />
    </div>
  );
}

export default CountriesName
