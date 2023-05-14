
// doing with Tracker app with two types of Arrays 
const inputNumEl = document.querySelector('.input-num')
const inputDateEl = document.querySelector('.input-date')
const casesDiv = document.querySelector('.cases')

let tracker = JSON.parse(localStorage.getItem('tracker')) || [{
    num: '725232535645',
    date: '22-7-2022'
}]
function renderHtml() {
    let trackerHTML = '';
    tracker.forEach((trackerObject, index) => {
        const { num, date } = trackerObject
        let html = `
                <div class='the-tracker-num'> ${num} </div> 
                <div class='the-tracker-date'> ${date} </div>
                <div class='btn-div'>
                    <button class="delete-btn" onclick="
                    tracker.splice(${index},1);
                   
                    renderHtml();
                    ">
                    Delete 
                    </button> 
                   </div>
                   `;

        trackerHTML += html
        console.log(index);
        console.log(trackerObject);
    })
    casesDiv.innerHTML = trackerHTML;
    localStorage.setItem('tracker', JSON.stringify(tracker))
}
renderHtml()

function addToTracker() {
    const num = inputNumEl.value
    const date = inputDateEl.value
    console.log(num);
    console.log(date);
    tracker.push({
        num,
        date
    })
    inputNumEl.value = '';
    renderHtml()
}



// follow up cases part starts here

const followUpInput = document.querySelector('.input-f-up')
const followUpInputDate = document.querySelector('.input-date-f-up')

const fUpCases = document.querySelector('.f-up-cases')


let followUpList = JSON.parse(localStorage.getItem('followUp')) || [{
    fUpnum: '765512121156',
    fUpdate: '22-7-2022'
}]

function renderFollowUpHtml() {
    let followUpListHtml = '';

    followUpList.forEach(function (todoObject, index) {


        const { fUpnum, fUpdate } = todoObject
        const html = `
                <div class='the-fup-name'> ${fUpnum} </div> 
                <div class='the-fup-date'> ${fUpdate} </div>
                    <button class="delete-btn" onclick="
                   
                    followUpList.splice(${index},1);

                    renderFollowUpHtml()

                    "> Done </button </div>
                    `;
        followUpListHtml += html;
    })
    fUpCases.innerHTML = followUpListHtml;
    localStorage.setItem('followUp', JSON.stringify(followUpList))
}
renderFollowUpHtml()

function addToFUpTracker() {
    const fUpnum = followUpInput.value
    const fUpdate = followUpInputDate.value


    followUpList.push({
        fUpnum,
        fUpdate
    })
    console.log(followUpList);
    renderFollowUpHtml()
    followUpInput.value = '';

}