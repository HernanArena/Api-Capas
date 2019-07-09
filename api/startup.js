class StartUp {
  constructor({server}){
    this._server = server;
  }
  async init(){
    await this._server.start()
  }
}

module.exports = StartUp;
