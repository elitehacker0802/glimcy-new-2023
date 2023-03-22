import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// hooks
import useSettings from '../../hooks/useSettings';
import useResponsive from '../../hooks/useResponsive';
import useCollapseDrawer from '../../hooks/useCollapseDrawer';
// import { RHFTextField } from '../../components/hook-form';
// config
import { HEADER, NAVBAR } from '../../config';
//
import LandingHeader from './header';
import MetaTags from './MetaTags';
import IntroSection from './IntroSection';
import Scripts from './Scripts';
import SubscriptionPopup from './SubscriptionPopup';
// import NavbarVertical from './navbar/NavbarVertical';
// import NavbarHorizontal from './navbar/NavbarHorizontal';
// import MainFooter from '../main/MainFooter';

// ----------------------------------------------------------------------

const MainStyle = styled('main', {
  shouldForwardProp: (prop) => prop !== 'collapseClick',
})(({ collapseClick, theme }) => ({
  flexGrow: 1,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  paddingBottom: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up('lg')]: {
	paddingLeft: 16,
	paddingRight: 16,
	paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
	paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT + 24,
	width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
	transition: theme.transitions.create('margin-left', {
	  duration: theme.transitions.duration.shorter,
	}),
	...(collapseClick && {
	  marginLeft: NAVBAR.DASHBOARD_COLLAPSE_WIDTH,
	}),
  },
}));

// ----------------------------------------------------------------------

export default function LandingLayout() {
  const { collapseClick, isCollapse } = useCollapseDrawer();

  const { themeLayout } = useSettings();

  const isDesktop = useResponsive('up', 'lg');

  const [open, setOpen] = useState(false);

  const verticalLayout = themeLayout === 'vertical';

// return (
// 	  <Router>
// 		<div className="page-wrapper">
// 		  <MetaTags />
// 		  <LandingHeader />
// 		  <Routes>
// 			<Route path="/" element={<IntroSection />} />
// 			<Route path="/pricing" element={<IntroSection />} />
// 		  </Routes>
// 		  <Scripts />
// 		</div>
// 	  </Router>
// 	);
  return (
	<div className ="page-wrapper">
	<MetaTags/>
	<LandingHeader/>
	<IntroSection/>
	<SubscriptionPopup/>
	<Scripts/>
	
	</div>
  );
}
