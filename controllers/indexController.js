class Index {
    static showIndex(req,res){
        //respond with the index.ejs file
        res.render("index");
    }
}
//export the index module
module.exports = Index;