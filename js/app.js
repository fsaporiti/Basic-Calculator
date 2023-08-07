const screen = document.querySelector(".screen")
const btn = document.querySelectorAll(".btn")

btn.forEach(button => {
    button.addEventListener("click", () => {
        //console.log(button.textContent);
        const pressBtn = button.textContent

        if (button.id === "clear"){
            screen.textContent = "0";
            return;
        }

        if(button.id === "delete"){
            if (screen.textContent.length === 1 || screen.textContent === "Error"){
                screen.textContent = "0"
            } else {
                screen.textContent = screen.textContent.slice(0, -1)
            }
            return 
        } 

        //eval evaluate math operations on a single string 
        if(button.id === "equalId"){
            try{
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "Error"
            }
            return;
        }

        if (screen.textContent === "0" || screen.textContent === "Error") {
            screen.textContent = pressBtn
        } else {
            screen.textContent += pressBtn
        }
    }) 
})