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

   * @returns {Promise<HTTPResponseItem>}
   */
  async post(endpoint, data) {
    let item = new HTTPResponseItem();
    let params   = {
      method: "POST",
      body  :  JSON.stringify(data),
    };

    try {
      let response = await fetch(endpoint, params);
      let results  = await response.json();
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