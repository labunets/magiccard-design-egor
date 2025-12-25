import { Box, Container, Typography, Button } from '@mui/material';
import partner1 from '../assets/partners/imgi_5_thumb_1068_provider.image_desktop.catalog.jpg';
import partner2 from '../assets/partners/imgi_6_thumb_254_provider.image_desktop.catalog.jpg';
import partner3 from '../assets/partners/imgi_7_thumb_1171_provider.image_desktop.catalog.jpg';
import partner4 from '../assets/partners/imgi_8_thumb_834_provider.image_desktop.catalog.jpg';
import partner5 from '../assets/partners/imgi_9_thumb_718_provider.image_desktop.catalog.jpg';
import partner6 from '../assets/partners/imgi_10_thumb_39_provider.image_desktop.catalog.png';
import partner7 from '../assets/partners/imgi_11_thumb_184_provider.image_desktop.catalog.png';
import partner8 from '../assets/partners/imgi_12_thumb_752_provider.image_desktop.catalog.jpg';
import partner9 from '../assets/partners/imgi_13_thumb_177_provider.image_desktop.catalog.png';
import partner10 from '../assets/partners/imgi_14_thumb_669_provider.image_desktop.catalog.jpg';
import partner11 from '../assets/partners/imgi_15_thumb_1095_provider.image_desktop.catalog.jpg';
import partner12 from '../assets/partners/imgi_16_thumb_491_provider.image_desktop.catalog.png';
import partner13 from '../assets/partners/imgi_17_thumb_1169_provider.image_desktop.catalog.jpg';
import partner14 from '../assets/partners/imgi_18_thumb_748_provider.image_desktop.catalog.jpg';
import partner15 from '../assets/partners/imgi_19_thumb_1119_provider.image_desktop.catalog.jpg';
import partner16 from '../assets/partners/imgi_20_thumb_747_provider.image_desktop.catalog.jpg';
import partner17 from '../assets/partners/imgi_21_thumb_441_provider.image_desktop.catalog.jpg';
import partner18 from '../assets/partners/imgi_22_thumb_451_provider.image_desktop.catalog.jpg';
import partner19 from '../assets/partners/imgi_23_thumb_999_provider.image_desktop.catalog.jpg';
import partner20 from '../assets/partners/imgi_24_thumb_496_provider.image_desktop.catalog.png';
import partner21 from '../assets/partners/imgi_25_thumb_253_provider.image_desktop.catalog.jpg';
import partner22 from '../assets/partners/imgi_26_thumb_492_provider.image_desktop.catalog.png';
import partner23 from '../assets/partners/imgi_27_thumb_472_provider.image_desktop.catalog.jpg';
import partner24 from '../assets/partners/imgi_28_thumb_823_provider.image_desktop.catalog.jpg';
import partner25 from '../assets/partners/imgi_29_thumb_437_provider.image_desktop.catalog.jpg';
import partner26 from '../assets/partners/imgi_30_thumb_766_provider.image_desktop.catalog.jpg';
import partner27 from '../assets/partners/imgi_31_thumb_837_provider.image_desktop.catalog.jpg';
import partner28 from '../assets/partners/imgi_32_thumb_452_provider.image_desktop.catalog.jpg';
import partner29 from '../assets/partners/imgi_33_thumb_1034_provider.image_desktop.catalog.jpg';
import partner30 from '../assets/partners/imgi_34_thumb_431_provider.image_desktop.catalog.jpg';
import partner31 from '../assets/partners/imgi_35_thumb_765_provider.image_desktop.catalog.jpg';
import partner32 from '../assets/partners/imgi_36_thumb_915_provider.image_desktop.catalog.jpg';
import partner33 from '../assets/partners/imgi_37_thumb_794_provider.image_desktop.catalog.jpg';
import partner34 from '../assets/partners/imgi_38_thumb_689_provider.image_desktop.catalog.jpg';
import partner35 from '../assets/partners/imgi_39_thumb_934_provider.image_desktop.catalog.jpg';
import partner36 from '../assets/partners/imgi_40_thumb_814_provider.image_desktop.catalog.jpg';
import partner37 from '../assets/partners/imgi_41_thumb_796_provider.image_desktop.catalog.jpg';
import partner38 from '../assets/partners/imgi_42_thumb_806_provider.image_desktop.catalog.jpg';
import partner39 from '../assets/partners/imgi_43_thumb_448_provider.image_desktop.catalog.jpg';
import partner40 from '../assets/partners/imgi_44_thumb_833_provider.image_desktop.catalog.jpg';
import partner41 from '../assets/partners/imgi_45_thumb_34_provider.image_desktop.catalog.png';
import partner42 from '../assets/partners/imgi_46_thumb_1101_provider.image_desktop.catalog.jpg';
import partner43 from '../assets/partners/imgi_47_thumb_239_provider.image_desktop.catalog.png';
import partner44 from '../assets/partners/imgi_48_thumb_745_provider.image_desktop.catalog.jpg';
import partner45 from '../assets/partners/imgi_49_thumb_246_provider.image_desktop.catalog.png';
import partner46 from '../assets/partners/imgi_50_thumb_738_provider.image_desktop.catalog.jpg';
import partner47 from '../assets/partners/imgi_51_thumb_913_provider.image_desktop.catalog.jpg';
import partner48 from '../assets/partners/imgi_52_thumb_449_provider.image_desktop.catalog.jpg';
import partner49 from '../assets/partners/imgi_53_thumb_659_provider.image_desktop.catalog.jpg';
import partner50 from '../assets/partners/imgi_54_thumb_365_provider.image_desktop.catalog.jpg';

const partners = [
  partner1, partner2, partner3, partner4, partner5,
  partner6, partner7, partner8, partner9, partner10,
  partner11, partner12, partner13, partner14, partner15,
  partner16, partner17, partner18, partner19, partner20,
  partner21, partner22, partner23, partner24, partner25,
  partner26, partner27, partner28, partner29, partner30,
  partner31, partner32, partner33, partner34, partner35,
  partner36, partner37, partner38, partner39, partner40,
  partner41, partner42, partner43, partner44, partner45,
  partner46, partner47, partner48, partner49, partner50,
];

function Partners() {
  return (
    <Box sx={{ pt: { xs: '40px', md: '80px' }, pb: { xs: '60px', md: '80px' }, backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        {/* Заголовок */}
        <Typography
          variant="h2"
          textAlign="left"
          sx={{
            mb: 4,
            fontWeight: 700,
          }}
        >
          Торгівельні мережі{' '}
          <Box component="span" sx={{ fontWeight: 400 }}>
            для використання сертифіката
          </Box>
        </Typography>

        {/* Сітка партнерів */}
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: { xs: 1, md: '20px' },
          }}
        >
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                width: {
                  xs: 'calc(50% - 4px)',
                  sm: 'calc(25% - 6px)',
                  md: 'calc(20% - 16px)',
                },
                display: index >= 20 ? { xs: 'none', md: 'block' } : 'block',
              }}
            >
              <img
                src={partner}
                alt=""
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  borderRadius: '6px',
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Кнопка "Показати ще" */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: 'white',
              color: 'secondary.main',
              borderColor: 'secondary.main',
              height: '44px',
              borderRadius: '22px',
              px: 4,
              fontSize: '12px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.24px',
              borderWidth: '2px',
              width: { xs: '100%', md: '315px' },
              '&:hover': {
                backgroundColor: 'rgba(229, 101, 21, 0.04)',
                borderColor: 'secondary.main',
                borderWidth: '2px',
              },
            }}
          >
            Показати ще
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Partners;
