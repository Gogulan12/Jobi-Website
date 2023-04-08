import React from "react";
import ListingNavigation from "../JobListings/ListingNavigation";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import ListingIndivid from "../JobListings/ListingIndivid";

import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = "http://localhost:3000/jobsData?q=" + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div>
      <ListingNavigation />
      <h2 className="page-title">Search Results including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <ListingIndivid jobs={data} />}
    </div>
  );
}
