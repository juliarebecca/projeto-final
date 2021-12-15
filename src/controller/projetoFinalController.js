const Users = require("../models/projetoFinalSchema");

const getAll = async(req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json({
            message: "Usuário encontrado com sucesso", 
            users
                 
        })
    } catch (error) {
         res.status(500).json({message: error.message});
         }
    }


const criarCadastro = async (req, res) => {
    try{  
       const encontrarUsuario = await Users.create(req.body);
        res.status(201).json({
             mensage: "Cadastro realizado com sucesso",
             encontrarUsuario
        })
        }catch (error) {
        res.status(500).json({message: error.message});  
    }
}


module.exports = {
    getAll,
    criarCadastro
}
