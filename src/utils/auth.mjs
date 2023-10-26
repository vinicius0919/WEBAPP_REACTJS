import axios from "axios";

const commonHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
  'Acess-Control-Allow_Header': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
};

const api = (token) => axios.create({
  baseURL: "http://10.0.0.208:3000/",
  headers: {
    ...commonHeaders,
    'Authorization': `Bearer ${token}`
  }
});

export const Api = () => ({
  getUserProfile: async (token) => {
    try {
      const minhaApi = api(token);
      const response = await minhaApi.get("proprietario/perfil", { headers: { 'Authorization': `Bearer ${token}`, ...commonHeaders } });
      return response.data;
    } catch (error) {

      throw error; // Lança o erro novamente para ser tratado mais acima
    }
  },
  authUser: async (email, password) => {
    try {
      const minhaApi = api();
      const response = await minhaApi.post("auth/login", { email, password }, { commonHeaders });
      console.log(response.data)
      return response.data;
    } catch (error) {

      throw error;
    }
  },
  updateUser: async (nome, sobrenome, token, id) => {
    try {
      const minhaApi = api(token);
      const response = await minhaApi.patch(`proprietario/${id}`, { nome, sobrenome });
      return response.data;
    } catch (error) {

      throw error;
    }
  },
  addNewEmpresa: async (token, nome_fantasia, razao_social, cnpj) =>{
    try {
      const minhaApi = api(token)
      await minhaApi.post('empresa', {nome_fantasia, razao_social, cnpj})
      return true
    } catch (error) {
      return false;
    }
  }
});

export const autenticar = async (email, password) => {
  const url = 'http://10.0.0.208:3000/auth/login';
  try {
    const response = await axios.post(url, { email, password }, { headers: commonHeaders });
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export async function addUser(nome, sobrenome, email, password, cpf) {
  const url = 'http://10.0.0.208:3000/proprietario';
  try {
    await axios.post(url, { nome, sobrenome, email, password, cpf }, { headers: commonHeaders });
    return true;
  } catch (error) {
    return false;
  }
}

export async function getUser(token) {
  console.log("ENVIANDO O TOKEN:", token);
  const url = 'http://10.0.0.208:3000/proprietario/perfil';
  try {
    const response = await axios.get(url, { headers: { 'Authorization': `Bearer ${token}`, ...commonHeaders } });
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
}
