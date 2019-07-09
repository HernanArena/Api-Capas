"use strict";

module.exports = (sequelize,DataTypes) => {
  var Course = sequelize.define(
    "courses",
    {
      lecturerId: DataTypes.INTEGER,
      courseName: DataTypes.STRING
    },
    {
      tableName: "courses",
      timestamp: false
    }
  );
  Course.associate = function (models){
    Course.belongsToMany(models.users, {
      through: "userCourses",
      as: "users",
      foreingKey: "courseId"
    });
    Course.belongsTo(models.lecturers, {
      foreingKey: "lecturerId",
      as: "lecturers"
    });
  };
  return Course;
}
