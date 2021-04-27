import { Fragment } from 'react';
import GlobalStyle from '../globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
