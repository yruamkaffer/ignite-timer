import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts/DefaultLayout/index.tsx';
import { History } from './pages/History/index.tsx';
import { Home } from './pages/Home/index.tsx';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='history' element={<History />} />
      </Route>
    </ Routes>
  );
}