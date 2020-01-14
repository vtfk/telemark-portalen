import React from 'react'
import { Typography, Box } from '@material-ui/core'
import PageWrapper from '../../components/PageWrapper'
import Shortcuts from './Shortcuts'

const Dashboard = () => {
  return (
    <PageWrapper title="Forsiden">
      <Box mb={1}>
        <Shortcuts />
      </Box>
      <Box>
        <Typography variant="subtitle2" align="center">
          Her finner du innganger til gamle fagsystemer eller systemer som ikke
          er oppdatert etter sammenslåingen.
          <br />
          For alt annet bruker du{' '}
          <strong>
            <a
              href="https://teams.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              teams
            </a>
          </strong>{' '}
          og{' '}
          <strong>
            <a
              href="https://portalen.vfk.no/sites/nyttfylke/Sider/Hjem.aspx"
              target="_blank"
              rel="noopener noreferrer"
            >
              felles ansattportal
            </a>
          </strong>
          .
        </Typography>
      </Box>
    </PageWrapper>
  )
}

export default Dashboard
