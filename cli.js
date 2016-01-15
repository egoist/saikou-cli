#!/usr/bin/env node
'use strict'
const minimist = require('minimist')
const saikou = require('saikou')
require('colorful').toxic()

const argv = minimist(process.argv.slice(2))
const number = argv._[0] || 1

for (let i = 0; i < number; i++) {
	console.log(saikou().cyan)
}
