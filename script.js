// 1. Selecionando os elementos da tela que vamos manipular
const calculator = document.getElementById('calculator');
const currentOperandText = document.getElementById('current-operand');
const previousOperandText = document.getElementById('previous-operand');
const buttons = document.querySelectorAll('.btn');

// 2. Efeito de vibração tátil (Haptic Feedback) em todos os botões
buttons.forEach(button => {
    button.addEventListener('click', ()=> {
        button.classList.remove('vibrating');
        void button.offsetWidth; //Força o navegador a reiniciar a animação
        button.classList.add('vibrating');
    })
});

// 3. Efeito 3D Tilt Sutil acompanhado o mouse
calculator.addEventListener('mousemove', (e) => {
    const rect = calculator.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height /2;

    // Avisa ao CSS onde o mouse está para a luz esfumaçada acompanhar
    calculator.style.setProperty('--mouse-x', `${x}px`);
    calculator.style.setProperty('--mouse-y', `${y}px`)

    //Inclinação sutil de no máximo 5.5 graus
    const rotateX = ((y - centerY) / centerY) * -5.5;
    const rotateY = ((x - centerX) / centerX) * 5.5;
    
    calculator.style.transform = `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
});

//Quando o mouse sai da calculadora, ela volta suavemente à posição normal
calculator.addEventListener('mouseleave', () => {
    calculator.style.transform = 'perspective(1400px) rotateX(0deg) rotateY(0deg)';
});

// 4. Memória (Estado) da Calculadora
let currentOperand = '0';
let previousOperand = '';
let operation = null;
let shouldResetScreen = false;

// 5. Função para atualizar o visor com o que está na memória
function updateDisplay() {
    currentOperandText.innerText = currentOperand;
    if (operation !== null) {
        previousOperandText.innerText = `${previousOperand} ${operation}`;
    }else {
        previousOperandText.innerText = '';
    }
}

// 6. Função para adicionar dígitos ao visor
function appendNumber(number) {
    //Se for o primeiro número ou se devemos resetar a tela
    if (currentOperand === '0' || shouldResetScreen) {
        currentOperand = (number === '.') ? '0.' : number;
        shouldResetScreen = false;
    }else {
        //Impede de colocar mais de um ponto decimal (ex: 3.14.5)
        if (number === '.' && currentOperand.includes('.')) return;
        currentOperand += number;
    }
    updateDisplay();
}

// 7. Adicionando o clique nos botões numéricos (e no ponto '.')
buttons.forEach(button => {
    const number = button.dataset.number;
    if (number !== undefined) {
        button.addEventListener('click', () => appendNumber(number));
    }
})

// 8. Escolher qual operação realizar (+, -, x, ÷)
function chooseOperation(selectedOperation) {
    if (currentOperand === 'Erro') return;

    // Se já havia uma conta anterior pendente, calcula ela primeiro
    if (operation !== null && !shouldResetScreen) {
        compute();
    }

    operation = selectedOperation;
    previousOperand = currentOperand;
    shouldResetScreen = true;
    updateDisplay();
}

// 9. Realizar o cálculo matemático
function compute() {
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);

    //Se não tivermos números válidos, não faz nada
    if (isNaN(prev) || isNaN(curr)) return;

    let result;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '−':
        case '-':
            result = prev - curr;
            break;
        case 'x':
        case '×':
        case '*':
            result = prev * curr;
            break;
        case '÷':
        case '/':
            // Prevenção contra divisão por zero (não permitida na matemática)
            if (curr === 0) {
                currentOperand = 'Erro';
                operation = null;
                previousOperand = '';
                shouldResetScreen = true;
                updateDisplay();
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }

    // Evita problemas de precisão do JS (Ex: 0.1 + 0.2 resultar em 0.30000000000000004)
    currentOperand = String(Math.round(result * 1e10) / 1e10);
    operation = null;
    previousOperand = '';
    shouldResetScreen = true;
    updateDisplay();
}

// 10. Ações especiais (AC, ⌫, %, ± e =)
function handleAction(action) {
    if (action === 'clear') {
        currentOperand = '0';
        previousOperand = '';
        operation = null;
        shouldResetScreen = false;
    } else if (action === 'delete') {
        if (currentOperand === 'Erro' || currentOperand.length === 1) {
            currentOperand = '0';
        } else {
            currentOperand = currentOperand.slice(0, -1);
        }
    } else if (action === 'percent') {
        if (currentOperand !== 'Erro') {
            currentOperand = String(parseFloat(currentOperand) / 100);
        }
    }else if (action === 'negate') {
        if (currentOperand !== '0' && currentOperand !== 'Erro') {
            currentOperand = currentOperand.startWith('-') ? currentOperand.slice(1) : '-' + currentOperand;
        }
    } else if (action === 'calculate') {
        compute();
    }
    updateDisplay();
}

// 11. Conectando os botões de Operadores e Ações aos eventos de clique 
buttons.forEach(button => {
    const operator = button.dataset.operator;
    const action = button.dataset.action;

    if (operator !== undefined) {
        button.addEventListener('click', () => chooseOperation(operator));
    }

    if (action !== undefined) {
        button.addEventListener('click', () => handleAction(action))
    }
})