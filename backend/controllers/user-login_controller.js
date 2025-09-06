const datab = require('../db.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();
const key = process.env.JWT_KEY

const createUser = (req,res)  => {
    const {email_address,password} = req.body
    console.log(req.body)
    const query1 = `SELECT * FROM users WHERE email_address = ?;` 
    datab.get(query1,[email_address],(err,rows) => {
        if (err) {
            console.log(err.message)
            res.status(500).json({'message':'database error!'})
        }
        if(rows){
            console.log('user found')
            res.status(400).json({'message':'Email already exists'})
        }
        else{
        if(rows === undefined){
            bcrypt.hash(password,10,(err,hash) => {
                if (err){
                    console.log(err.message)
                }
                const createUserQuery = `INSERT INTO users(email_address,password) VALUES ('${email_address}','${hash}');`
                    datab.run(createUserQuery,[],(err)=>{
                    if(err){
                        console.log(err.message)
                        res.status(500).json({'message':'database error!'})
                    }
                    console.log('user created')
                    res.status(200).json({'message':'USER CREATED'})
                })     
            })
        }
    }
    })
}


const logUser = (req,res) => {
    const {email_address,password} = req.body
    const checkUser = `SELECT * FROM users WHERE email_address = ?;`
    datab.get(checkUser,[email_address],(err,rows) => {
        if(err){
            console.log(err.message)
            res.status(500).json({'message':'database error!'})
        }
        if (rows === undefined){
            res.status(404).json({'message':'Invalid Email Address'})
        }
        else{
            bcrypt.compare(password,rows.password,(err,result) => {
                if (result){
                    jwt.sign(email_address,key,(err,token) => {
                        if (err){
                            console.log(err.message)
                        }
                        res.status(200).json({"message" : 'SUCCESS',"jwt_token" : token})
                    })
                }
                else{
                    res.status(400).json({"message" : "Incorrect Password"})
                }
            })
        }
    })


}

const getUser = (req,res) => {
    if (req.user !== undefined){
        res.status(200).json({'message': "SUCCESS" , "user_email": req.user})
    }else{
        res.status(400).json({"message" : "Bad request"})
    }
}

module.exports = {createUser,logUser,getUser}