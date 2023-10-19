import axios from "axios"

const autenticar = async (email, password) => {
  //console.log(email, password)
  const url = 'http://localhost:3004/login'
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
    }
    );

    return response.data;

  } catch (error) {
    console.log(error)
  }
};


export async function getUser(token){
  const url = 'http://localhost:3004/'
  try {
    const response = await axios({
      method: 'get',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': "*"
      },
      url: url,
      data: {
      }
    }
    );

    return response.data;

  } catch (error) {
    console.log(error)
  }
}

export default autenticar;
