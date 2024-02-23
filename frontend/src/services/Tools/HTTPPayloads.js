import HTTPServiceSingleton from "../HTTP/HTTPService";

export default class HTTPPayloads
{
    static async sendXSSImage() {
       return await HTTPServiceSingleton.postFormData(
        'http://localhost:9980/reflect-payload.php',
        {
            data : JSON.stringify({
                name : 'My Image',
                html : `<img src="x" onerror="alert('Vulnerable!')">`
            })
        })
    }
}