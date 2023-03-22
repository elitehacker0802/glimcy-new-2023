// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ThemeSettings from './components/settings';
import { ChartStyle } from './components/chart';
import ScrollToTop from './components/ScrollToTop';
import { ProgressBarStyle } from './components/ProgressBar';
import NotistackProvider from './components/NotistackProvider';
import MotionLazyContainer from './components/animate/MotionLazyContainer';
import EditorToolbar from './components/editor/EditorToolbar';
// ----------------------------------------------------------------------

{/* <MotionLazyContainer>: a container for animating elements that are lazily loaded */}
{/* <ThemeProvider>: provides the app with a theme object that can be accessed by child components */}
{/* <ThemeSettings>: a settings panel for customizing the app's theme */}
{/* <NotistackProvider>: provides a notification system for the app */}
{/* <ProgressBarStyle>: a styled progress bar component */}
{/* <ChartStyle>: a styled chart component */}
{/* <ScrollToTop>: a button that scrolls the page to the top */}
{/* <Router>: a component that handles routing and renders the appropriate content based on the URL */}


export default function App() {
  return (
    <MotionLazyContainer>
      <ThemeProvider>
        <ThemeSettings>
          <NotistackProvider>
            <ProgressBarStyle />
            <ChartStyle />
            <ScrollToTop />
            <Router />
          </NotistackProvider>
        </ThemeSettings>
      </ThemeProvider>
    </MotionLazyContainer>
  );
}
