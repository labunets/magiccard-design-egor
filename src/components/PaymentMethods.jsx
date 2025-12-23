import { Box, Container, Typography, Grid } from '@mui/material';

// Платіжні системи
const paymentMethods = [
  { name: 'Visa', color: '#1A1F71' },
  { name: 'Mastercard', color: '#EB001B' },
  { name: 'Apple Pay', color: '#000000' },
  { name: 'Google Pay', color: '#4285F4' },
  { name: 'Privat24', color: '#53A340' },
  { name: 'monobank', color: '#000000' },
];

function PaymentMethods() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        {/* Заголовок */}
        <Typography
          variant="h3"
          textAlign="center"
          sx={{
            mb: 5,
            fontSize: { xs: '24px', md: '32px' },
          }}
        >
          Оплачуйте <Box component="span" sx={{ fontWeight: 400 }}>зручним способом</Box>
        </Typography>

        {/* Сітка з платіжними методами */}
        <Grid container spacing={2} justifyContent="center">
          {paymentMethods.map((method, index) => (
            <Grid item xs={6} sm={4} md={2} key={index}>
              <Box
                sx={{
                  height: '80px',
                  backgroundColor: 'background.grey',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: method.color,
                  }}
                >
                  {method.name}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default PaymentMethods;
