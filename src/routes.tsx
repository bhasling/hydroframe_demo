import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import App from "./App";
import AboutUs from "pages/about-us";
import OurTeam from "pages/our-team";
import Hydrogen from "pages/hydrogen";
import SubsettingPythonTools from "pages/subsetting-python-tools";
import ParflowResources from "pages/parflow-resources";
import Hydrodata from "pages/hydrodata";
import ParflowSandtankModel from "pages/parflow-sandtank-model";
import SandTankUserManual from "pages/sand-tank-user-manual";
import SandtankMl from "pages/sandtank-ml";
import OtherToolsandPartners from "pages/other-tools-and-partners";
import ShortCourses from "pages/short-courses";
import ParFlowCONUS1 from "pages/parFlowCONUS1";
import ParFlowCONUS2 from "pages/parFlowCONUS2";
import NotFound from "pages/NotFound";

const createRoutes = () => (
    <BrowserRouter basename='/hydroframe_demo/'>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/our-team" element={<OurTeam />} />
                <Route path="/hydrogen" element={<Hydrogen />} />
                <Route
                    path="/subsettools"
                    element={<SubsettingPythonTools />}
                />
                <Route
                    path="/parflow-resources"
                    element={<ParflowResources />}
                />
                <Route path="/hydrodata" element={<Hydrodata />} />

                <Route
                    path="sand-tank-user-manual"
                    element={<SandTankUserManual />}
                />
                <Route
                    path="/parflow-sandtank-model"
                    element={<ParflowSandtankModel />}
                />
                <Route path="/sandtank-ml" element={<SandtankMl />} />
                <Route
                    path="/other-tools-and-partners"
                    element={<OtherToolsandPartners />}
                />
                <Route path="/short-courses" element={<ShortCourses />} />
                <Route path="/parflow-conus1" element={<ParFlowCONUS1 />} />
                <Route path="/parflow-conus2" element={<ParFlowCONUS2 />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
);

export default createRoutes;
