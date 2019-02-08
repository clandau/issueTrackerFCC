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

module.exports = function (app) {

MongoClient.connect(CONNECTION_STRING, (err, db) => {
  if(err) console.log('cannot connect to database. error: ', err)
  console.log('connected successfully to the server')

  app.route('/api/issues/:project')
    .get(function (req, res){
      let project = req.params.project
      db.findOne({issue_title : project}, (err, data) => {
        if(err) return err
        else {
          res.send(data)
        }
      })
      //returns a JSON array of all issues on current project with all info for each issue
    })
    
    .post(function (req, res){
      console.log(req.body.issue_title)
      let project = req.params.project || req.body.issue_title
      let now = new Date()
      let issue = req.body.issue_title
      //next step, add to DB and return object with id added
      db.findOne({issue_title : issue}, (err, data) => {
        if(err) {
          console.log(err)
          return res.status(404).send('Issue already exists')
        }
        else {
          console.log(`here`)
          let newIssue = new Issue({
            issue_title : req.body.issue_title,
            issue_text : req.body.issue_text,
            created_by : req.body.created_by,
            open : true
          })
          console.log(newIssue)
          newIssue.save((err, data) => {
            if(err) {
              console.log(`error : ${err}`)
              return res.status(500).send(err)
            }
            else {
              console.log(data.ObjectID)
              res.status(200).send(`successfully created new issue`)
            }
          })
        }
      })
      // let issueObj = {
      //   issue_title : req.body.issue_title,
      //   issue_text : req.body.issue_text,
      //   created_by : req.body.created_by,
      //   created_on : now,
      //   updated_on : now,
      //   open : true
      // }
      // console.log(issueObj)
      // res.send(issueObj)
    })
    
    .put(function (req, res){
      let project = req.params.project
    })
    
    .delete(function (req, res){
      let project = req.params.project
      
    })
  })
};
