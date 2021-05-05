const axios = require('axios')

const getAllArticle = async (req,res) => {  
    try {

        const blogAPI = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts')
        res.render('./articles/index',{articles: blogAPI.data})

    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);
        res.json({
        message: 'Error: '+ error.response.data
    
    })
    }   
}

const getSingleArticle = async (req,res) => {
    let articleID = req.params.articleID
    try {
        const singleArticle = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts/'+articleID)
    
        res.render('./articles/article',{article: singleArticle.data})
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);

        res.json({
            message: 'Error: '+ error.response.data
        })
    }
}

module.exports = {
    getAllArticle,
    getSingleArticle
}