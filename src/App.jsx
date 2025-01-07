import PropTypes from "prop-types";
import useJsonFetch from "./hooks/useJsonFetch";
import "./App.css";

const BASE_URL = 'https://ra-16-hooks-usejson-backend.onrender.com'

function JsonFetchHook(props) {
  const [data, loading, error] = useJsonFetch(BASE_URL + props.url, { method: "GET" });

  return (
    <div className="json-fetch-hook">
      <h2 className="json-fetch-hook__title">{"GET " + props.url}</h2>
      <p className="json-fetch-hook__text">{JSON.stringify({ data, loading, error })}</p>
    </div>
  );
}

JsonFetchHook.propTypes = { url: PropTypes.string.isRequired };

function App() {
  return (
    <>
      <JsonFetchHook url="/data" />
      <hr />
      <JsonFetchHook url="/error" />
      <hr />
      <JsonFetchHook url="/loading" />
    </>
  );
}

export default App;