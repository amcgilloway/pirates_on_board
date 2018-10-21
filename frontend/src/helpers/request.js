class Request {
  constructor(url){
    this.url = url;
  }


get() {
  return fetch(this.url).then((res) => res.json());
}

post(pirate){
  fetch(this.url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(pirate)
      }).then((res) => res.json());
}

delete(){
  fetch(this.url , {
    method: 'delete'
  })
}

}


export default Request;
