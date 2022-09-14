function pAJAX(options) {
    let { method = 'GET', url = undefined, params = null } = options;
    return new Promise((resolve, reject) => {
        let str = '';
        let req = new XMLHttpRequest();
        if (method === 'POST') {
            req.setRequestHeader(
                'Content-Type',
                'application/x-www-form-urlencoded'
            );
        }
        if (params !== null) {
            for (i in params) {
                str += i + '=' + params[i] + '&';
            }
            str = str.replace(/&$/, '');
            if (method === 'GET') {
                url = url + '?' + str;
            }
        }
        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                if (req.status >= 200 && req.status < 300) {
                    resolve(req.responseText);
                } else {
                    reject('Failed');
                }
            }
        };
        req.open(method, url);
        req.send(method === 'GET' ? void 0 : str);
    });
}