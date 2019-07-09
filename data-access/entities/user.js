module.exports = function(sequelize,DataTypes){
  const User =  sequelize.define(
    "users",
    {
      id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      tableName: "users",
      timestamp: false
    }
  );
  User.associate = function (models){
    User.belongsTo(models.classrooms, {
      foreingKey: "classroomId",
      as: "classrooms"
    });
    User.belongsToMany(models.courses, {
      through: "usercourses",
      as: "courses",
      foreingKey: "id"
    });
  };
  return User;
};
