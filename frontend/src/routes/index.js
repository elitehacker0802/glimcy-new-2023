// Suspense (“задержка”) позволяет показать запсное содержание, пока подгружается компонента через React.

// React. lazy помогает динамически отображать компоненты с помощью динамического импорта. Он автоматически загрузит нужный бандл пакет при первой загрузке страницы
// его использование можно видить с 100 по 115 лининию в коде. Он передается как параметр в функции Loadable 

import { Suspense, lazy } from 'react'
// React Router DOM — это модуль узла, который предназначен для маршрутизации в веб-приложениях. Он позволяет инженерам создавать маршруты для одностраничного приложения React
//  Элемент <Navigate> изменяет текущее местоположение при отображении. Это оболочка компонента вокруг useNavigate, которая принимает все те же аргументы, что и свойства

// Navigate перенимает на себя параметр to="/dashboard" те говорит что надо отображать это 

// The useRoutes hook is the functional equivalent of <Routes>, but it uses JavaScript objects instead of <Route> elements to define your routes. These objects have the same properties as normal <Route> elements, but they don't require JSX.
// useRoutes это hook который в нашем коде принимает в себя array из словарей которые содержать urls к различным страницам кода 

// useLocation = This hook returns the current location object. This can be useful if you'd like to perform some side effect whenever the current location changes.
import { Navigate, useRoutes, useLocation } from 'react-router-dom'

import DashboardLayout from '../layouts/dashboard'
import LandingLayout from '../layouts/landing'
import LogoOnlyLayout from '../layouts/LogoOnlyLayout'
// guards
import GuestGuard from '../guards/GuestGuard'
import AuthGuard from '../guards/AuthGuard'
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// config
import { PATH_AFTER_LOGIN } from '../config'
// components
import LoadingScreen from '../components/LoadingScreen'

// ----------------------------------------------------------------------
// Loadable: this is a higher-order component that returns a new component with lazy loading functionality.
const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // проверяет существующую локацию
  const { pathname } = useLocation()

  // fallback is a React element that is rendered while the child component is being loaded. In this case, the fallback element is a LoadingScreen component, which takes a prop named isDashboard that is set based on whether the current URL pathname includes the string "/dashboard".
  // 
  // children is the component that is being loaded asynchronously. In this case, the component is specified using the JSX spread operator (...props), which means that it will be passed all of the props that were originally passed to the parent component
  return (
    <Suspense fallback={<LoadingScreen isDashboard={pathname.includes('/dashboard')} />}>
      <Component {...props} />
    </Suspense>
  )
}

export default function Router() {
  return useRoutes([
    
    // landing routes
    {
      path: '/',
      element: (
      
          <LandingLayout />
    
      ),
      children: [
        
        { path: 'about', element: <LandingLayout />},
        {
          path: 'pricing',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
            { path: 'profile', element: <UserProfile /> },
            { path: 'account', element: <UserAccount /> }
          ]
        }
      ]
    },
    
    // auth routes
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'new-password', element: <NewPassword /> },
        { path: 'verify', element: <VerifyCode /> }
      ]
    },

    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'app', element: <GeneralApp /> },
        {
          path: 'user',
          children: [
            { element: <Navigate to="/dashboard/user/profile" replace />, index: true },
            { path: 'profile', element: <UserProfile /> },
            { path: 'account', element: <UserAccount /> }
          ]
        }
      ]
    },

    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: '500', element: <Page500 /> },
        { path: '404', element: <Page404 /> },
        { path: '403', element: <Page403 /> },
        
      ]
    },

    
  ])
}

// AUTHENTICATION
const Login = Loadable(lazy(() => import('../pages/auth/Login')))
const Register = Loadable(lazy(() => import('../pages/auth/Register')))
const ResetPassword = Loadable(lazy(() => import('../pages/auth/ResetPassword')))
const NewPassword = Loadable(lazy(() => import('../pages/auth/NewPassword')))
const VerifyCode = Loadable(lazy(() => import('../pages/auth/VerifyCode')))

const UserProfile = Loadable(lazy(() => import('../pages/dashboard/UserProfile')))
const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')))

// GENERAL
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')))

const Page500 = Loadable(lazy(() => import('../pages/Page500')))
const Page403 = Loadable(lazy(() => import('../pages/Page403')))
const Page404 = Loadable(lazy(() => import('../pages/Page404')))
