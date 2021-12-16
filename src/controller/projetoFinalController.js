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

const atualizacaoCadastro = async (req, res) => {
    try {
        const atualizarCadastro = await criarCadastro.findById(req.params.id);

        if(atualizarCadastro) {
            atualizarCadastro.perguntas = req.body.perguntas || atualizarCadastro.perguntas
            atualizarCadastro.apelido =req.body.apelido || atualizarCadastro.apelido
            atualizarCadastro.idade = req.body.idade || atualizarCadastro.idade
            atualizarCadastro.idadeDaCrianca = req.body.idadeDaCrianca || atualizarCadastro.idadeDaCrianca
            atualizarCadastro.generoDaCrianca = req.body.generoDaCrianca || atualizarCadastro.generoDaCrianca
            atualizarCadastro.respostas = req.body.respostas || atualizarCadastro.respostas

            const salvarCadastros = await atualizarCadastros.save();
            res.status(200).json({
                message: "Dados da pessoa, atualizado com sucesso",
                salvarCadastros
            })
         
        }
        
        res.status(400).json({message: "Me desculpe, cadastro não encontrado!"});
    }catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deletarCadastro = async (req, res) => {
    try {
        const cadastro = await Users.findById(req.params);
        if(!cadastro) {
            res.status(404).json({message: "Cadastro não encontrado."})
        }
        await cadastro.delete();
        res.status(204).json({message: "Cadastro deletado com sucesso."})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const buscarId = async (req, res) => {
    try {
        const { id } = req.params;
        const buscarcadastro = await Users.findById(id);

        if(!buscarcadastro) {
            res.status(404).json({message: "Cadastro não encontrado."})
        }
        res.status(200).json({
            message: "cadastro encontrado:",
            buscarcadastro
        })
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}




module.exports = {
    getAll,
    criarCadastro,
    atualizacaoCadastro,
    deletarCadastro,
    buscarId
}
