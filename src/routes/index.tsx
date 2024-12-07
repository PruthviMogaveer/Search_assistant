import { Routes, Route } from "react-router-dom";
import SAHome from "../pages/SAHome";
import Pricing from "../pages/Pricing";
import PrivacyPolicy from "../pages/PrivacyPolicy";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SAHome />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
};
