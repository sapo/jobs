import HTTPResponseItem from './HTTPResponseItem';

export {HTTPServiceSingleton as default};

class HTTPService {
   /**
   * Makes a post request to the backend api
   *
   * @public
   *
   * @since 7.0.0
   *
   * @param {String} endpoint   server endpoint
   * @param {Object} data       post data key => value
   * @param {Object} headers    request headers
   * @returns {Promise<HTTPResponseItem>}
   */
  async post(endpoint, data, headers = {}) {
    let params   = {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body:  JSON.stringify(data),
    };

    return await this.call(endpoint, params);
  }

  async postFormData(endpoint, data, headers = {}) {
    let params   = {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        ...headers,
      },
      body:  new URLSearchParams(data).toString(),
    };

    return await this.call(endpoint, params);
  }


  async call(endpoint, params = {}) {
    let item = new HTTPResponseItem();

    try {
      let response = await fetch(endpoint, params);
      let results  = await response.json();

      if (results.error) {
        throw new Error(results.error);
      }

      item.results = results;
      item.success = true;

    } catch (error) {

      item.success = false;
      item.error   = error;
    }

    return item;
  }
}

/**
 * HTTP Service Class for internal requests
 *
 * All Ajax calls are made via JS native fetch API
 *
 * Responses\Requests are pre parsed according to Account Registration API Rules
 *
 * @since 7.0.0
 */
const HTTPServiceSingleton = new HTTPService();