import dynamic from 'next/dynamic'
import Head from 'next/head';

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr:false});

export default function Home() {
  return (
    <>
      <Head>
        <title> Hedieh Canada Line</title>
        <link rel='icon' href="/images/Logo.png"/>
      </Head>
      <DynamicMap/>
    </>
  )
}
