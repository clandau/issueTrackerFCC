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
      let project = req.params.project
      //returns a JSON array of all issues on current project with all info for each issue
    })
    
    .post(function (req, res){
      let project = req.params.project
      let now = new Date()
      let issueObj = {
        issue_title : req.body.issue_title,
        issue_text : req.body.issue_text,
        created_by : req.body.created_by,
        created_on : now,
        updated_on : now,
        open : true
      }
      console.log(issueObj)
      res.send(issueObj)
    })
    
    .put(function (req, res){
      let project = req.params.project
    })
    
    .delete(function (req, res){
      let project = req.params.project
      
    })
    
};
