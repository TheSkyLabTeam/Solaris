import './globals.css'
import localFont from 'next/font/local'

const monaE = localFont({
  src: [
    {
      path: './assets/Fonts/MonaSansExpanded-Extralight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-ExtralightItalic.woff2',
      weight: '200',
      style: 'italic',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-SemiBoldItalic.woff2',
      weight: '600',
      style: 'italic',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-ExtraBoldItalic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: './assets/Fonts/MonaSansExpanded-BlackItalic.woff2',
      weight: '900',
      style: 'italic'
    }
  ],
})


export const metadata = {
  title: 'Solaris | Magnetic Reconection',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={monaE.className}>{children}</body>
    </html>
  )
}