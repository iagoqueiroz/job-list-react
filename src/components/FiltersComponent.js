import React from "react";

export default ({ filters, onRemoveFilter, onResetFilters }) => (
  <div
    id="filters"
    className="flex bg-white rounded-md px-8 py-4 mb-5 shadow-lg"
  >
    <ul className="flex flex-wrap">
      {filters.map(filter => (
        <li
          key={filter}
          className="bg-gray-200 text-sm font-semibold text-teal-700 flex items-center rounded overflow-hidden mr-3"
        >
          <span className="px-3 py-1">{filter}</span>
          <button
            onClick={() => onRemoveFilter(filter)}
            className="hover:bg-teal-800 bg-teal-700 text-white px-2 py-1 focus:outline-none transition duration-200 ease"
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
    <button
      onClick={onResetFilters}
      className="focus:outline-none ml-auto text-sm font-semibold text-teal-700 hover:underline"
    >
      Clear
    </button>
  </div>
);
