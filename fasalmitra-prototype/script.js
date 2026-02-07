function createDeposit() {
  const data = {
    depositId: "D" + Math.floor(Math.random() * 10000),
    farmer: document.getElementById("farmerId").value,
    crop: document.getElementById("crop").value,
    quantity: document.getElementById("quantity").value
  };

  localStorage.setItem("deposit", JSON.stringify(data));
  window.location.href = "deposit.html";
}

const deposit = JSON.parse(localStorage.getItem("deposit"));

if (deposit) {
  document.getElementById("depositId")?.innerText = deposit.depositId;
  document.getElementById("farmer")?.innerText = deposit.farmer;
  document.getElementById("crop")?.innerText = deposit.crop;
  document.getElementById("quantity")?.innerText = deposit.quantity;

  document.getElementById("lDepositId")?.innerText = deposit.depositId;
  document.getElementById("lCrop")?.innerText = deposit.crop;
  document.getElementById("lQuantity")?.innerText = deposit.quantity;
}

function approveLoan() {
  window.location.href = "loan.html";
}
