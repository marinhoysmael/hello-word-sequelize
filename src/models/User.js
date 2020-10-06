const {Model, DataTypes} = require('sequelize');

class User extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING
        },{
            sequelize
        });
    }

    static associate(models){
        this.hasMany(models.Address,  {foreignKey : 'userId', as : 'addresses'});
        this.belongsToMany(models.Tech, { foreignKey: 'userId', through: 'UserTechs', as: 'techs'});
    }
}

module.exports = User;