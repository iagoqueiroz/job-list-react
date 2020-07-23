import React from "react";

export default ({ job, onAddFilter }) => {
  const languages = job.languages;
  const features = languages.concat(job.tools);

  return (
    <div
      className={
        "transition duration-200 ease-in-out transform translate-y-0 hover:-translate-y-1 bg-white p-4 shadow-lg hover:shadow-xl flex mb-4 rounded-md items-center border-l-4 border-white" +
        (job.featured ? " border-teal-600" : "")
      }
    >
      <div className="job_logo mr-4">
        <img src={job.logo} className="w-16" alt={job.company} />
      </div>
      <div className="job_info">
        <div className="company_name text-sm text-teal-500 font-semibold flex items-center">
          {job.company}
          {job.new ? (
            <span className="text-xs font-normal ml-3 rounded-full bg-teal-500 text-white px-2 uppercase">
              New!
            </span>
          ) : null}
          {job.featured ? (
            <span className="text-xs font-normal ml-3 rounded-full bg-teal-900 text-white px-2 uppercase">
              Featured
            </span>
          ) : null}
        </div>
        <div className="job_position font-bold py-1 cursor-pointer hover:text-teal-500 transition duration-200 ease">
          {job.position}
        </div>
        <div className="job_at text-sm text-gray-600">
          <ul className="flex items-center">
            <li className="posted_at mr-2">{job.postedAt}</li>
            <li className="mr-2">•</li>
            <li className="contract mr-2">{job.contract}</li>
            <li className="mr-2">•</li>
            <li className="location">{job.location}</li>
          </ul>
        </div>
      </div>
      <div className="job_features ml-auto">
        <ul className="flex text-sm">
          {features.map(feature => (
            <li
              key={feature}
              onClick={() => onAddFilter(feature)}
              className="cursor-pointer hover:bg-teal-700 hover:text-teal-100 antialiased ml-2 rounded bg-teal-100 px-3 py-1 text-teal-700 font-semibold transition duration-200 ease"
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
