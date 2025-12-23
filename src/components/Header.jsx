import { AppBar, Toolbar, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo.svg';

function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: '0px 4px 20px rgba(198, 203, 212, 0.25)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px !important' }}>
        {/* Логотип та слоган */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <img
            src={logo}
            alt="MagicCard"
            style={{ height: '24px', width: 'auto' }}
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
              fontSize: '11px',
              lineHeight: '14px',
              letterSpacing: '0.22px',
              maxWidth: '145px',
            }}
          >
            Мультибрендовий подарунковий сертифікат
          </Typography>
        </Box>

        {/* Меню іконка */}
        <IconButton sx={{ color: '#212121' }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
