// LEXER/PARSER/EMITTER PIPELINE v5.0
// Multi-Pass Compilation Framework
// Target: Abstract Syntax Tree → Machine Code

const CompilerPipeline = {
  sourceCode: 'Hello World',

  lexPhase: function() {
    console.log('=== LEXICAL ANALYSIS PHASE ===');
    const tokens = this.sourceCode.split(' ').map((word, i) => ({
      type: 'IDENTIFIER',
      lexeme: word,
      line: 1,
      column: i * (word.length + 1)
    }));
    console.log('Tokens generated:');
    tokens.forEach(t => {
      console.log(`  [${t.type}] "${t.lexeme}" @ L${t.line}:C${t.column}`);
    });
    return tokens;
  },

  parsePhase: function(tokens) {
    console.log('\n=== SYNTACTIC ANALYSIS PHASE ===');
    const ast = {
      type: 'Program',
      body: [
        {
          type: 'ExpressionStatement',
          expression: {
            type: 'BinaryOp',
            operator: 'CONCAT',
            left: tokens[0].lexeme,
            right: tokens[1].lexeme
          }
        }
      ]
    };
    console.log('AST constructed:');
    console.log(JSON.stringify(ast, null, 2));
    return ast;
  },

  emitPhase: function(ast) {
    console.log('\n=== CODE EMISSION PHASE ===');
    const bytecode = 'PUSH_STR ' + ast.body[0].expression.left +
                     '\nPUSH_STR ' + ast.body[0].expression.right +
                     '\nCONCAT\nPRINT\nHALT';
    console.log('Intermediate code:');
    bytecode.split('\n').forEach(line => console.log('  ' + line));
    console.log('\nResult:', this.sourceCode);
  }
};

console.log('COMPILATION PIPELINE: "' + CompilerPipeline.sourceCode + '"\n');
const tokens = CompilerPipeline.lexPhase();
const ast = CompilerPipeline.parsePhase(tokens);
CompilerPipeline.emitPhase(ast);
