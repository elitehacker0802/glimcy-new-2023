import PropTypes from 'prop-types'
import { useState } from 'react'
// @mui
import { Box, Grid, Card, Button, Typography, Stack } from '@mui/material'
//
import AccountBillingAddressBook from './AccountBillingAddressBook'
import AccountBillingApiCards from './AccountBillingApiCards'
import AccountBillingInvoiceHistory from './AccountBillingInvoiceHistory'

// ----------------------------------------------------------------------

AccountExchangesApi.propTypes = {
  addressBook: PropTypes.array,
  apis: PropTypes.array,
  invoices: PropTypes.array
}

export default function AccountExchangesApi({ apis, addressBook, invoices }) {
  const [open, setOpen] = useState(false)

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={8}>
        <Stack spacing={3}>
          {/* <Card sx={{ p: 3 }}>
            <Typography variant="overline" sx={{ mb: 3, display: 'block', color: 'text.secondary' }}>
              Your Plan
            </Typography>
            <Typography variant="h4">Premium</Typography>
            <Box
              sx={{
                mt: { xs: 2, sm: 0 },
                position: { sm: 'absolute' },
                top: { sm: 24 },
                right: { sm: 24 }
              }}
            >
              
            </Box>
          </Card> */}

         <AccountBillingApiCards apis={apis} isOpen={open} onOpen={() => setOpen(!open)} onCancel={() => setOpen(false)} />

        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        {/* <AccountBillingInvoiceHistory invoices={invoices} /> */}
      </Grid>
    </Grid>
  )
}
