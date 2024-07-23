const plugin = require('tailwindcss/plugin')


/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    fsizes: {
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      24: '24px',
      32: '32px',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          inverted: 'var(--color-text-inverted)',
        }
      },

      backgroundColor: {
        heise: {
          0: 'rgba(0, 0, 0, 0)',
          1: 'rgba(0, 0, 0, 0.1)',
          2: 'rgba(0, 0, 0, 0.2)',
          3: 'rgba(0, 0, 0, 0.3)',
          4: 'rgba(0, 0, 0, 0.4)',
        },
        skin: {
          fill: 'var(--color-fill)',
          'button-accent': 'var(--color-button-accent)',
          'button-accent-hover': 'var(--color-button-accent-hover)',
          'button-muted': ({opacityValue}) => {
            console.log(opacityValue)
            if (opacityValue !== undefined) {
              return `rgba(var(--color-button-muted), ${opacityValue})`
            }
            return `rgb(var(--color-button-muted))`
          },
        }
      },
      gradientColorStops: {
        skin: {
          hue: 'var(--color-fill)',
        }
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(({addComponents, theme}) => {
      addComponents({
        '.card': {
          display: 'inline-block',
          padding: '1rem',
          border: '1px solid',
          borderRadius: '4px',
          borderColor: theme('colors.red.400'),
          margin: '1rem'
        }
      })
    }),
    plugin(({matchUtilities, theme}) => {
      matchUtilities({
        fsize: (value) => ({
          fontSize: value
        })
      }, {
        values: theme('fsizes')
      })
    })
  ],
}
