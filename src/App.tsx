import { Route, Routes } from "react-router-dom"
import Contact from "src/pages/contact"
import Farming from "src/pages/farming"
import ForgetPassword from "src/pages/forget-password"
import HomeOne from "src/pages/home-one"
import IgoApply from "src/pages/igo-apply"
import IGORanking from "src/pages/igo-ranking"
import KycOne from "src/pages/kyc-1"
import KycTwo from "src/pages/kyc-2"
import KycThree from "src/pages/kyc-3"
import Leaderboard from "src/pages/leaderboard"
import Signin from "src/pages/login"
import ProjectDetails from "src/pages/project-details"
import ProjectsList from "src/pages/projects-list"
import Signup from "src/pages/register"
import RoadmapDetails from "src/pages/roadmap-details"
import TeamDetails from "src/pages/team-details"
import { routesName } from "./const/routes"
import { useCheckAdmin } from "./hooks"
import { useCustomModalAccount } from "./hooks/my-account/useCustomModalAccount"
import AdminProjectDetails from "./pages/admin-project-details"
import AdminProjectDetailsLaunchpad from "./pages/admin-project-details-launchpad"
import AdminProjectsPage from "./pages/admin-projects"
import MyAccount from "./pages/my-account"
import Staking from "./pages/staking"
import ViewPool from "./pages/view-pool"
import ProjectsCalendar from "./pages/projects-calendar"
import AdminProjectCreate from "./pages/admin-project-create"

function App() {
  useCheckAdmin()
  useCustomModalAccount()

  return (
    <Routes>
      <Route path={routesName.ROOT} element={<HomeOne />} />
      <Route path={routesName.PROJECTS} element={<ProjectsList />} />
      <Route path={routesName.PROJECT_DETAILS} element={<ProjectDetails />} />
      <Route path={routesName.STAKING} element={<Staking />} />
      <Route path={routesName.FARMING} element={<Farming />} />
      <Route path={routesName.VIEWPOOL} element={<ViewPool />} />
      <Route path={routesName.MY_ACCOUNT} element={<MyAccount />} />
      <Route path={routesName.PROJECT_CALENDAR} element={<ProjectsCalendar />} />
      <Route path='/kyc-1' element={<KycOne />} />
      <Route path='/kyc-2' element={<KycTwo />} />
      <Route path='/kyc-3' element={<KycThree />} />
      <Route path='/login' element={<Signin />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/forget-password' element={<ForgetPassword />} />
      <Route path='/leaderboard' element={<Leaderboard />} />
      <Route path='/igo-ranking' element={<IGORanking />} />
      <Route path='/igo-apply' element={<IgoApply />} />
      <Route path='/roadmap-details' element={<RoadmapDetails />} />
      <Route path='/team-details' element={<TeamDetails />} />
      <Route path='/contact' element={<Contact />} />

      {/* admin */}
      <Route path={routesName.ADMIN_PROJECTS} element={<AdminProjectsPage />} />
      <Route path={routesName.ADMIN_PROJECT_DETAILS} element={<AdminProjectDetails />} />
      <Route path={routesName.ADMIN_PROJECT_CREATE} element={<AdminProjectCreate />} />
      <Route path={routesName.ADMIN_PROJECT_DETAILS_LAUNCHPAD} element={<AdminProjectDetailsLaunchpad />} />
    </Routes>
  )
}

export default App
