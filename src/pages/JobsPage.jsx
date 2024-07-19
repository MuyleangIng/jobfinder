import React, { useEffect, useCallback } from 'react';
import { Pagination } from '../Components/card/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchJobs,
  selectCurrentPage,
  selectPageSize,
  selectJobs,
  selectTotalJobs,
} from '../redux/jobs/jobsSlice';
import { CardComponent } from '../Components/feat-jobs/CardComponent';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Metadata from '../lib/Metadata';
import useThrottleScroll from '../common/useThrottleScroll'; // Import the custom hook

const JobsPage = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectJobs);
  const currentPage = useSelector(selectCurrentPage);
  const pageSize = useSelector(selectPageSize);
  const totalJobs = useSelector(selectTotalJobs);
  const status = useSelector((state) => state.jobs.status);

  useEffect(() => {
    dispatch(fetchJobs({ page: currentPage, pageSize }));
  }, [dispatch, currentPage, pageSize]);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS animations when jobs change
  }, [jobs]);

  const saveScrollPosition = useCallback(() => {
    localStorage.setItem('scrollPosition', window.scrollY);
  }, []);

  useThrottleScroll(saveScrollPosition, 200);

  useEffect(() => {
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }
  }, []);

  return (
    <section>
      <Metadata
        title="Jobs"
        description="Browse available jobs"
        author="Your Name"
        keywords="jobs, careers, employment"
        thumbnail="https://job-quick-api.techinsights.guru/media/uploads/hero-section.png"
        url="https://jobquick.techinsights.guru/jobs" 
        type="website"
      />
      <header className="mt-20">
        <h1 className="text-blue-600 font-kantumruy text-4xl text-start font-bold">
          Job Listing
        </h1>
      </header>
      {status === "loading" && (
        <div className="grid gap-5 mt-10 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: pageSize }).map((_, index) => (
            <div
              key={index}
              className="p-6 w-full max-w-xs mx-auto animate-pulse bg-white rounded-lg border border-gray-200 shadow-md"
            >
              <div className="flex gap-5 justify-between items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                <div className="w-20 h-6 rounded bg-gray-300"></div>
              </div>
              <div className="w-3/4 h-6 rounded bg-gray-300 mb-4"></div>
              <div className="flex gap-2 justify-between mb-4">
                <div className="w-1/3 h-4 rounded bg-gray-300"></div>
                <div className="w-1/4 h-4 rounded bg-gray-300"></div>
              </div>
              <div className="h-20 bg-gray-300 rounded mb-4"></div>
              <div className="w-3/4 h-9 rounded bg-gray-300 mx-auto"></div>
            </div>
          ))}
        </div>
      )}
      {status === "failed" && <p>Error loading jobs.</p>}
      {status === "succeeded" && (
        <>
          <div className="grid gap-8 mt-10 justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {jobs.length > 0 ? (
              jobs.map((job) => <CardComponent key={job.id} job={job} />)
            ) : (
              <p>No jobs available</p>
            )}
          </div>
          <div className="text-center py-10">
            <Pagination isLoading={status === "loading"} />
          </div>
        </>
      )}
    </section>
  );
};

export default JobsPage;
