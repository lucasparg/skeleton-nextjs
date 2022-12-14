import type { NextPage } from "next"
import Head from "next/head"
import styles from "@styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Skeleton Next App</title>
        <meta name="description" content="Skeleton next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js</a> Skeleton!
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>
      </main>
    </div>
  )
}

export default Home
