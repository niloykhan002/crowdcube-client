import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex flex-col gap-6 items-center">
        <h1 className="text-7xl font-extrabold">Oops!</h1>
        <h2 className="text-xl">404 Page Not Found</h2>
        <Link to={"/"} className="btn btn-neutral">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
