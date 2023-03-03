import styles from './layout.module.css';
import Link from 'next/link';
import Image from 'next/image';
export default function Layout({ children, home }) {
    return(<><header> {home ? (
        <>
          <Image
            priority
            src="/images/girl-bicycle-riding-mountain-road-seascape_107791-7809.avif"
            height={144}
            width={250}
            alt=""
          /><h2>...first next app...</h2>
        </>
      ) : (
        <>
          <Link href="/">
            <Image
              priority
              src="/images/girl-bicycle-riding-mountain-road-seascape_107791-7809.avif"
              height={108}
              width={108}
              alt=""
            />
          </Link>
          <h2>
            <Link href="/">
              Sanya
            </Link>
          </h2>
        </>
      )}
    </header><div className='{styles.container}'>{children}
    </div>
    {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}</>);}