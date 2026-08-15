const form=document.getElementById("profitForm");
const eur=new Intl.NumberFormat("es-ES",{style:"currency",currency:"EUR"});
const pct=new Intl.NumberFormat("es-ES",{minimumFractionDigits:2,maximumFractionDigits:2});
function value(id){return Math.max(0,Number(document.getElementById(id).value)||0)}
function calculate(){
 const sale=value("salePrice"), product=value("productCost"), shipping=value("shipping"), feePercent=Math.min(100,value("feePercent")), other=value("otherCosts");
 const fee=sale*(feePercent/100), total=product+shipping+fee+other, profit=sale-total, margin=sale>0?(profit/sale)*100:0;
 document.getElementById("profit").textContent=eur.format(profit);
 document.getElementById("margin").textContent=pct.format(margin)+" %";
 document.getElementById("fee").textContent=eur.format(fee);
 document.getElementById("totalCosts").textContent=eur.format(total);
 document.getElementById("profitPercent").textContent=pct.format(margin)+" %";
 document.getElementById("profit").style.color=profit>=0?"#087443":"#b42318";
}
form.addEventListener("submit",e=>{e.preventDefault();calculate()});
form.querySelectorAll("input").forEach(i=>i.addEventListener("input",calculate));
calculate();
