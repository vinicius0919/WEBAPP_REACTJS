import axios from "axios"

const api = (token) => axios.create({
  headers: {
    'Authorization': `Bearer ${token}`,
    'Accept': "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    "Acess-Control-Allow_Header":"Origin, X-Requested-With, Content-Type, Accept, Authorization"
  },
});



export const Api = () =>({

    getUserProfile: async (token) =>{
      const minhaApi = api(token, "proprietario/perfil");
      await minhaApi.get()
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.error(error);
      });
    },
    authUser: async(email, password, token) =>{
      const minhaApi = api(token, "auth/login");
      await minhaApi.post({email: email, password:password})
      .then(response => {
        return response.data ;
      })
      .catch(error => {
        console.error(error);
      });
    },
     updateUser: async(nome, sobrenome, token, id) =>{
      const minhaApi = api(token);
      await minhaApi.patch("http://10.0.0.208:3000/proprietario/213fdc64-ea09-44af-ae12-bf07687437f1",{nome:nome, sobrenome:sobrenome})
      .then(response =>{
        return response.data;
      })
      .catch(error =>{
        console.log(error)
      });
     }
  })




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
