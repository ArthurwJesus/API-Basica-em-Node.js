//conexão
const {Pool} = require('pg');

const pool = new Pool({
    host:'localhost',
    user:'postgres',
    password:'postgres',
    database:'Apidados',
    port: '5432'
})


//pegar usuario espera fazer a consulta e retornar
const getUsers = async (req,res) =>{ 
    const resposta = await pool.query('SELECT * FROM personagens');
    res.status(200).json(resposta.rows)
}

//criar personagem , passa os vaores q tem q ter
const creatUser = async (req,res) =>{

    const{codigo,
        nome,
        apelido,
        idade,
        vida,
        tipo,
        associacao1,
        associacao2,
        status} =req.body;

      const resposta = await pool.query('INSERT INTO personagens(codigo,nome,apelido,idade,vida,tipo,associacao1,associacao2,status) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)',[codigo,nome,apelido,idade,vida,tipo,associacao1,associacao2,status]);
      console.log(resposta)
      res.json({
          message: "personagem criado",
          body:{
              personagens:{codigo,
                nome,
                apelido,
                idade,
                vida,
                tipo,
                associacao1,
                associacao2,
                status}
          }
      })
      res.send('Criado')
}

const getUserById = async (req,res) =>{
    const resposta = await pool.query('SELECT * FROM personagens WHERE codigo = $1',[req.params.codigo])
    res.json(resposta.rows);
}

module.exports ={
    getUsers,
    creatUser,
    getUserById
}
