"use strict"

module.exports = (sequelize, DataTypes) =>{
  const UserCourse = sequelize.define(
    "userCourses",
    {
      userId: DataTypes.INTEGER,
      courseId: DataTypes.INTEGER
    },
    {
      tableName: "userCourses",
      timestamp: false
    }
  );
  UserCourse.associate = function (models){};
  return UserCourse;
}
