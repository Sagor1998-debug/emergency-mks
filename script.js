//js Script
//heart count
const heartCountElement = document.getElementById('heart-count');
let heartCount = 0;
const heartIcons = document.querySelectorAll('.fa-heart');

heartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
        heartCount++;
        heartCountElement.textContent = heartCount;
    });
});

// 20 coin decrease in every click & Call button logic
const coinBalanceElement = document.getElementById('coin-balance');
const callButtons = document.querySelectorAll('.call-btn');

if (coinBalanceElement) {
    let coinBalance = parseInt(coinBalanceElement.textContent);

    callButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Find the parent card to get the service details
            const card = event.target.closest('.w-60');
            const serviceName = card.querySelector('h5').innerText.trim();
            const serviceNumber = card.querySelector('h2').innerText.trim();

            if (coinBalance >= 20) {
                // Show an alert with the service name and number
                alert(`Calling ${serviceName}: ${serviceNumber}`);

                // Decrease the coin balance
                coinBalance -= 20;
                coinBalanceElement.textContent = coinBalance;

                // Add the service to the call history
                addCallToHistory(serviceName, serviceNumber);
            } else {
                // Show an alert for insufficient coins
                alert('Insufficient coins in your account. You need a minimum of 20 coins to make a call.');
            }
        });
    });
}

//call history & clear section
const callHistoryList = document.getElementById('call-history-list');
const clearHistoryBtn = document.getElementById('clear-history-btn');

function addCallToHistory(serviceName, serviceNumber) {
    const callEntry = document.createElement('div');
    callEntry.className = 'bg-gray-100 p-2 rounded-lg flex justify-between items-center';
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    callEntry.innerHTML = `
        <div>
            <h5 class="text-xs font-bold">${serviceName}</h5>
            <p class="text-xs text-gray-500">${serviceNumber} - <span class="text-gray-400">${timeString}</span></p>
        </div>
    `;

    callHistoryList.append(callEntry);
}

clearHistoryBtn.addEventListener('click', () => {
    callHistoryList.innerHTML = '';
});

//challenge part
const copyCountElement = document.getElementById('copy-count');
const copyButtons = document.querySelectorAll('.copy-btn');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.w-60');
        const hotlineNumber = card.querySelector('h2').innerText.trim();

        navigator.clipboard.writeText(hotlineNumber)
            .then(() => {
                alert(`The number ${hotlineNumber} has been copied!`);
                let currentCount = parseInt(copyCountElement.innerText);
                currentCount++;
                copyCountElement.innerText = currentCount;
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy the number. Please try again.');
            });
    });
});