import { Container } from '@mui/material'

import CarouselArrows from '../../components/carousel/CarouselArrows'

import useSettings from '../../hooks/useSettings'
// routes
import { PATH_DASHBOARD } from '../../routes/paths'

// components
import Page from '../../components/Page'
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs'

import EditorToolbar from '../../components/editor/EditorToolbar'

export default function GeneralApp() {
  const { themeStretch } = useSettings()

  return (
    <Page title="App: Frontend">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs heading="Main" links={[{ name: 'Main', href: PATH_DASHBOARD.root }]} />
        
      </Container>
    </Page>
  )
}
