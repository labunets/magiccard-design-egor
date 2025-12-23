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
    <Box sx={{ pt: '40px', pb: '40px', backgroundColor: 'white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: '16px', md: 3 } }}>
        {/* Заголовок */}
        <Typography
          variant="h2"
          textAlign="center"
          sx={{
            mb: 4,
            fontSize: { xs: '24px', md: '32px' },
            fontWeight: 700,
            lineHeight: '29px',
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
            overflowX: 'scroll',
            scrollSnapType: 'x mandatory',
            gap: 2,
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
                minWidth: 'calc(100% - 32px)',
                scrollSnapAlign: 'start',
                backgroundColor: '#F7F7F7',
                borderRadius: '4.67px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Текстовий блок */}
              <Box sx={{ p: '24px', pb: '12px' }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#212121',
                    lineHeight: '20px',
                    mb: '6px',
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '13px',
                    color: '#595959',
                    lineHeight: '19px',
                  }}
                >
                  {step.description}
                </Typography>
              </Box>

              {/* Зображення */}
              <Box
                sx={{
                  mt: 'auto',
                  width: '100%',
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
            display: 'flex',
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
