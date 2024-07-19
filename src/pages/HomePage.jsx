// HomePage.jsx
import React, { useEffect, useCallback } from 'react';
import SliderComponent from '../Components/home/SliderComponent';
import HeroSectionComponent from '../Components/home/HeroSectionComponent';
import SearchComponent from '../Components/home/SearchComponent';
import PositionCardComponent from '../Components/home/PositionCardComponent';
import AdvertisingComponent from '../Components/home/AdvertisingComponent';
import FeatureDetailComponent from '../Components/home/FeatureDetailComponent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllJobs, selectAllJobs, selectStatus } from '../redux/jobs/jobsSlice';
import useThrottleScroll from '../common/useThrottleScroll';


const HomePage = ({ categories }) => {
  const dispatch = useDispatch();
  const jobs = useSelector(selectAllJobs);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(fetchAllJobs());
  }, [dispatch]);

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
    <div className="container mx-auto p-4">
      <HeroSectionComponent isLoading={status === 'loading'} />
      <SliderComponent />
      <SearchComponent categories={categories} isLoading={status === 'loading'} />
      <PositionCardComponent jobs={jobs} isLoading={status === 'loading'} />
      <AdvertisingComponent />
      <FeatureDetailComponent />
    </div>
  );
};

export default HomePage;
