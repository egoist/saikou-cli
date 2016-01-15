#!/usr/bin/env node
'use strict'
const minimist = require('minimist')
const saikou = require('saikou')
const fetch = require('node-fetch')
const Spin = require('io-spin')
const update = require('update-notifier')
const pkg = require('./package')
require('colorful').toxic()

update({pkg}).notify()

const argv = minimist(process.argv.slice(2))
const number = argv._[0] || 1

if (number === 'h') {
	const spin = new Spin()
	spin.start()
	fetch('http://api.hitokoto.us/rand')
		.then(data => data.json())
		.then(data => {
			spin.stop()
			console.log(`${data.hitokoto.cyan} ${data.source ? ` ${'--'.grey}${data.source.magenta}` : ''}`)
		})
		.catch(err => console.log(err.stack))
} else {
	for (let i = 0; i < number; i++) {
		console.log(saikou().cyan)
	}
}
