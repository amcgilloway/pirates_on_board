class Request {

  get(url) {
    return fetch(url)
    .then((res) => res.json());
  }

  post(url, payload){
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      }).then((res) => res.json());
  }
}

export default Request;
