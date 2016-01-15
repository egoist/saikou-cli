import test from 'ava'
import execa from 'execa'

test('moegirl', async t => {
	const {stdout} = await execa.shell('node cli.js 2')
	t.same(stdout.split('\n').length, 2)
})

/*
test('yiyan', async t => {
	const {stdout} = await execa.shell('node cli.js h').catch(err => t.fail(err))
	t.same(typeof stdout, 'string')
})
*/
