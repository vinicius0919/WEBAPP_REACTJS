import axios from "axios"

const autenticar = async (email, password) => {
  const url = 'http://10.0.0.208:3000/auth/login'
  try {
    const response = await axios({
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': "*"
      },
      url: url,
      data: {
        email: email,
        password: password
      }
    });
    return response.data;

  } catch (error) {
    console.log(error)
  }
};

export async function addUser(nome, sobrenome, email, password, cpf){
  const url = 'http://10.0.0.208:3000/proprietario'
  try {
    const response = await axios({
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': "*"
      },
      url: url,
      data: {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        password: password,
        cpf: cpf
      }
    });

    return true;

  } catch (error) {
    return false
  }
}

export async function getUser(token){
  console.log("ENVIANDO O TOKEN:",token)
  const url = 'http://10.0.0.208:3000/proprietario/perfil'
  try {
    const response = await axios({
      method: 'get',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': "*"
      },
      url: url
    });
    return response.data;

  } catch (error) {
    console.log(error)
  }
}

export default autenticar;
