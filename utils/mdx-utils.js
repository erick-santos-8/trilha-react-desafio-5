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
    let post = {};

    posts.map(data => {
        if(data.id === id){
            post = data;
        }
    })

    console.log(post)
    if (post){
        return post;
    }
        return {}
    }