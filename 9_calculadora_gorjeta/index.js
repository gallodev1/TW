const calculateBtn = document.querySelector("#calculateBtn");

function calculatetip(){
  const billAmount = parseFloat(document.querySelector("#billAmount").value);
  const serviceQuality = parseFloat(document.querySelector("#serviceQuality").value);

  if(billAmount === ""){
    alert("Por favor preencha os dados");
    return;
  }

  const tipAmount = billAmount * serviceQuality;
  const totalAmount = billAmount + tipAmount;

  const tipAmountInput = document.querySelector("#tipAmount");
  const totalAmountInput = document.querySelector("#totalAmount");

      //use tolocalestring para formatar a moeda para BRL;
      
    tipAmountInput.value = tipAmount.toLocaleString('pt-BR', {
      style: 'currency',
       currency: "BRL",
      });
    totalAmountInput.value = totalAmount.toLocaleString('pt-BR', {
      style: 'currency',
       currency: "BRL",
      });;
}


calculateBtn.addEventListener("click", calculatetip);