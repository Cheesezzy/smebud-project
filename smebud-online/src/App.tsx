import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AvailableListingGridView from './pages/DashboardOverview/AvailableListingGridView';
import DashboardOverviewScreen from './pages/DashboardOverview/DashboardOverviewScreen';
import AvailableListingListView from './pages/DashboardOverview/AvailableListingListView';
import AddListingScreen from './pages/DashboardOverview/AddListing';
import ProductDescription from './pages/productDescription/main/ProductDescription';
import CreateAcct from './pages/SignUp/CreateAcct';
import Welcome from './pages/Welcome/Welcome';
import LandingPage from './pages/landingPage/main/LandingPage';
import Login from './pages/Login/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path={'/dashboard'} element={<DashboardOverviewScreen />} />
        <Route path={'/product-description'} element={<ProductDescription />} />

        <Route
          path="/dashboard/grid-view"
          element={<AvailableListingGridView />}
        />
        <Route
          path="/dashboard/list-view"
          element={<AvailableListingListView />}
        />
        <Route path="/dashboard/add-listing" element={<AddListingScreen />} />
        <Route path="/signup" element={<CreateAcct />} />
        <Route path="/signup/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
