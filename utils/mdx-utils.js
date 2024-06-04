import { api } from '../services/api'

export const getPosts = async () => {
    const {data} = await api.get('/posts'); 
    if(data){
        console.log(data)
        return data;
    }
    console.log("nada")
    return []
}

export const getPostBySlug = async (id) => {
    const posts = await getPosts();
    const post = posts.filter(data => data.id === id);
    console.log(post)
    if (post){
        return post[0]
    }
        return {}
    }