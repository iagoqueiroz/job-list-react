import React, { useState, useEffect } from "react";
import data from "./data/data.json";
import "./tailwind.output.css";
import "./styles.css";

import FiltersComponent from "./components/FiltersComponent";
import JobComponent from "./components/JobComponent";

export default function App() {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  function addFilter(filter) {
    if (filters.includes(filter)) return false;

    setFilters([...filters, filter]);
  }

  function removeFilter(filter) {
    if (!filters.includes(filter)) return false;

    setFilters(filters.filter(f => f !== filter));
  }

  useEffect(() => {
    const jobsFiltered = data.filter(job => {
      const features = job.languages.concat(job.tools);

      if (!features.length) return true;

      return filters.every(f => features.includes(f));
    });

    setJobs(jobsFiltered);
  }, [filters]);

  return (
    <div className="App">
      <div className="bg-teal-900 py-5">
        <h1 className="text-4xl font-bold text-center text-white">Job Lists</h1>
      </div>
      <div id="wrapper">
        {filters.length ? (
          <FiltersComponent
            filters={filters}
            onRemoveFilter={removeFilter}
            onResetFilters={() => setFilters([])}
          />
        ) : null}
        <div id="jobs_list">
          {jobs.map(job => (
            <JobComponent key={job.id} job={job} onAddFilter={addFilter} />
          ))}
        </div>
      </div>
    </div>
  );
}
