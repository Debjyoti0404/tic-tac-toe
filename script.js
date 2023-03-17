let count = 0;
const arr = [0,0,0,0,0,0,0,0,0];
let arr_pos;

document.addEventListener("DOMContentLoaded", () => {
    alert("This website is not mobile responsive yet!!")
})
document.querySelectorAll('.sub_box').forEach(div => {
    div.onclick = () => {
        let div_id = "#" + div.dataset.name;
        arr_pos = parseInt(div_id[div_id.length - 1]);

        if(arr[arr_pos - 1] === 0){
            document.querySelector(div_id).innerHTML = sign_appear();
            chck_winner();
        }
        console.log(arr); //testing
    }
});

function sign_appear() {
    if(count % 2 == 0)
    {
        count++;
        arr[arr_pos - 1] = 1;
        return "X";
    }
    else
    {
        count++;
        arr[arr_pos - 1] = -1;
        return "O";
    }
}

function chck_winner() {
    if(arr[0] != 0 && (arr[0] === arr[1] && arr[0] === arr[2]))
        declr_winner(arr[0]); //row1
    else if(arr[3] != 0 && (arr[3] === arr[4] && arr[3] === arr[5]))
        declr_winner(arr[3]); //row2
    else if(arr[6] != 0 && (arr[6] === arr[7] && arr[6] === arr[8]))
        declr_winner(arr[6]); //row3
    else if(arr[0] != 0 && (arr[0] === arr[3] && arr[0] === arr[6]))
        declr_winner(arr[0]); //col1
    else if(arr[1] != 0 && (arr[1] === arr[4] && arr[1] === arr[7]))
        declr_winner(arr[1]); //col2
    else if(arr[2] != 0 && (arr[2] === arr[5] && arr[2] === arr[8]))
        declr_winner(arr[2]); //col3
    else if(arr[0] != 0 && (arr[0] === arr[4] && arr[0] === arr[8]))
        declr_winner(arr[0]); //diag1
    else if(arr[2] != 0 && (arr[2] === arr[4] && arr[2] === arr[6]))
        declr_winner(arr[2]);
    else if(count >= 9)
        declr_winner(count);
}

function declr_winner(val) {
    if(val === 1)
    {
        document.querySelector("#winningmsg").innerHTML = "Player 'X' is the winner!!";
        document.querySelector("#winningwindow").style.visibility = "visible";
    }
    else if(val === -1)
    {
    document.querySelector("#winningmsg").innerHTML = "Player '0' is the winner!!";
    document.querySelector("#winningwindow").style.visibility = "visible";
    }
    else
    {
    document.querySelector("#winningmsg").innerHTML = "It is a Draw"
    document.querySelector("#winningwindow").style.visibility = "visible";
    }
}