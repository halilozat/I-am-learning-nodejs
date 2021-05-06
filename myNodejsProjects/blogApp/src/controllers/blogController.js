const axios = require('axios')

const getAllArticle = async (req,res) => {
    let pagination = ""
    let activePage = 1
    
    if(req.query.page){
        pagination = "page="+req.query.page
        activePage = req.query.page
    }
    
    try {

        const blogAPI = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts?per_page=20&'+pagination)
        res.render('./articles/index',{articles: blogAPI.data, pagination: blogAPI.headers, activePage:activePage})

    } catch (error) {  
        
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
        
        res.json({
            message: 'Error: '+ error.response.data
        })
    }
}

const search = async (req,res) => {  

    const wordToSearch = req.body.search

    try {

        const blogAPI = await axios.get('https://emrealtunbilek.com/wp-json/wp/v2/posts?search='+wordToSearch)
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

module.exports = {
    getAllArticle,
    getSingleArticle,
    search
}