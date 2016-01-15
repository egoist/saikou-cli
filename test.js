import test from 'ava'
import execa from 'execa'

test('main', async t => {
	const {stdout} = await execa.shell('node cli.js 2')
	t.same(stdout.split('\n').length, 2)
})
