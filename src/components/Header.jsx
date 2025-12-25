import { AppBar, Toolbar, Box, Typography, IconButton, Container, Button, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import logo from '../assets/logo.svg';
import activateIcon from '../assets/activate.svg';

const menuItems = [
  { text: 'Про компанію', id: 'about' },
  { text: 'Партнери', id: 'partners' },
  { text: 'Переваги', id: 'why-choose' },
  { text: 'Наші клієнти', id: 'clients' },
  { text: 'Як скористатися', id: 'how-to-use' },
  { text: 'Купити сертифікат', id: 'buy' },
];

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleMenuItemClick = (id) => {
    setDrawerOpen(false);
    // Тут можна додати логіку скролу до секції
    console.log(`Navigate to: ${id}`);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        boxShadow: '0px 4px 20px rgba(198, 203, 212, 0.25)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: '64px !important', md: '90px !important' } }}>
          {/* Логотип та слоган */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: '11px', md: '25px' } }}>
            <Box
              component="img"
              src={logo}
              alt="MagicCard"
              sx={{
                width: { xs: '123px', md: '178px' },
                height: 'auto',
              }}
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
            <IconButton
              sx={{ color: '#212121' }}
              onClick={toggleDrawer(true)}
              aria-label="відкрити меню"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Drawer меню */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 280 }}
          role="presentation"
        >
          {/* Заголовок меню з кнопкою закриття */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
              borderBottom: '1px solid #E9E9E9',
            }}
          >
            <img
              src={logo}
              alt="MagicCard"
              style={{ width: '140px', height: 'auto' }}
            />
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ color: '#212121' }}
              aria-label="закрити меню"
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Пункти меню */}
          <List>
            {menuItems.map((item, index) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => handleMenuItemClick(item.id)}
                  sx={{
                    py: 2,
                    px: 3,
                    '&:hover': {
                      backgroundColor: 'rgba(84, 59, 173, 0.08)',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: '16px',
                      fontWeight: 400,
                      color: '#212121',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          {/* Кнопка активації в меню */}
          <Box sx={{ px: 2, pb: 3 }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<img src={activateIcon} alt="" style={{ width: '20px', height: '20px' }} />}
              onClick={() => {
                setDrawerOpen(false);
                console.log('Activate certificate');
              }}
              sx={{
                backgroundColor: '#212121',
                color: 'white',
                height: '44px',
                borderRadius: '22px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.5px',
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
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header;
