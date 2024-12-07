import { Routes, Route } from "react-router-dom";
import SAHome from "../pages/SAHome";
import Pricing from "../pages/Pricing";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import NotFoundPage from "../pages/NotFoundPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SAHome />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
