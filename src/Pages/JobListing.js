import React from "react";
import ListingFooter from "../Components/JobListings/ListingFooter";
import ListingNav from "../Components/JobListings/ListingNavigation";
import ListingSearch from "../Components/JobListings/ListingSearch";

export default function JobListing() {
  return (
    <div>
      <ListingNav />
      <ListingSearch />
      <ListingFooter />
    </div>
  );
}
