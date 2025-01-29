import { lazy, Suspense } from 'react';
const Banner = lazy(() => import('./Components/Banner.jsx'));
const Company = lazy(() => import('./Components/Company.jsx'));
const Header = lazy(() => import('./Components/Header.jsx'));
const Mentors = lazy(() => import('./Components/Mentors.jsx'));
const Result = lazy(() => import('./Components/Result.jsx'));
const Reviews = lazy(() => import('./Components/Reviews.jsx'));
const Services = lazy(() => import('./Components/Services.jsx'));

const App = () => {
  return (
    <div className="bg-gray-900 h-screen">
      <Header />
      <Suspense fallback={<div className="text-white text-center mt-5">Loading...</div>}>
        <Banner />
        <Result />
        <Services />
        <Mentors />
        <Reviews />
        <Company />
      </Suspense>
    </div>
  );
};

export default App;
