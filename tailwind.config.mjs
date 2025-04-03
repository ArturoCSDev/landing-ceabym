/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
        ceabym: {
          1: "var(--ceabym-1)",
          2: "var(--ceabym-2)",
          3: "var(--ceabym-3)",
          4: "var(--ceabym-4)",
          5: "var(--ceabym-5)",
          6: "var(--ceabym-6)",
          7: "var(--ceabym-7)",
          8: "var(--ceabym-8)",
          9: "var(--ceabym-9)",
          10: "var(--ceabym-10)",
          11: "var(--ceabym-11)",
          12: "var(--ceabym-12)",
          DEFAULT: "var(--ceabym-9)"
        },
        
        secondary: {
          1: "var(--secondary-1)",
          2: "var(--secondary-2)",
          3: "var(--secondary-3)",
          4: "var(--secondary-4)",
          5: "var(--secondary-5)",
          6: "var(--secondary-6)",
          7: "var(--secondary-7)",
          8: "var(--secondary-8)",
          9: "var(--secondary-9)",
          10: "var(--secondary-10)",
          11: "var(--secondary-11)",
          12: "var(--secondary-12)",
          DEFAULT: "var(--secondary-9)"
        },
        
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}