/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/**/*.{js,jsx,ts,tsx}',
    './src/**/**/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      'sm': '500px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      transparent: 'transparent',
      primary: 'var(--primary)',
      onPrimary: 'var(--on-primary)',
      primaryContainer: 'var(--primary-container)',
      onPrimaryContainer: 'var(--on-primary-container)',
      secondary: 'var(--secondary)',
      onSecondary: 'var(-on-secondary)',
      secondaryContainer: 'var(--secondary-container)',
      onSecondaryContainer: 'var(--on-secondary-container)',
      tertiary: 'var(--tertiary)',
      onTertiary: 'var(--on-tertiary)',
      tertiaryContainer: 'var(--tertiary-container)',
      onTertiaryContainer: 'var(--on-tertiary-container)',
      error: 'var(--error)',
      onError: 'var(--on-error)',
      errorContainer: 'var(--error-container)',
      onErrorContainer: 'var(--on-error-container)',
      background: 'var(--background)',
      onBackground: 'var(--on-background)',
      surfaceVariant: 'var(--surface-variant)',
      onSurfaceVariant: 'var(--on-surface-variant)',
      outline: 'var(--outline)',
      surface1: 'var(--surface-1)',
      surface2: 'var(--surface-2)',
      surface3: 'var(--surface-3)',
      surface4: 'var(--surface-4)',
      surface5: 'var(--surface-5)',
      navigation: 'var(--navigation-bar)',
      disabled: 'var(--disabled)',
    },
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    fontSize: {
      'xs': '12px',
      'sm': '14px',
      'tiny': '12px',
      'base': '16px',
      'lg': '20px',
      'xl': '22px',
      '2xl': '24px',
      '3xl': '28px',
      '4xl': '32px',
      '5xl': '36px',
      '6xl': '45px',
      '7xl': '57px',
    },
    fontWeight: {
      'hairline': 100,
      'extra-light': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'extra-bold': 800,
      'black': 900,
    },
    borderRadius: {
      'none': '0',
      'sm': '2px',
      'DEFAULT': '4px',
      'md': '6px',
      'lg': '8px',
      'xl': '12px',
      '2xl': '16px',
      '3xl': '24px',
      'full': '9999px',
      'large': '12px',
    },
  },
  plugins: [],
};
