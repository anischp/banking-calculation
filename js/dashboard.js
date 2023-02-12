/* get all the controls by ID */
const depositOutput = document.getElementById("txt-deposit-output");
const withdrawOutput = document.getElementById("txt-withdraw-output");
const balanceOutput = document.getElementById("txt-balance-output");

const depositInput = document.getElementById("txt-deposit-input");
const withdrawInput = document.getElementById("txt-withdraw-input");
const btnDeposit = document.getElementById("btn-deposit");
const btnWithdraw = document.getElementById("btn-withdraw");

/* deposit calculation */
btnDeposit.addEventListener("click", () => {
  /* get the controls values */
  const depositOutputValue = depositOutput.innerText;
  const balanceOutputValue = balanceOutput.innerText;
  const depositInputValue = depositInput.value;

  if (depositInputValue === "") {
    alert("Please write deposit amount.");
    depositInput.focus();
  } else {
    // update deposit value
    const depositOutstanding =
      parseFloat(depositOutputValue) + parseFloat(depositInputValue);
    depositOutput.innerText = depositOutstanding;

    // update balance value
    const balanceOutstanding =
      parseFloat(balanceOutputValue) + parseFloat(depositInputValue);
    balanceOutput.innerText = balanceOutstanding;

    // Clear deposit input field
    depositInput.value = "";
  }
});

/* withdraw calculation */
btnWithdraw.addEventListener("click", () => {
  const withdrawOutputValue = withdrawOutput.innerText;
  const balanceOutputValue = balanceOutput.innerText;
  const withdrawInputValue = withdrawInput.value;

  if (withdrawInputValue === "") {
    alert("Please write withdrawal amount.");
    withdrawInput.focus();
  } else {
    // update withdraw value
    const withdrawOutstanding =
      parseFloat(withdrawOutputValue) + parseFloat(withdrawInputValue);
    withdrawOutput.innerText = withdrawOutstanding;

    // update balance value
    const balanceOutstanding =
      parseFloat(balanceOutputValue) - parseFloat(withdrawInputValue);
    balanceOutput.innerText = balanceOutstanding;

    // Clear deposit input field
    withdrawInput.value = "";
  }
});
