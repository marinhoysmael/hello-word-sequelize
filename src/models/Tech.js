const {Model, DataTypes} = require('sequelize');

class Tech extends Model{
    static init(sequelize){
        super.init({
            name: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'Techs'
        });
    }
    
    static associate(models){
        //Muitos para muitos
        this.belongsToMany(models.User, { foreignKey: 'techId', through: 'UserTechs', as: 'users'});
    }
}

module.exports = Tech;