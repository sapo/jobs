export default class ValidateData {
  static requiredValues(params, required_values = {}) {
    let missing = [];
    let valid   = [];

    for (let key in required_values) {
      if (params[key] !== required_values[key]) {
        missing.push(key);
        continue;
      }

      valid.push(key);
    }

    return {
      missing: missing,
      valid: valid,
    }
  }
}