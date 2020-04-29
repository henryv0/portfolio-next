export default ({ heading, description, href, image }) => {
  return (
    <div className="card">
      <img src={image}></img>
      <h2>{heading}</h2>
      <p>{description}</p>
      <a href={href}>External Link</a>

      {/* <svg
        width="400"
        height="400"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M428.7 184.2c28.6 49 35.7 102 20.8 143-14.9 41-51.8 69.9-91.5 86.4-39.6 16.4-82 20.3-134.1 8.9-52-11.5-113.7-38.3-129.1-82.3-15.4-44.1 15.5-105.4 57.5-157.5 41.9-52.1 94.8-94.9 146.3-93.7 51.4 1.1 101.5 46.2 130.1 95.2z"
          fill="hsla(341, 28%, 79%, 0.5)"
        />
      </svg> */}
      <style jsx>{`
        .card {
          border: 1px solid black;
          position: relative;
        }
        img {
          display: block;
        }
        // svg {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   background-size: 20% 40%;
        // }
      `}</style>
    </div>
  );
};