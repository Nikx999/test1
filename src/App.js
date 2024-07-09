import React, {lazy, Suspense} from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import PostPage from './pages/PostPage';

const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
    </header>
    <main>
      
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </Suspense>
    </main>
  </div>
);

export default App;
