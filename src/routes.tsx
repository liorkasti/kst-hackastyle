import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const HomeScreen = lazy(() => import('./screens/HomeScreen'));
const ClothingListScreen = lazy(() => import('./screens/ClothingListScreen'));
const SavedSetsScreen = lazy(() => import('./screens/SavedSetsScreen'));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/clothing-list" element={<ClothingListScreen />} />
          <Route path="/saved-sets" element={<SavedSetsScreen />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
