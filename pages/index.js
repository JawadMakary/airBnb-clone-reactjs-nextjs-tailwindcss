import Head from 'next/head'

export default function Home() {
  //npm run dev and then copy the localhost link and paste it in the browser
  //delete main and footer
  //head cmp is from nextJs
  //same as head in html5
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>AirBnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <h1>test</h1>
     
    </div>
  )
}
