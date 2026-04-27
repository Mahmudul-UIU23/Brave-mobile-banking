//add button e click korle  add button er section ta dekhabe baki gula hide hoye jabe
document.getElementById("add-button").addEventListener("click", function (e) {
  document.getElementById("cash-out-parent").style.display = "none";
  document.getElementById("sendMoney-parent").style.display = "none";
  document.getElementById("add-money-parent").style.display = "block";
  document.getElementById("getbonous-parent").style.display = "none";
  document.getElementById("PayBill-parent").style.display = "none";
});
// cash out button e click korle  cash out er section ta dekhabe baki gula hide hoye jabe
document
  .getElementById("cash-out-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("sendMoney-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "block";
    document.getElementById("getbonous-parent").style.display = "none";
    document.getElementById("PayBill-parent").style.display = "none";
  });
  // send money button e click korle  send money er section ta dekhabe baki gula hide hoye jabe
document
  .getElementById("send-money")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("sendMoney-parent").style.display = "block";
     document.getElementById("getbonous-parent").style.display = "none";
     document.getElementById("PayBill-parent").style.display = "none";
  });
// get bonous section
document
  .getElementById("Get-bonous")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("sendMoney-parent").style.display = "none";
    document.getElementById("PayBill-parent").style.display = "none";
    document.getElementById("getbonous-parent").style.display = "block";
    
  });
//   pay bill
document
  .getElementById("pay-bill-button")
  .addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cash-out-parent").style.display = "none";
    document.getElementById("sendMoney-parent").style.display = "none";
    document.getElementById("getbonous-parent").style.display = "none";
    document.getElementById("PayBill-parent").style.display = "block";
  });