const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const ip =[
    "158.108.207.134",
    "158.108.207.207",
    "158.108.207.183"
]
 
// Connection URL
const url = 'mongodb://localhost:27017/databaseIOT';
 
// Database Name
const dbName = 'myproject';
// Use connect method to connect to the server
for (let i = 0; i < ip.length; i++) {
    
    MongoClient.connect('mongodb://158.108.207.134:27017/databaseIOT', function(err, db) {
        db.collection("tb_iot")
        .insertOne( { _id:req.body.idDB,url : req.body.strUrl,tableDW:req.body.header,ServiceNameDW:req.body.ServiceNameDW,modifytime:myDate } ,(err,result)=>
        {
            if(err)
            {
                console.log("error")
                throw err;
            }
            else
            {
                console.log("insert complete")
            }
        });

    });
}

app.post('/insert', (req, res) =>{
    MongoClient.connect('mongodb://localhost:27017/databaseIOT', function(err, db) {
        db.collection("tb_iot")
        .insertOne( { data1:"xxxx" } ,(err,result)=>
        {
            if(err)
            {
                console.log("error")
                throw err;
            }
            else
            {
                console.log("insert complete")
            }
        });

    });
    
})

module.exports = app

