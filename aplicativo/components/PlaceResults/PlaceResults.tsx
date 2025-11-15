import React, { useState } from "react";
import SearchBar from "./SearchBar";
import FilterPlaces from "./FilterPlaces";

const places = [
  { id: "1", name: "Hospital São Lucas" },
  { id: "2", name: "Hospital Central" },
  { id: "3", name: "Hospital Vida" },
  { id: "4", name: "Hospital Esperança" }
];

export default function PlaceResults() {
  const [query, setQuery] = useState("");
  const filtered = places.filter(
    place => place.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <SearchBar value={query} onChange={setQuery} />
      <FilterPlaces destinations={filtered} />
    </>
  );
}