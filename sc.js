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