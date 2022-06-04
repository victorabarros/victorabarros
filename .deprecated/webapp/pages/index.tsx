import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Victor Barros'</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <h1>Victor Barros</h1> website
        </h1>

        <p className={styles.description}>
          Get started by editing
        </p>

      </main>

      <footer className={styles.footer}>
        victorbarros.dev
      </footer>
    </div>
  )
}
