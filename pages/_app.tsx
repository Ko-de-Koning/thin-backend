import '../styles/globals.css'
import 'thin-backend-react/auth.css';

import type { AppProps } from 'next/app'
import { ThinBackend } from 'thin-backend-react';
import { initThinBackend } from 'thin-backend';

initThinBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

function MyApp({ Component, pageProps }: AppProps) {
  return <ThinBackend requireLogin><Component {...pageProps} /></ThinBackend>
}
export default MyApp
