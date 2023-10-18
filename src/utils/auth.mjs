import axios from "axios"

const autenticar = async (email, password) => {
  console.log(email, password)
  const m = 'http://192.168.0.109:3000/auth/login'
  const q = "http://localhost:3004/login"
  try {
    const response = await axios({
      method: 'post',
      headers: {
        'Access-Control-Allow-Origin': "*"
      },
      url: m,
      data: {
        email: email,
        password: password
      }
    }
    );

    // Se a autenticação for bem-sucedida, a resposta da API estará disponível em `response.data`.
    console.log(response.data)
    return response.data;
  } catch (error) {
    // Em caso de erro, o Axios capturará a exceção e você pode tratá-la aqui.
    return error;
  }
};

export default autenticar;
