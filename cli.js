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

const argv = minimist(process.argv.slice(2), {'--': true})
const number = argv._[0] || 1
const color = typeof argv.color === 'undefined' || argv.color

if (number === 'h') {
	const spin = new Spin()
	spin.start()
	fetch('http://api.hitokoto.us/rand')
		.then(data => data.json())
		.then(data => {
			spin.stop()
			if (color) {
				console.log(`${data.hitokoto.cyan} ${data.source ? ` ${'--'.grey}${data.source.magenta}` : ''}`)
			} else {
				console.log(`${data.hitokoto} ${data.source ? ` ${'--'}${data.source}` : ''}`)
			}
		})
		.catch(err => console.log(err.stack))
} else {
	for (let i = 0; i < number; i++) {
		if (color) {
			console.log(saikou().cyan)
		} else {
			console.log(saikou())
		}
	}
}
