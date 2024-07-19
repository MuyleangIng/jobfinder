import axios from "axios";
import { BASE_URL } from "./api";

export const getJobs = async (page, pageSize = 12) => {
  const jobsPerPage = 10; // Number of jobs per page returned by the API
  let jobs = [];
  let currentPage = page;
  let totalJobs = 0;

  // Fetch data from multiple pages to get the required number of jobs
  while (
    jobs.length < pageSize &&
    (jobs.length + jobsPerPage * (currentPage - page) < totalJobs ||
      totalJobs === 0)
  ) {
    const response = await axios.get(`${BASE_URL}jobs/`, {
      params: {
        page: currentPage,
        pageSize: jobsPerPage,
      },
    });

    const { results, count } = response.data;

    if (totalJobs === 0) {
      totalJobs = count; // Set totalJobs on the first fetch
    }

    jobs = jobs.concat(results);

    if (results.length < jobsPerPage) {
      break; // No more jobs available
    }

    currentPage++;
  }

  // Return only the number of jobs needed to fill the page
  return {
    jobs: jobs.slice(0, pageSize),
    totalJobs: totalJobs,
  };
};

// Fetch job by ID
export const getJobById = async (jobId) => {
  const response = await axios.get(`${BASE_URL}jobs/${jobId}/`);
  return response.data;
};

export const getAllJobs = async () => {
  let allJobs = [];
  let page = 1;
  let pageSize = 10;
  let totalJobs = 0;
  let hasMore = true;

  while (hasMore) {
    const response = await axios.get(`${BASE_URL}jobs/`, {
      params: {
        page: page,
        pageSize: pageSize,
      },
    });
    const { results, count } = response.data;
    allJobs = [...allJobs, ...results];
    totalJobs = count;
    hasMore = allJobs.length < totalJobs;
    page += 1;
  }
  return {
    jobs: allJobs,
    totalJobs: totalJobs,
  };
};
