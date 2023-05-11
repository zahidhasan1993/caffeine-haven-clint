import { useRouteError } from "react-router-dom";
import errorIMG from "../../assets/404/404.gif"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center">
    <img src={errorIMG} alt="" />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}