import { AppBar, Toolbar, Box, Typography, IconButton, Container, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.svg';
import activateIcon from '../assets/activate.svg';

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: '0px 4px 20px rgba(198, 203, 212, 0.25)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '90px !important' }}>
          {/* Логотип та слоган */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
            <img
              src={logo}
              alt="MagicCard"
              style={{ width: '178px', height: '35px' }}
            />
            {/* Вертикальний роздільник */}
            <Box
              sx={{
                width: '1px',
                height: '24px',
                backgroundColor: '#E9E9E9',
              }}
            />
            <Typography
              sx={{
                color: '#B2B2B2',
                fontSize: '13px',
                lineHeight: '18px',
                letterSpacing: '0.22px',
                maxWidth: '174px',
              }}
            >
              Мультибрендовий подарунковий сертифікат
            </Typography>
          </Box>

          {/* Права частина - кнопка активації (desktop) та меню */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Кнопка активації (тільки на desktop) */}
            <Button
              variant="contained"
              startIcon={<img src={activateIcon} alt="" style={{ width: '24px', height: '24px' }} />}
              sx={{
                display: { xs: 'none', md: 'flex' },
                backgroundColor: '#212121',
                color: 'white',
                height: '44px',
                borderRadius: '22px',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                boxShadow: 'none',
                px: 3,
                '&:hover': {
                  backgroundColor: '#000000',
                  boxShadow: 'none',
                },
              }}
            >
              Активувати сертифікат
            </Button>

            {/* Меню іконка */}
            <IconButton sx={{ color: '#212121' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
