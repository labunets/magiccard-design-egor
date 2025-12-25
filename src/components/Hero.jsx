import { Box, Container, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import heroImage from '../assets/hero_img_mob@4x.png';
import partner1 from '../assets/partner_1.jpg';
import partner2 from '../assets/partner_2.jpg';
import partner3 from '../assets/partner_3.jpg';
import partner4 from '../assets/partner_4.jpg';
import partner5 from '../assets/partner_5.jpg';
import partner6 from '../assets/partner_6.jpg';
import partner7 from '../assets/partner_7.jpg';
import partner8 from '../assets/partner_8.jpg';

const partnerLogos = [partner1, partner2, partner3, partner4, partner5, partner6, partner7, partner8];

function Hero() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        pt: { xs: 6, md: 0 },
        pb: 0,
        height: { xs: 'auto', md: 'auto' },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 }, height: { md: '100%' } }}>
        <Box
          sx={{
            display: { xs: 'block', md: 'flex' },
            alignItems: 'center',
            gap: { xs: 4, md: '52px' },
            height: { md: '100%' },
          }}
        >
          {/* Ліва колонка - текст та кнопка */}
          <Box
            sx={{
              width: { xs: '100%', md: '550px' },
              textAlign: { xs: 'center', md: 'left' },
              maxWidth: { xs: '600px', md: 'none' },
              mx: { xs: 'auto', md: 0 },
              flexShrink: 0,
            }}
          >
            {/* Заголовок */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '32px', md: '48px' },
                fontWeight: 400,
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              <Box component="span" sx={{ fontWeight: 700 }}>
                Один сертифікат
              </Box>
              {' '}- сотні емоцій.
              <br />
              <Box component="span" sx={{ fontWeight: 700 }}>
                MagicCard
              </Box>
              {' '}- подарунок, що підлаштовується під людину.
            </Typography>

            {/* Кнопка */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
                mb: { xs: 4, md: 0 },
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
                  fontSize: '12px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.24px',
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
          </Box>

          {/* Права колонка - телефон */}
          <Box
            sx={{
              width: { xs: '100%', md: '763px' },
              height: { md: '760px' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {/* Зображення телефону */}
            <Box
              sx={{
                position: 'relative',
                maxWidth: { xs: '328px', md: 'none' },
                width: { xs: '100%', md: '763px' },
                height: { md: '760px' },
                mx: 'auto',
              }}
            >
              <img
                src={heroImage}
                alt="MagicCard на телефоні"
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
