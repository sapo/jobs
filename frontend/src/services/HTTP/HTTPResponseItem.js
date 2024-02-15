export { HTTPResponseItem as default };

/**
* HTTP Response Item
*
* @author      rsimoes <ruben-r-simoes@telecom.pt>
* @copyright   Copyright (C) Sapo. All rights reserved.
* @license     Private
*/
class HTTPResponseItem {
  /**
   * Defines if response success
   *
   * @public
   *
   * @type {Boolean}
   */
  success;

  /**
   * Parsed results
   *
   * @public
   *
   * @type {Object}
   */
  results;

  /**
   * Error message
   *
   * @public
   *
   * @type {String}
   */
  error;
}