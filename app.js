const selectedSeatEl = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById('total-booked');
// const availableSeatEl=document.getElementById('available-seat');
const hiddenTitleEl = document.getElementById('hidden-title');
const totalPriceEl = document.getElementById('total-price');
const couponInputEl = document.getElementById('coupon-input');
const couponBtnEl = document.getElementById('coupon-btn');

let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event) {
    const value = event.innerText;
    hiddenTitleEl.classList.add('hidden');
    if (selectedSeat.includes(value)) {
        alert('Seat already selected');
        return;
    }

    else if (selectedSeat.length < 4) {
        selectedSeat.push(event.innerText);

        totalBookedEl.innerText = selectedSeat.length;

        // decreasing the available seat
        // const availableSeatValue = parseFloat(availableSeatEl.innerText);
        // availableSeatEl.innerText=availableSeatValue-1;
        event.classList.add('bg-primary');
        event.classList.add('text-white');

        selectedSeatEl.innerHTML += `
        <li class="text-base font-normal flex justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li>
        `
        totalPrice += 550;
        console.log(totalPrice)
        totalPriceEl.innerText = totalPrice.toFixed(2);
        // console.log(selectedSeat);

        // active coupon button
        if (selectedSeat.length > 3) {
            couponInputEl.removeAttribute('disabled');
            couponBtnEl.removeAttribute('disabled');
        }
    }

    else {
        alert('Maximum Seat allocated');
        return;
    }


}