import PropTypes from 'prop-types';
// @mui
import { Box, Card, Stack, Paper, Button, Collapse, TextField, Typography, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Image from '../../../../components/Image';
import Iconify from '../../../../components/Iconify';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser, getUserApiKeys } from '../../../../redux/slices/user'



// ----------------------------------------------------------------------

AccountBillingApiCards.propTypes = {
  apis: PropTypes.array,
  isOpen: PropTypes.bool,
  onOpen: PropTypes.func,
  onCancel: PropTypes.func,
  itemsPerRow: PropTypes.number, // <== New prop
};

AccountBillingApiCards.defaultProps = {
  itemsPerRow: 3, // <== Default value
};


export default function AccountBillingApiCards({ apis, isOpen, onOpen, onCancel }) {
  
  
  const dispatch = useDispatch()
  const apiKeys = useSelector(state => state?.user.apiKeys);
  const { user } = useSelector((state) => state?.user)
  
   useEffect(() => {
    dispatch(getUser()),
    dispatch(getUserApiKeys())
    // 
  }, [])
  
  // console.log("api_keys CARDDS", apiKeys)
  
  
  
  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="overline" sx={{ mb: 3, display: 'block', color: 'text.secondary' }}>
        Exchange APIs
      </Typography>

      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} 
      sx={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
        gap: 20/8, 
        margin: 20/8,
        marginLeft: 0,
        '& > :not(style) + :not(style)': {
          margin: 0,
        },    // set marginLeft to 0
      }}>
      
        
        {apiKeys?.results?.map((api) => (
          <Paper
            key={api.id}
            sx={{
              p: 3,
              width: 1,
              position: 'relative',
              border: (theme) => `solid 1px ${theme.palette.grey[500_32]}`,
              
              
              
            }}
          >
            <Image
              alt="icon"
              src={
                api.exchange_name === 'Binance'
                  ? 'https://cdn.worldvectorlogo.com/logos/binance-logo.svg'
                  : api.exchange_name === 'exmo'
                  ? 'https://cdn.worldvectorlogo.com/logos/exmo.svg'
                  : api.exchange_name === 'bybit'
                  ? 'https://cdn.worldvectorlogo.com/logos/coinmarketcap-1.svg'
                  : 'https://cdn.worldvectorlogo.com/logos/coinmarketcap-1.svg'
              }
              sx={{ mb: 1, maxWidth: 36 }}
            />
            <Typography variant="subtitle2">{api.label_name}</Typography>
            <IconButton
              sx={{
                top: 8,
                right: 8,
                position: 'absolute',
              }}
            >
              <Iconify icon={'eva:more-vertical-fill'} width={20} height={20} />
            </IconButton>
          </Paper>
        ))}
      </Stack>
      

      <Box sx={{ mt: 3 }}>
        <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />} onClick={onOpen}>
          Add new API
        </Button>
      </Box>

      <Collapse in={isOpen}>
        <Box
          sx={{
            padding: 3,
            marginTop: 3,
            borderRadius: 1,
            bgcolor: 'background.neutral',
          }}
        >
          <Stack spacing={3}>
            <Typography variant="subtitle1">Add new API</Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField fullWidth label="Exchange" />

              <TextField fullWidth label="Label" />
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField fullWidth label="Public Key" placeholder="MM/YY" />

              <TextField fullWidth label="Secret Key" />
            </Stack>

            <Stack direction="row" justifyContent="flex-end" spacing={1.5}>
              <Button color="inherit" variant="outlined" onClick={onCancel}>
                Cancel
              </Button>
              <LoadingButton type="submit" variant="contained" onClick={onCancel}>
                Save Change
              </LoadingButton>
            </Stack>
          </Stack>
        </Box>
      </Collapse>
    </Card>
  );
}
