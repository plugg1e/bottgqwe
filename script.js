let balance = 0;
let tapValue = 1;
let passiveIncome = 0;
let passiveInterval;

document.getElementById('tapButton').addEventListener('click', function() {
    balance += tapValue;
    updateBalance();
});

function updateBalance() {
    document.getElementById('balance').textContent = balance;
}

function buyUpgrade(upgrade) {
    let cost;
    switch (upgrade) {
        case 1:
            cost = 10;
            if (balance >= cost) {
                balance -= cost;
                tapValue += 1;
                document.getElementById('upgrade1').style.display = 'none';
            }
            break;
        case 2:
            cost = 50;
            if (balance >= cost) {
                balance -= cost;
                tapValue += 5;
                document.getElementById('upgrade2').style.display = 'none';
            }
            break;
        case 3:
            cost = 100;
            if (balance >= cost) {
                balance -= cost;
                tapValue += 10;
                document.getElementById('upgrade3').style.display = 'none';
            }
            break;
    }
    updateBalance();
}

function buyPassive(passive) {
    let cost;
    switch (passive) {
        case 1:
            cost = 20;
            if (balance >= cost) {
                balance -= cost;
                passiveIncome += 1;
                document.getElementById('passive1').style.display = 'none';
            }
            break;
        case 2:
            cost = 100;
            if (balance >= cost) {
                balance -= cost;
                passiveIncome += 5;
                document.getElementById('passive2').style.display = 'none';
            }
            break;
        case 3:
            cost = 200;
            if (balance >= cost) {
                balance -= cost;
                passiveIncome += 10;
                document.getElementById('passive3').style.display = 'none';
            }
            break;
    }
    updateBalance();
    if (passiveInterval) clearInterval(passiveInterval);
    passiveInterval = setInterval(function() {
        balance += passiveIncome;
        updateBalance();
    }, 1000);
}

function openTab(tabName) {
    let i, tabContent;
    tabContent = document.getElementsByClassName('tab-content');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }
    document.getElementById(tabName).style.display = 'block';
}