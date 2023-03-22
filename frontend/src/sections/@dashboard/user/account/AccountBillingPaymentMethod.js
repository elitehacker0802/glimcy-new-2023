import PropTypes from 'prop-types';
// @mui
import { Box, Card, Stack, Paper, Button, Collapse, TextField, Typography, IconButton, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
// components
import Image from '../../../../components/Image';
import Iconify from '../../../../components/Iconify';

// ----------------------------------------------------------------------

AccountBillingPaymentMethod.propTypes = {
  cards: PropTypes.array,
};

export default function AccountBillingPaymentMethod({ cards }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSaveChange = () => {
    // Perform save change action here
    setIsOpen(false);
  };

  return (
    <Card sx={{ p: 3 }}>
      <Typography variant="overline" sx={{ mb: 3, display: 'block', color: 'text.secondary' }}>
        Payment Method
      </Typography>

      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
        {cards.map((card) => (
          <Paper
            key={card.id}
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
                card.cardType === 'master_card'
                  ? 'https://minimal-assets-api-dev.vercel.app/assets/icons/ic_mastercard.svg'
                  : 'https://minimal-assets-api-dev.vercel.app/assets/icons/ic_visa.svg'
              }
              sx={{ mb: 1, maxWidth: 36 }}
            />
            <Typography variant="subtitle2">{card.cardNumber}</Typography>
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
        <Button size="small" startIcon={<Iconify icon={'eva:plus-fill'} />} onClick={handleOpen}>
          Add new card
        </Button>
      </Box>

      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Add new card</DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField fullWidth label="Name on card" />

              <TextField fullWidth label="Card number" />
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <TextField fullWidth label="Expiration date" placeholder="MM/YY" />

              <TextField fullWidth label="Cvv" />
            </Stack>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button color="inherit" variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <LoadingButton type="submit" variant="contained" onClick={handleSaveChange}>
            Save Change
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
