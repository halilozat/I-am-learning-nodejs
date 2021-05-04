const axios = require('axios')

const getAllArticle = async (req,res) => {
    
    try {

        const blogAPI = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts')
        
    } catch (error) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.header);
        res.json({
        message: 'Error: '+ error.response.data
    
    })
    }
    res.render('./articles/index.ejs')
}

const getSingleArticle = async (req,res) => {
    let articleID = req.params.articleID
    try {
        const singleArticle = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts/'+articleID)
    
        res.render('./articles/article')
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