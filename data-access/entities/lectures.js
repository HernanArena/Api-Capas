"use strict"

module.exports = (sequelize, DataTypes) => {
  const Lecturer = sequelize.define(
    "lecturers",
    {
      lecturerName: DataTypes.STRING
    },
    {
      tableName: "lecturers",
      timestamp: false
    }
  );
  Lecturer.associate = function (models) {
    Lecturer.hasOne(models.courses, {
      foreingKey: "lecturerId",
      as: "courses"
    });
  };
  return Lecturer;
}
