// Sort - functional approach using immutable data and composition

const compare = (a, b) => a - b;

const sort = (arr) => [...arr].sort(compare);

const format = (sorted) => `[${sorted.join(',')}]`;

const display = (formatted) => { console.log(formatted); return formatted; };

const pipeline = (data) => display(format(sort(data)));

const identity = (x) => x;

const compose = (...fns) => (x) => fns.reduceRight((acc, f) => f(acc), x);

const process = compose(display, format, sort);

process([82, 43, 10, 27, 38, 3, 9]);
