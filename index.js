const PORT = 8000

const axios = require('axios')
const cheerio = require('cheerio')
const { response } = require('express')
const express = require('express')


const app = express()


const url = 'https://www.theguardian.com/international'
axios(url)
  .then(response => {
    const html = response.data
    //console.log(html)
    const $ = cheerio.load(html) 
    const articles = []


    $('.fc-item__title', html).each(function() {
        const title = $(this).text()
        const uuu = $(this).find('a').attr('href')
        //console.log(uuu)
        articles.push({
            title,
            uuu
        })
    })
    console.log(articles)
  }).catch(err => console.log(err))


//app.listen(PORT, () => console.log('server running on PORT ${PORT}') )
app.listen(PORT, () => console.log("server running on PORT... ${PORT}"))

