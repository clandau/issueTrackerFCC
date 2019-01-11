/*
*
*
*       Complete the API routing below
*
*
*/

'use strict'

const expect = require('chai').expect
const MongoClient = require('mongodb'), assert = require('assert')
const ObjectId = require('mongodb').ObjectID

const dotenv = require('dotenv').config()

const CONNECTION_STRING = process.env.DB

MongoClient.connect(CONNECTION_STRING, (err, db) => {
  if(err) console.log('cannot connect to database. error: ', err)
  console.log('connected successfully to the server')
})

module.exports = function (app) {

  app.route('/api/issues/:project')
    .get(function (req, res){
      let project = req.params.project;
      
    })
    
    .post(function (req, res){
      let project = req.params.project;
      
    })
    
    .put(function (req, res){
      let project = req.params.project;
      
    })
    
    .delete(function (req, res){
      let project = req.params.project;
      
    })
    
};
