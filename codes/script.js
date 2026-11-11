const quote = document.querySelector(".quote")
const label = document.querySelector(".label")
const btn =  document.querySelector(".btn")

const getAdvices = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  console.log(data.slip.id, data.slip.advice);
  quote.textContent = data.slip.advice
  label.textContent = `ADVICE ${data.slip.id}`
};

btn.addEventListener("click", ()=>{
    getAdvices()
})


