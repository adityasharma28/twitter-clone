import Head from 'next/head'
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <div className="grid place-items-center h-screen">
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <Sidebar>
          
        </Sidebar>
      {/*Sidebar */}
      {/*Feed */}
      {/*Widgets */}

      {/*Model */}
      </main>
    </div>
  );
}
