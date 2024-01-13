import dynamic from 'next/dynamic'
import Image from 'next/image';

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr:false});

export default function Home() {
  return (
    <>
      <div className="topheader">
      <div className="justify-center">
        <h1>Hedieh Canada Line</h1>
      <Image src="/images/Logo.png" alt="Logo" width={20} height={20}/>
      </div>
      <DynamicMap/>
    </div>
    </>
  )
}

