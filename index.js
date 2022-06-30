// Home Stuff
let homeEl = document.getElementById("home-el")
let homE1 = document.getElementById("home-1").textContent = "+1"
let homE2 = document.getElementById("home-2").textContent = "+2"
let homE3 = document.getElementById("home-3").textContent = "+3"
let count = 0

// Guest Stuff
let guestEl = document.getElementById("guest-el")
let guesT1 = document.getElementById("guest-1").textContent = "+1"
let guesT2 = document.getElementById("guest-2").textContent = "+2"
let guesT3 = document.getElementById("guest-3").textContent = "+3"
let count1 = 0

// Home Functions
function incrementHomeby1() {
    count += 1
    homeEl.textContent = count
}
function incrementHomeby2() {
    count += 2
    homeEl.textContent = count
}
function incrementHomeby3() {
    count += 3
    homeEl.textContent = count
}

// Guest Functions
function incrementGuestby1() {
    count1 += 1
    guestEl.textContent = count1
}
function incrementGuestby2() {
    count1 += 2
    guestEl.textContent = count1
}
function incrementGuestby3() {
    count1 += 3
    guestEl.textContent = count1
}

// Bonus functions
let textEl = document.getElementById("text-el")
function start() {
    count = 0
    count1 = 0
    homeEl.textContent = 0
    guestEl.textContent = 0
}
function win() {
        let text = "Great Match everyone, and the winner is; All of us!"
        textEl.textContent = text
}