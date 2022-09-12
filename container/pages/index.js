import dynamic from 'next/dynamic';
import styles from '../styles/Home.module.css';

const ReactifiedApp = dynamic(() => import('../components/ReactifiedApp'), { ssr: false });
const ProductsApp =   dynamic(() => import('../components/ProductsApp'), { ssr: false });

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ReactifiedApp />
        <div style={{ margin: '10px', padding: '10px' }}>Hello from Next Container App</div>
        <ProductsApp />
      </main>
    </div>
  )
}
