module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'book',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      author: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
	
	published_date: {
		type: DataTypes.DATE,
		defaultValue: DataTypes.NOW 
	}
    },
    {
      timestamps: false
    }
  );
};
