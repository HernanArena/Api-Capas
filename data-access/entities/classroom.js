"use strict";

module.exports = (sequelize,DataTypes) => {
  const Classroom = sequelize.define(
    "classrooms",
    {
      id:{ type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull:false},
      className: DataTypes.STRING
    },
    {
      tableName: "classrooms",
      timestamp: false
    }
  );
  Classroom.associate = function (models){
    Classroom.hasMany(models.users, {
      foreingKey: "classroomId",
      as: "users"
    });
  };
  return Classroom;
}
