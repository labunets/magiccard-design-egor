# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Project Language

**All texts, comments, documentation, commit messages, and communication in this project MUST be in Ukrainian language.**

## Project Overview

Задачей этого проекта является анализ файла MagicCard-design-export-from-Figma/MagicCard-2_Mobile.png (дизайн для мобильной версии) м файла MagicCard-design-export-from-Figma/MagicCard-2_Desktop.jpg (дизайн для настольной версии) и создание по этим дизайнам верстки тo есть рабочего проекта Frontend для Node и React с использованием библиотекиc"@mui/material": "^7.3.5"
В дизайне используется следующий шрифт: https://fonts.google.com/specimen/Google+Sans который должен автоматически загружаться из Google CDN.
В дизайне используются цвета, описанные в файле MagicCard-design-export-from-Figma/Colors.png

## Development Commands

### Setup
```bash
# Встановлення залежностей
npm install
```

### Build
```bash
# Збірка проекту для production
npm run build
```

### Development Server
```bash
# Запуск dev сервера (за замовчуванням на http://localhost:5173)
npm run dev
```

### Preview
```bash
# Попередній перегляд production збірки
npm run preview
```

## Architecture

### High-Level Structure

Проект побудований на базі **Vite + React** з використанням **Material-UI (MUI) v7.3.5** для компонентів інтерфейсу.

**Технічний стек:**
- React 18.3.1 (без TypeScript, чистий JavaScript)
- Vite 6.0.5 (bundler)
- @mui/material 7.3.5 (UI компоненти)
- @emotion/react та @emotion/styled (стилізація для MUI)
- Google Sans шрифт (завантажується з Google Fonts CDN)

**Архітектурні рішення:**
- Функціональні компоненти з React Hooks
- Статична верстка без state management
- Mobile-first responsive дизайн
- Компонентна структура з розділенням UI секцій

### Key Directories

```
/src
  /components      # React компоненти сторінки
    Header.jsx     # Шапка сайту з логотипом та меню (статична позиція)
    Hero.jsx       # Hero секція з заголовком, кнопкою та зображенням телефону
    CompanyStats.jsx # Секція "Про компанію в цифрах" (4 статистичні блоки)
    Partners.jsx   # Секція "Торгівельні мережі" (12 логотипів партнерів)
    FloatingButton.jsx # Плаваюча кнопка "Активувати сертифікат" (мобільна версія)
  /theme
    theme.js       # MUI theme конфігурація (кольори, типографія, breakpoints)
  /assets
    logo.svg       # Логотип MagicCard
    hero_img_mob@4x.png # Зображення телефону для Hero секції
    activate.svg   # Іконка для кнопки активації
    workspace_premium.svg # Іконка для статистики
    cases.svg      # Іконка для статистики
    thumb_up.svg   # Іконка для статистики
    swap_driving_apps_wheel.svg # Іконка для статистики
    partner_1.jpg...partner_12.jpg # Логотипи партнерських мереж
  App.jsx          # Головний компонент додатку
  main.jsx         # Entry point
```

### Data Flow

Проект є статичною одностороінковою версткою (Single Page Application):
- Всі компоненти рендеряться в `App.jsx`
- Немає роутингу, стану або API запитів
- Зображення імпортуються як статичні ресурси через import
- MUI theme провайдер обгортає весь додаток

### Current Implementation Status

**Завершені компоненти:**
- ✅ Header - шапка з логотипом, вертикальним роздільником та сірим текстом
- ✅ Hero - заголовок, оранжева кнопка "Придбати сертифікат" з чорною круглою іконкою, зображення телефону
- ✅ CompanyStats - секція "Про компанію в цифрах" з 4 статистичними блоками
- ✅ Partners - секція "Торгівельні мережі для використання сертифіката" з 12 логотипами партнерів та кнопкою "Показати ще"
- ✅ FloatingButton - плаваюча кнопка "Активувати сертифікат" з іконкою activate.svg (тільки мобільна версія)
- ✅ Features - секція переваг з 6 картками (фіолетові іконки без фону)

**В розробці:**
- Інші секції сторінки будуть додаватися поступово

### Component Details

**Header:**
- Статична позиція (не sticky)
- Висота: 64px
- Логотип зліва + вертикальна сіра лінія + сірий текст
- Іконка меню справа

**Hero:**
- Фіолетовий фон (primary.main: #543BAD)
- Заголовок з жирним та звичайним шрифтом
- Оранжева кнопка (secondary.main: #E56515) висотою 44px
- Чорна кругла іконка на кнопці (37x37px) з стрілкою повернутою на -45°
- Зображення телефону внизу без відступу

**CompanyStats:**
- Секція "Про компанію в цифрах"
- 4 статистичні блоки (2x2 на мобільних, 4x1 на desktop)
- Заголовок h2, 24px шрифт, вирівнювання зліва
- Відступ від заголовка до блоків: 12px
- Кожен блок: іконка 24px → число 48px → опис 14px
- Вертикальні відступи між елементами блоку: 12px
- Вертикальні відступи між рядами блоків: 33px
- Flexbox layout з фіксованими ширинами (50% / 25%)

**Partners:**
- Секція "Торгівельні мережі для використання сертифіката"
- Заголовок h2, 24px шрифт, вирівнювання зліва
- 12 логотипів партнерських мереж (2 в ряд на мобільних, 4 на планшетах, 6 на desktop)
- Логотипи зі скругленими кутами (4px)
- Flexbox layout з адаптивними ширинами: calc(50% - 4px) для мобільних
- Оранжева кнопка "Показати ще" (#E56515) висотою 44px з округленням 22px

**FloatingButton:**
- Фіксована позиція внизу екрану
- Білий фон з закругленими верхніми кутами (8px)
- Чорна кнопка висотою 44px з повним закругленням (22px)
- Іконка activate.svg (24x24px) зліва
- Видима тільки на мобільних пристроях (xs)

### Important Conventions

**Мовні вимоги:**
- Весь код, коментарі та текстовий контент українською мовою

**Стилізація:**
- Використання MUI `sx` prop для стилів
- MUI breakpoints: xs (0px), sm (600px), md (900px), lg (1200px), xl (1536px)
- Mobile-first підхід з адаптацією для desktop
- Google Sans як основний шрифт
- Горизонтальні відступи для мобільної версії: 16px

**Компоненти:**
- Тільки функціональні компоненти (без класових)
- Немає TypeScript - чистий JavaScript
- Імпорти зображень через relative paths з `/assets`

**Дизайн:**
- Орієнтація на дизайн Mobile (1440px) та Desktop (1920px) з Figma
- Використання кольорової палітри з theme.js

## Design Assets Location

Всі дизайн файли знаходяться в директорії `MagicCard-design-export-from-Figma/`:
- `MagicCard-2_Mobile.png` - основний мобільний дизайн
- `MagicCard-2_Desktop.jpg` - основний десктоп дизайн
- `MagicCard-2_Mobile_Button.png` - дизайн плаваючої кнопки
- `Colors.png` - кольорова палітра проекту
- `/images/` - директорія з іконками та зображеннями (logo.svg, activate.svg, hero_img_mob@4x.png тощо)

## Known Issues and TODOs

- Десктопна версія ще не реалізована (тільки мобільна)
- Інші секції сторінки (Partners, HowToUse, Certificate, Footer) будуть додані пізніше
- Наразі немає інтерактивності (кнопки не мають обробників подій)
