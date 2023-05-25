
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
        // this function allows us to mark the the case as done but it keeps the number 

        const element = document.body
        element.addEventListener("click", function (e) {
            if (e.target.className == 'the-tracker-num') {
                e.target.classList.add('marked-method')
            }
        });

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
const selectOption = document.querySelector("select")

const fUpCases = document.querySelector('.f-up-cases')


let followUpList = JSON.parse(localStorage.getItem('followUp')) || [{
    fUpnum: '765512121156',
    fUpdate: '22-7-2022'
}]

function renderFollowUpHtml() {
    let followUpListHtml = '';

    followUpList.forEach(function (todoObject, index) {


        const { fUpnum, fUpdate, sOptionValue } = todoObject


        // I added the type the F up it will be save as array's value
        const html = `
                <div class='the-fup-name'> ${fUpnum} </div> 
                <div class='the-fup-date'> ${fUpdate} </div>
                <div class='the-fup-type'> ${sOptionValue} </div>
              
                    <button class="delete-btn" onclick="
                   
                    followUpList.splice(${index},1);

                    renderFollowUpHtml()

                    "> Done </button </div>
                    `;
        // this function allows us to mark the the case as marked or checked  but it keeps the number 
        const element = document.body
        element.addEventListener("click", function (e) {
            if (e.target.className == 'the-fup-name') {
                e.target.className = 'marked-method'
            }
        });

        followUpListHtml += html;
    })
    fUpCases.innerHTML = followUpListHtml;
    localStorage.setItem('followUp', JSON.stringify(followUpList))
}
renderFollowUpHtml()





function addToFUpTracker() {
    const fUpnum = followUpInput.value
    const fUpdate = followUpInputDate.value
    const sOptionValue = selectOption.value

    followUpList.push({
        fUpnum,
        fUpdate,
        sOptionValue
    })

    console.log(followUpList);

    renderFollowUpHtml()
    followUpInput.value = '';
}
