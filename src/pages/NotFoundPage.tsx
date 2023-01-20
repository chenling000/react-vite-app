import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>Not Found</h1>
      <Link to="/">Go to homepage</Link>
    </>
  );
};

export default NotFoundPage;
