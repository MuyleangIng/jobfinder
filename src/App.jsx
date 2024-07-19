import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import {
  selectAllJobCategories,
  getJobCategoriesStatus,
  fetchJobCategories,
} from './redux/features/category-job/categorySlice';
import HomePage from './pages/HomePage';
import './App.css';
import Metadata from './lib/Metadata';
import useThrottleScroll from './common/useThrottleScroll';

function App() {
  const dispatch = useDispatch();
  const categories = useSelector(selectAllJobCategories);
  const status = useSelector(getJobCategoriesStatus);
  // const error = useSelector(getJobCategoriesError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchJobCategories());
    }
  }, [status, dispatch]);

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
    <>
      <Metadata
        title="Home"
        description="Welcome to the Job Finder website"
        author="Piseth Sattya"
        keywords="jobs, careers, employment"
        thumbnail="https://ecommerce.techinsights.guru/file/3d3e78e2-5f53-4d18-8818-7b01f9cef98c.png"
        url="https://jobquick.techinsights.guru/"
        type="website"
      />
      <HomePage categories={categories} isLoading={status === 'loading'} />
    </>
  );
}

export default App;
