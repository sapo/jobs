export default class ValidateData {
  static requiredValues(params, required_values = {}) {
    let invalid = [];
    let valid   = [];


    for (let key in required_values) {
      if (!params || params[key] !== required_values[key]) {
        invalid.push(key);
        continue;
      }

      valid.push(key);
    }


    return {
      invalid: invalid,
      valid: valid,
    }
  }

  static requiredCookie(value) {
    return {
      cookie: document.cookie,
      valid : document.cookie.includes(value),
    }
  }
}