import { Box, Container, Typography } from '@mui/material';
import { useRef, useState, useEffect } from 'react';
import step1Image from '../assets/step_1.png';
import step2Image from '../assets/step_2.png';
import step3Image from '../assets/step_3.png';
import step4Image from '../assets/step_4.png';

const steps = [
  {
    title: 'Крок 1',
    description: 'Одержувач обирає партнера з переліку та визначається з товаром або послугою, які планує придбати.',
    image: step1Image,
  },
  {
    title: 'Крок 2',
    description: 'Активує сертифікат зручним способом — через сайт або звернувшись за телефоном.',
    image: step2Image,
  },
  {
    title: 'Крок 3',
    description: 'Отримує електронний сертифікат обраного партнера або підтвердження успішної активації.',
    image: step3Image,
  },
  {
    title: 'Крок 4',
    description: 'Оплачує покупку сертифікатом на касі магазину чи під час оформлення замовлення в інтернет-магазині без додаткових дій.',
    image: step4Image,
  },
];

function HowToUse() {
  const scrollContainerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Scroll listener тільки для мобільних пристроїв
    if (window.innerWidth >= 900) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.offsetWidth - 32; // Ширина контейнера мінус padding
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ pt: { xs: '40px', md: '80px' }, pb: { xs: '40px', md: '80px' }, backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        {/* Заголовок */}
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            mb: 4,
            fontWeight: 700,
          }}
        >
          Як скористатися{' '}
          <Box component="span" sx={{ fontWeight: 400 }}>
            сертифікатом?
          </Box>
        </Typography>

        {/* Карусель */}
        <Box
          ref={scrollContainerRef}
          sx={{
            display: 'flex',
            overflowX: { xs: 'scroll', md: 'visible' },
            scrollSnapType: { xs: 'x mandatory', md: 'none' },
            flexWrap: { md: 'wrap' },
            gap: { xs: 2, md: '30px' },
            pb: 2,
            mb: 3,
            // Приховуємо скролбар
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                minWidth: { xs: 'calc(100% - 32px)', md: 'auto' },
                width: {
                  xs: 'calc(100% - 32px)',
                  md: index === 3 ? '100%' : 'calc(33.333% - 20px)'
                },
                scrollSnapAlign: { xs: 'start', md: 'none' },
                backgroundColor: '#F7F7F7',
                borderRadius: '4.67px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: index === 3 ? 'row' : 'column'
                },
              }}
            >
              {/* Текстовий блок */}
              <Box sx={{
                p: { xs: '24px', md: index === 3 ? 0 : '24px' },
                pb: { xs: '12px', md: index === 3 ? 0 : '12px' },
                width: { xs: '100%', md: index === 3 ? '50%' : '100%' },
                display: { md: index === 3 ? 'flex' : 'block' },
                flexDirection: { md: index === 3 ? 'column' : 'row' },
                justifyContent: { md: index === 3 ? 'center' : 'flex-start' },
                alignItems: { md: index === 3 ? 'center' : 'flex-start' },
              }}>
                {index === 3 ? (
                  <Box sx={{
                    width: { xs: '100%', md: '290px' },
                    height: { xs: 'auto', md: '114px' },
                    display: { md: 'flex' },
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#212121',
                        lineHeight: '22px',
                        mb: '6px',
                        textAlign: 'left',
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#595959',
                        lineHeight: '20px',
                        textAlign: 'left',
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                ) : (
                  <>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: '22px',
                        fontWeight: 700,
                        color: '#212121',
                        lineHeight: '22px',
                        mb: '6px',
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '14px',
                        color: '#595959',
                        lineHeight: '20px',
                      }}
                    >
                      {step.description}
                    </Typography>
                  </>
                )}
              </Box>

              {/* Зображення */}
              <Box
                sx={{
                  mt: { xs: 'auto', md: index === 3 ? 0 : 'auto' },
                  width: { xs: '100%', md: index === 3 ? '50%' : '100%' },
                  display: 'flex',
                  alignItems: { md: index === 3 ? 'center' : 'flex-start' },
                }}
              >
                <img
                  src={step.image}
                  alt=""
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>

        {/* Пагінація */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          {steps.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: activeIndex === index ? '18px' : '6px',
                height: '6px',
                borderRadius: '100px',
                backgroundColor: activeIndex === index ? '#533BAD' : '#D9D9D9',
                transition: 'all 0.3s ease',
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default HowToUse;
