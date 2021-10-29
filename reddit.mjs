#! /usr/bin/env node

// import our packages
import open from 'open'
import fetch from 'node-fetch'
import yargs from 'yargs'

// parse env vars
const { argv } = yargs(process.argv)


// init fetch to reddit api
const res = await fetch('https://www.reddit.com/.json')
const {data} = await res.json()
const children = data.children

const randomPost = children[Math.floor(Math.random() * data.children.length)]
const link = `https://reddit.com${randomPost.data.permalink}`

if (argv.print) {
    console.log(`
    Title:${randomPost.data.title}\n
    Link:${link}
    `)
}else{
    open(link)
}