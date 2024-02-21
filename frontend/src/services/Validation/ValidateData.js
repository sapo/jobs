export default class ValidateData {
  static requiredValues(params, required_values = {}) {
    let invalid     = {};
    let valid       = {};
    let valid_count = 0;
    let total_count = 0;


    for (let key in required_values) {
      total_count++;

      if (!params || params[key] !== required_values[key]) {
        invalid[key] = params[key];
        continue;
      }

      valid[key] = params[key];
      valid_count++;
    }

    return {
      success: valid.length === total_count,
      invalid: invalid,
      valid  : valid,
    }
  }

  static requiredCookie(value) {
    return {
      cookie: document.cookie,
      valid : document.cookie.includes(value),
    }
  }
}