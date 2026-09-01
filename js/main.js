// Tailwind Configuration for Neobrutalism
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Space Grotesk', 'sans-serif'],
        'sans': ['Plus Jakarta Sans', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        neo: {
          bg: '#FFFDF6',
          yellow: '#FFE600',
          pink: '#FF6B97',
          cyan: '#38BDF8',
          lime: '#4ADE80',
          purple: '#C084FC',
          orange: '#FB923C',
          dark: '#111827',
        }
      },
      boxShadow: {
        'neo-sm': '3px 3px 0px #000000',
        'neo-md': '5px 5px 0px #000000',
        'neo-lg': '8px 8px 0px #000000',
        'neo-xl': '12px 12px 0px #000000',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      }
    }
  }
}; 