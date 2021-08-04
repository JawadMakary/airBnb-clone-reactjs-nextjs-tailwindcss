import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'

export default function Home() {
  
//npx create-next-app -e with-tailwindcss my-project to create it

  //npm run dev and then copy the localhost link and paste it in the browser
  //delete main and footer
  //head cmp is from nextJs
  //same as head in html5
  return (
    <div className="">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      <Header/>
      <Banner />
    </div>
  )
}
