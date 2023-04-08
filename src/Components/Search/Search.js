import React from "react";
import ListingNavigation from "../JobListings/ListingNavigation";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import ListingIndivid from "../JobListings/ListingIndivid";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

import "./Search.css";

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  // const url = "http://localhost:3000/jobsData?q=" + query;
  // const { error, isPending, data } = useFetch(url);

  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    const unsub = projectFirestore
      .collection("jobsData")
      .onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError("There are no such job post");
          setIsPending(false);
        } else {
          let searchResults = [];
          snapshot.docs.forEach((doc) => {
            if (doc.data().title.toLowerCase().includes(query.toLowerCase())) {
              searchResults.push({ id: doc.id, ...doc.data() });
            }
          });
          setData(searchResults);
          setIsPending(false);
        }
      });
    return () => unsub();
  }, [query]);

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
