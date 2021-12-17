<h1 align="center">
    <br>
    <p align="center">Projeto Final <p>
</h1>
<p align="center">
<img src=""/>
</p>
<br>

## 💻 Sobre o projeto 

<br>

 API desenvolvida como Projeto Final com o auxílio da professora Paula Allemand para a conclusão do curso de Backend  [{Reprograma}](https://reprograma.com.br/)

<p align="justify">Este projeto nasceu da minha vontade de ajudar mães, assim como eu que tem dificuldades na hora de abordar alguns assuntos como por exemplo: sexualidade, mudanças no corpo, abusos e etc...

<p align="justify">O objetivo principal da construção dessa API, é a conexão dessas mães que precisam de ajuda, com mães que têm a possibilidade de ajudar e compartilhar suas experiências. Sempre com a preocupação de proteção dos dados de todos os envolvidos.

<p align="justify">Com o pensamento no futuro de se tornar com mais visibilidade para mais compartilhamentos, depoimentos e ajudas psicológica e viável para a criação de um espaço seguro, como implementação futura.

<br><br>

## 🚀 Descrição da API Para Mães

<br>

<p align="justify">O projeto é uma API REST que permite que mães, consigam se cadastrar, informando seus dados e descrevendo informações, de forma objetiva, para que haja a conexões com outras mães, que estejam procurando formas de ajudar, tendo assim uma opção de login para estas que buscam ajudar.

<p align="justify">A interface é um CRUD completo integrado com o banco de dados, onde é possível listar os usuários, cadastrar novos usuários, atualizar os dados e deletar o cadastro do usuário.


  
<br>

## 🔗 Link 

- [Apresentação]()

<br>

## ⚙️ Funcionalidades/Objetivos

- Listar todas as pessoas que estão cadastradas no sistema;
- Listar todos os cadastrados pelo Id;
- Cadastrar todas as mães que precisam de ajuda;
- Atualizar os cadastros de todas as mães;
- Deletar essa pessoa caso não seja mais necessário este suporte;

<br>

## 📚 Aprendizados

O projeto final consiste em uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 

<br>

## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)  

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)

<br>

## 📁 Arquitetura MVC 

```
 📁 projeto-final
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 projetofinalController.js
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |
   |    |- 📁 models
   |         |- 📑 projetofinalSchema.js
   |         
   |
   |    |- 📁 routes
   |         |- 📑 projetofinalRoutes.js 
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
```
<br>

## 🔃 Rotas

* local: http://localhost:7000

* Heroku: https://para-maes.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku


<br>

## 🔃 Retorna teste com apresentação: 

| Método HTTP  | Endpoint                     | Descrição                            |
| ------------ | ---------------------------- | ------------------------------------ |
| GET          | `http://localhost:7000/`     |  Mensagem de apresentação (Index)    |             |

<br>

## 🔃 Manipulação das Rotas de Usuários que serão ajudados:

| Método HTTP  | Endpoint                | Descrição                            |
| ------------ | ----------------------- | ------------------------------------ |
| GET          | `/todos`                | Retorna todos os usuários            |
| GET          | `/todos/:id`            | Retorna todos os dados po id         |
| POST         | `/criar`                | Cria/cadastra um novo usuário        |
| PUT          | `/atualizar/:id`        | Altera informações de um usuário     |
| DELETE       | `/deletar/:id`          | Deleta um usuário específico         |

<br>

## ✅ Dados para Collection Projeto Final:

- perguntas: texto obrigatório
- apelido: texto e obrigatório
- idade: texto e obrigatório
- idadeDaCrianca: texto não obrigatório
- generoDaCriaca: texto não obrigatório
- respostas: array não obrigatório

<br>

## ✅ API deve retornar seguinte JSON:

```jsx
{
    "mensage": "Cadastro realizado com sucesso",
    "encontrarUsuario": {
        "perguntas": "como falo sobre sexo?",
        "apelido": "quel",
        "idade": 38,
        "idadeDaCrianca": 10,
        "generoDaCrianca": "FEM",
        "respostas": [],
        "_id": "61b95a45ea647cc38bf1d51c",
        "createdAt": "2021-12-15T03:00:21.919Z",
        "updatedAt": "2021-12-15T03:00:21.919Z",
        "__v": 0
    }
}
```

<br>


## 🚧 Melhorias para o futuro (Em construção)

<br>

*  Implantação de código Front-end.
* Acrescentar no banco de dados, uma requisição que grava o ID de quem está logado, para segurança de quem está cadastrado.
* Acrescentar um chat para conversas.
* Complementar a parte de perguntas e respostas.
* Ter depoimentos e ajuda psicológica.

Estou aberta, caso queiram ajudar com algo no meu projeto.

<br>

## 👨‍💻 Autora

<br>

<td align="center"><a href="https://github.com/juliarebecca">
<img style="border-radius: 20%;" src="https://avatars.githubusercontent.com/u/88255877?v=4"
 width="200px;" alt=""/> </td><br> 


## [Julia Borges](https://github.com/juliarebecca)
## [LinkedIn](https://www.linkedin.com/in/juliarebeccaborges/) 

<br>

## 🥰 Agradecimentos:

<p align="justify">Primeiramente gostaria de agradecer a Deus que sem ele nada é possível, segundo a minha irmã Barbara Borges que me apresentou a {Reprograma} e não sossegou até eu fazer a inscrição e aqui estou ❤️ , terceiro a Reprograma que por ter me escolhido entre tantas mulheres e ter me acolhido e dado a opotunidade de aprender uma nova profissão e poder finalmente ter a oportunidade de mudar de vida em meio a tantos problemas (minha luz no fim do túnel).
<p align="justify">A todas as maravilhosas da minha turma e falo todas mesmo(Vocês são incríveis) que me deram uma nova família e quero vocês para sempre em minha vida, mas em especial e não poderia deixar de citar elas: Samila que foi meu apoio inicial e me ajudou muito no início e me fez não desistir, nunca esquecerei Sami, obrigada de coração por tudo, sem você não estaria aqui hoje, depois a Xênia no início e meio foi um apoio também me ajudando e conversando e também me ajudou a não desisti e está aqui hoje, por último mas não menos importante a Hannah que me ajudou e me acolheu agora no finalzinho e sem ela realmente não estaria aqui pois me ajudou com tudo no final, me apoiando inclusive com esse projeto quando eu achava que estava tudo perdido, Te amo mulher!!!
<p align="justify">A todas as Professoras divas e maravilhosas que passaram por aqui e Monitoras por todo ensinamento e acolhimento.
Raquel que realmente facilita a vida de qualquer uma, obrigada por tudo!
<p align="justify">Vocês sempre estarão em meu coração, gratidão por tudo que vivi aqui com cada uma aqui e lembrem: Lugar de mulher é onde ela quiser.

<p align="justify">Beijos maravilhosas Amo Vocês!