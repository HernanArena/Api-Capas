class UserService {

  constructor({ UserBusiness }){
    this._userBusiness = UserBusiness;
  }

  async getUser(){
    const user= await this._userBusiness.getUser();
    return user;

  }
  async createUser(user){
    const createdUser = await this._userBusiness.createUser(user);
    return createdUser;

  }
  async updateUser(id, user){
    const updatedUser = await this._userBusiness.updateUser(id,user)
    return updatedUser;
  }
  async deleteUser(id){
    const deletedUser = await this._userBusiness.deleteUser(id)
    return deletedUser;
  }
}

module.exports = UserService;
