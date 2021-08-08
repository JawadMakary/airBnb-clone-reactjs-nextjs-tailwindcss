import 'tailwindcss/tailwind.css'
import '../styles/global.css'
import ProgressBar from "@badrap/bar-of-progress";
import Router from 'next/router'
const progress= new ProgressBar({
  size:4,
  color:"#FE595E",
  className:'z-50',
  delay:100,

})
// progress bar conf
Router.events.on('routeChangeStart',progress.start)
Router.events.on('routeChangeComplete',progress.finish)
Router.events.on('routesChangeError',progress.finish)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
