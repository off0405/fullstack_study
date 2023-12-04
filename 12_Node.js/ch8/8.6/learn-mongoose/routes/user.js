const express = require('express')

const { client } = require('../database')
const db = client.db('board')

const router = express.Router();
