// COMPILER OPTIMIZATION: FizzBuzz AST + Parser
// Pass 1: Tokenization. Pass 2: AST construction. Pass 3: Optimization.

const ITERATION_LIMIT = 100;

// LEXER: Token definition
const tokens = {
  DIVISIBLE_THREE: 3,
  DIVISIBLE_FIVE: 5
};

// PARSER: AST nodes
function buildFizzBuzzAST(index) {
  const ast = {
    index: index,
    fizz: index % tokens.DIVISIBLE_THREE === 0,
    buzz: index % tokens.DIVISIBLE_FIVE === 0
  };
  return ast;
}

// CODE GENERATION: Emit optimized output
function emit(ast) {
  let code = '';
  if (ast.fizz) code += 'Fizz';
  if (ast.buzz) code += 'Buzz';
  if (code === '') code = ast.index.toString();
  return code;
}

// OPTIMIZATION PASS: Execute
for (let i = 1; i <= ITERATION_LIMIT; i++) {
  const ast = buildFizzBuzzAST(i);
  const output = emit(ast);
  console.log(output);
}
