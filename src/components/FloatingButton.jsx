import { Box, Button } from '@mui/material';
import activateIcon from '../assets/activate.svg';

function FloatingButton() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '10px 16px',
        backgroundColor: 'white',
        zIndex: 1000,
        display: { xs: 'block', md: 'none' },
        boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.08)',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
      }}
    >
      <Button
        variant="contained"
        fullWidth
        startIcon={<img src={activateIcon} alt="" style={{ width: '24px', height: '24px' }} />}
        sx={{
          backgroundColor: '#212121',
          color: 'white',
          height: '44px',
          borderRadius: '22px',
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '1px',
          textTransform: 'uppercase',
          boxShadow: 'none',
          '&:hover': {
            backgroundColor: '#000000',
            boxShadow: 'none',
          },
        }}
      >
        Активувати сертифікат
      </Button>
    </Box>
  );
}

export default FloatingButton;
