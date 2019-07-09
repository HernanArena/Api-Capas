const mapper = require("automapper-js");
const {User} = require("./models");

class UserBusiness {
  constructor({ UserRepository }){
    this._userRepository = UserRepository;
  }
  async getUsers(){
    const users = await this._userRepository.getUsers();
    return users.map(user => mapper(User, user.toJson()));
  }
  async getUser(id){
    const user = await this._userRepository.getUser(id);
    return mapper(User,user.toJson());
  }
  async createUser(user){
    user = mapper(User,user);
    const createdUser = await this._userRepository.createUser(user);
    return mapper(User, createUser.toJson());
  }
  async updateUser(id, user){
    user.id = id;
    user = mapper(User, user);
    const upatedUser = await this._userRepository.updateUser(id,user);
    return mapper(User,updateUser);
  }
  async deleteUser(id){
    return await this._userRepository.deleteUser(id);
  }
}

module.exports = UserBusiness;
