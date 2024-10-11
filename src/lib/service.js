import axios from 'axios';

export default async function getData(userId) {
  try {
    // Kullanıcı bilgilerini çek
    const userResponse = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userData = userResponse.data;

    // Kullanıcının postlarını çek
    const postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    const postsData = postsResponse.data;

    // Kullanıcı bilgileri ve postları birleştir
    return {
      ...userData,
      posts: postsData
    };
  } catch (error) {
    console.error('Veri çekme hatası:', error);
    throw error;
  }
}