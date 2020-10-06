 const {Op} = require('sequelize');
 const User = require('../models/User');

 module.exports = {
    async show(req, res){
        

        const user = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include : [
                {//enredeços
                    association: 'addresses',
                    where: { 
                        street: 'Rua Dos Bobos'
                    }
                },
                {//tecnologia
                    association: 'techs',
                    required : false, //cria uma LEFT JOIN
                    where: {
                        name: {
                            [Op.iLike]: 'React%'
                        }
                    } 
                }, 
            ]
        });

        return res.json(user);
    }
 };