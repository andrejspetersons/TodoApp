import { isRouteErrorResponse, useRouteError } from "react-router-dom"

export default function ErrorPage(){
    const error=useRouteError();
    if(isRouteErrorResponse(error)){

    return(
    <div id="error-page">
        <h1>Oops! {error.status}</h1>
        <p>{error.statusText}</p>
        {error.data?.message && (
          <p>
            <i>{error.data.message}</i>
          </p>
        )}
    </div>
    )
}
}