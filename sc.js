// RPC 

function play(user) {
    const op = ["⚫", "📄", "✂️"];

    const cp = op[Math.floor(Math.random() * 3)];

    let rs = "";

    if (user === cp){
        rs = "[DRAW!]";
    } else if (
        (user === "⚫" && cp === "✂️") || 
        (user === "📄" && cp === "⚫") ||
        (user === "✂️" && cp === "📄")
    ) {
        rs = "[You win! 🎉]"
    } else {
        rs = "[You lost! 😔]"
    }

    document.getElementById('result').innerText =
    ` Your choice: ${user}
      Computer coice: ${cp}
      ${rs}`;
}
// Even or Odd
function Play() {
    
    const eo = document.getElementById('choice').value;
    const nus = Number((document.getElementById('num').value));

    const pc = Math.floor(Math.random() * 100);

    const sum = nus + pc;

    const r = sum % 2 === 0 ? "even" : "odd";

    let txt = "";

    if (r === eo) {
        txt = "[You win! 🎉]";
    } else {
        txt = "[You lost! 😔]";
    }

    document.getElementById('result').innerText = 
        `You: ${nus}
        Computer: ${pc}
        Sum: ${sum}
        ${txt}`
        
}