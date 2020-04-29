// import styles from './Wrapper.module.css';

function Wrapper({ children }) {
  return (
    <div
      // className={styles.wrapper}
      className="wrapper"
    >
      {children}

      <style jsx>{`
        .wrapper {
          max-width: 36rem;
          padding: 0 1rem;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}

export default Wrapper;