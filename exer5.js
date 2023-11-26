function calcular(valor1, valor2, operador) {
    switch (operador) {
        case '+':
            return valor1 + valor2;
        case '-':
            return valor1 - valor2;
        case '*':
            return valor1 * valor2;
        case '/':
            // Verifica se o divisor é zero para evitar divisão por zero
            if (valor2 !== 0) {
                return valor1 / valor2;
            } else {
                return "Erro: Divisão por zero!";
            }
        case '%':
            // Retorna o resto da divisão (módulo)
            return valor1 % valor2;
        default:
            return "Operador inválido";
    }
}

// Função para obter entrada do usuário
function obterEntradaUsuario() {
    // Obtém os valores do usuário
    var valor1 = parseFloat(prompt("Digite o primeiro valor:"));
    var valor2 = parseFloat(prompt("Digite o segundo valor:"));
    var operador = prompt("Digite o operador (+, -, *, /, %):");

    // Chama a função calcular e exibe o resultado
    var resultado = calcular(valor1, valor2, operador);
    alert("O resultado é: " + resultado);
}

// Chama a função para obter entrada do usuário
obterEntradaUsuario();