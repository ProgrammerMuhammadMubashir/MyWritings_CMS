import styles from './not-found.module.css'; // import the CSS module

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function NotFound() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentBox}>
        {/* Large 404 number */}
        <h1 className={styles.mainCode}>
          4<span className={styles.accent}>0</span>4
        </h1>

        {/* Heading */}
        <h2 className={styles.mainHeading}>
          Page Not Found.
        </h2>

        {/* Informative message */}
        <p className={styles.messageText}>
          Oops! It seems the link you followed might be broken, or the page has been moved. 
          Don't worry, we'll get you back on track.
        </p>

        {/* Action Button */}
        <a href="/" className={styles.actionButton}>
          Go to Homepage
        </a>
      </div>
    </div>
  )
}
