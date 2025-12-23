import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import heroImage from '../assets/hero_img_mob@4x.png';

function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        pt: { xs: 6, md: 10 },
        pb: 0,
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          {/* Заголовок */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '32px', md: '48px' },
              fontWeight: 700,
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Мультибрендовий сертифікат,{' '}
            <Box component="span" sx={{ fontWeight: 400 }}>
              який спрощує операційку, логістику та облік
            </Box>
          </Typography>

          {/* Кнопка */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 4,
            }}
          >
            <Button
              variant="contained"
              size="large"
              endIcon={
                <Box
                  sx={{
                    backgroundColor: '#212121',
                    borderRadius: '50%',
                    width: '37px',
                    height: '37px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 0,
                  }}
                >
                  <ArrowForwardIcon sx={{ transform: 'rotate(-45deg)', fontSize: '20px' }} />
                </Box>
              }
              sx={{
                backgroundColor: 'secondary.main',
                color: 'white',
                height: '44px',
                paddingLeft: 4,
                paddingRight: '5px',
                paddingTop: 0,
                paddingBottom: 0,
                '& .MuiButton-endIcon': {
                  marginRight: 0,
                  marginLeft: '8px',
                },
                '&:hover': {
                  backgroundColor: 'secondary.dark',
                },
              }}
            >
              Придбати сертифікат
            </Button>
          </Box>

          {/* Зображення телефону */}
          <Box
            sx={{
              position: 'relative',
              maxWidth: '328px',
              mx: 'auto',
            }}
          >
            <img
              src={heroImage}
              alt="MagicCard на телефоні"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
