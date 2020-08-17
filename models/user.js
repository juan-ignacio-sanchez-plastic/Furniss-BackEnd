module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: 'VARCHAR',
      unique: true,
      required: true
    },
    password: {
      type: 'VARCHAR',
      required: true
    },
    name: {
      type: 'VARCHAR',
      required: true
    },
    lastname: {
      type: 'VARCHAR',
      required: true
    },
    telephone: {
      type: DataTypes.INTEGER,
      required: false
    },
    email: {
      type: 'VARCHAR',
      unique: true,
      required: true
    },
    address: {
      type: 'VARCHAR',
      required: false
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      required: true
    },
    created_at: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      default: DataTypes.NOW
    },
    gender: {
      type: 'VARCHAR',
      required: false
    }
  });
  return User
}