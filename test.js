import test from 'ava';
import Map from './';

test(t => {
	const map = new Map();
	map.set('foo', 'bar')
		.set('fox', 'bax')
		.set('true', true)
		.set('false', false);

	t.true(map.has('foo'));
	t.true(map.has('fox'));
	t.true(map.has('true'));
	t.true(map.has('false'));
	t.false(map.has('bar'));
	t.is(map.get('foo'), 'bar');
	t.is(map.get('fox'), 'bax');
});

if (process.version.indexOf('v10') === 0) {
	test(t => {
		const map = new Map();
		map.set('foo', 'bar').set('fox', 'bax');

		t.is(map.foo, 'bar');
		t.is(map.fox, 'fox');
	});
}
