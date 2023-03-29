import React from "react";
import JobPostFooter from "../Components/JobPosting/JobPostFooter";
import JobPostInfo from "../Components/JobPosting/JobPostInfo";

import JobPostNavigation from "../Components/JobPosting/JobPostNavigation";
import JobPostRelated from "../Components/JobPosting/JobPostRelated";

export default function JobPage() {
  return (
    <div>
      <JobPostNavigation />
      <JobPostInfo />
      <JobPostRelated />
      <JobPostFooter />
    </div>
  );
}
