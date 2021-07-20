// listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults)

document.querySelector('.loading-image').style.display = 'none'
document.querySelector('h2').style.display = 'none'
const monthlyItem = document.createElement('li')
const interestItem = document.createElement('li')
const totalItem = document.createElement('li')
const list = document.querySelector('ul')

function calculateResults(e) {
    document.querySelector('.loading-image').style.display = 'flex'
    const loanAmount = document.querySelector('#loanAmount')
    const interest = document.querySelector('#interest')
    const yearsRepay = document.querySelector('#yearsToRepay').value
    const monthlySum = loanAmount.value / (12 * yearsRepay)
    // monthly calculate
    setTimeout(() => {
        document.querySelector('.loading-image').style.display = 'none'
    }, 3000);
    setTimeout(() => {
        document.querySelector('h2').style.display = 'flex'
        if(loanAmount.value === '' || interest.value === '' || yearsRepay.value === '')
            {
                alert("Fill in the fields!")
            }
        else 
            {
                monthlyItem.innerText = `Monthly Payment: ${monthlySum.toFixed(2)}`
                list.appendChild(monthlyItem)
                // interest calculate
                const interestSum = loanAmount.value * (interest.value / 100)
                interestItem.innerText = `Total interest: ${interestSum.toFixed(2)}`
                list.appendChild(interestItem)
                // total
                const totalSum = +loanAmount.value + +interestSum
                totalItem.innerText = `Total amount: ${totalSum.toFixed(2)}`
                list.appendChild(totalItem)
            }
    }, 3000);
    e.preventDefault()

}