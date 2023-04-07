
const account = document.getElementById("account")

const Deposit = [];
const Withdraw = [];
let totalBalance = 25;

const DepositUser = document.getElementById("DepositUser")
const Depositbtn = document.getElementById("Depositbtn")
const WithdrawUser = document.getElementById("WithdrawUser")
const Withdrawbtn = document.getElementById("Withdrawbtn")

// Create our number formatter.

const formatter = new Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD',
   maximumFractionDigits: 2
})

Depositbtn.addEventListener("click", () => {
    // checks if deposit is a number
    if (isNaN(DepositUser.value)) {
        alert("Please enter a number.")
        return DepositUser.value = '';
    } else {
        // checks if deposit meets parameters
        if (DepositUser.value < 0.01 || DepositUser.value > 100000000) {
            alert("You can only deposit between $0.01 and $100000000.")
            return DepositUser.value = '';
        } else {
            // push withdrawal to array
            Deposit.push(Number(DepositUser.value))
            // calculate Total Balance
            totalBalance += (Number(DepositUser.value))
            // format TotalBalance to show $ XX.XX (2 decimal places)
            let totalBalanceFormatted = formatter.format(totalBalance)
            document.getElementById("account").innerHTML = totalBalanceFormatted;
            // print deposit to console to verify success
            console.log("$" + DepositUser.value);
            return DepositUser.value = '';
        }
    }
});


  // accept withdrawals from user, store withdrawals in array

Withdrawbtn.addEventListener("click", () => {
    // checks if withdrawal is a number
    if (isNaN(WithdrawUser.value)) {
        alert("Please enter a number")
        return WithdrawUser.value = ''
    } else {
        // checks if withdrawal meets parameters
        if (WithdrawUser.value > totalBalance - 5) {
            alert("Your total balance cannot drop below $5.")
            return WithdrawUser.value = '';
        } else {
            // push withdrawal to array
            Withdraw.push(Number(WithdrawUser.value))
            // calculate Total Balance
            totalBalance -= (Number(WithdrawUser.value))

            let totalBalanceFormatted = formatter.format(totalBalance)

            document.getElementById("account").innerHTML = totalBalanceFormatted;

            // print withdrawal to console to verfify success
            
            console.log("$" + WithdrawUser.value)
            return WithdrawUser.value = ''
        }
    }
});

// format TotalBalance to show $ XX.XX (2 decimal places)

let totalBalanceFormatted = formatter.format(totalBalance);
document.getElementById("account").innerHTML = totalBalanceFormatted;