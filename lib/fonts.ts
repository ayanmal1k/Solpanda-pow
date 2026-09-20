import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

export const taskor = localFont({
  src: [
    {
      path: '../public/taskor-font/taskor-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/taskor-font/taskor-slant.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-taskor',
  display: 'swap',
})

export const taskorOblique = localFont({
  src: [
    {
      path: '../public/taskor-font/taskor-slant.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-taskor-oblique',
  display: 'swap',
})

