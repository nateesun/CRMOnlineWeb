/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */

function parseJSON(response) {
  const { status, headers } = response;
  if (status === 204 || status === 205) {
    return null;
  }
  if (status === 200 && parseInt(headers.get('content-length'), 10) === 0) {
    return {};
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  const { status, statusText } = response;
  if (status >= 200 && status < 300) {
    return response;
  }

  if (status >= 400 && status < 500) {
    return response;
  }

  const error = new Error(statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {
  const { headers: headersInOptions, database } = options;
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Basic YWRtaW46c29mdHBvczIwMTM=`,
    database: database || '',
  };
  if (headersInOptions) {
    headers = headersInOptions;
  }
  return fetch(url, { ...options, headers })
    .then(checkStatus)
    .then(parseJSON);
}
