import dynamic from 'next/dynamic'
import Image from 'next/image';

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr:false});

export default function Home() {
  return (
    <>
      <div>
      <div className="topheader">
      <h1>Hedieh Canada Line</h1>
      <Image src="/images/Logo.png" 
      width={20} height={20} alt="Logo"/>
      </div>
      <DynamicMap/>
    </div>
    </>
  )
}

