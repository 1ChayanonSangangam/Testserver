const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser')
const express = require('express')

const app  = express()

const assert = require('assert');
const ip =[
    "158.108.207.134",
    "158.108.207.207",
    "158.108.207.183"
]

app.use(bodyParser.urlencoded({extended : false})); // false ใช้อัลกอในการ map json ธรรมดา ,true = high
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Orgin, X-Requested-With, Content-Type, Accept,Authorization,authorization,content-type');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET');
        return res.status(200).json({});
    }
    next(); // ไปต่อ
})
// Connection URL
const url = 'mongodb://127.0.0.1:27017/databaseIOT';
 
// Database Name
const dbName = 'myproject';
// Use connect method to connect to the server
// for (let i = 0; i < ip.length; i++) {
    
//     MongoClient.connect('mongodb://158.108.207.134:27017/databaseIOT', function(err, db) {
//         db.collection("tb_iot")
//         .insertOne( { _id:req.body.idDB,url : req.body.strUrl,tableDW:req.body.header,ServiceNameDW:req.body.ServiceNameDW,modifytime:myDate } ,(err,result)=>
//         {
//             if(err)
//             {
//                 console.log("error")
//                 throw err;
//             }
//             else
//             {
//                 console.log("insert complete")
//             }
//         });

//     });
// }

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

