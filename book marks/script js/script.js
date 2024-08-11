let siteName    = document.getElementById("s-name"),
    siteURL     = document.getElementById("s-url"),

    btnSubmit   = document.getElementById("submit"),
    table       = document.querySelector("tbody"),
    arrBookmark ;


let isValid   = document.querySelectorAll(".is-valid")



// Step number 1 disabled button is not value in input .
if (localStorage.getItem("BookMark") !== null){

        arrBookmark = JSON.parse(localStorage.getItem("BookMark"));
        display()

} else{

        arrBookmark = [];

}



// Step number 2 user click on button for add data
function_onclick: btnSubmit.onclick = function(){
        let rowBookMark = {
            name: siteName.value,
            url : siteURL.value
        } 
        
        arrBookmark.push(rowBookMark)
        localStorage.setItem("BookMark",JSON.stringify(arrBookmark))


        // Call Create Row
        display()
        clear()
}



// Step number 3 after add data display data
function display(){
        let row = ``;
        for(i=0; i < arrBookmark.length; i++){
            row += `
            <tr>
                <td>${i}</td>
                <td>${arrBookmark[i].name}</td>
                <td><a class="btn-view | btn" target="_blank" href="${arrBookmark[i].url}"><i class="fa-solid fa-eye"></i> View</a></td>    
                <td><button class="btn btn-danger" onclick="Delete(${i})"><i class="fa-solid fa-trash"></i> Delete</button></td>  
            </tr>  
            `
        }

        table.innerHTML = row
}



// Step number 4 Delete data
function Delete(index){
        arrBookmark.splice(index, 1)
        localStorage.setItem("BookMark",JSON.stringify(arrBookmark))
        display()
}



// Step number 5 clear input after add data
function clear(){
    siteName.value= ""
    siteURL.value= ""

    for(i=0; i < isValid.length; i++){
        isValid[i].innerHTML = ''
    }
}



// Step number 6 Validation data before add data
function validation(){
    let vallationName = /^([A-Z]|[a-z])[a-z]{2}/
    let vallationURL  = /(^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$)|(^www\.[a-z]{1,}\.com$)/


    function_disabled: function disabledBTN(){
        if (vallationName.test(siteName.value) != true || vallationURL.test(siteURL.value) != true){
            btnSubmit.setAttribute("disabled","disabled")
        } else{
            btnSubmit.removeAttribute("disabled")
        }
    }
    disabledBTN()

    
    // Validation Name input
    siteName.addEventListener('input', function(){

        if(vallationName.test(siteName.value) == true){
            siteName.classList.add("valid")
            siteName.classList.remove("not-valid")
    
            isValid[0].innerHTML = `<i class="valid-icon | fa-solid fa-circle-check"></i>`

        disabledBTN()

            
        }else{
            siteName.classList.add("not-valid") 
            siteName.classList.remove("valid")
    
            isValid[0].innerHTML = `<i class="not-valid-icon | fa-solid fa-circle-xmark"></i>`

        disabledBTN()

        }
    })


    // Validation URL input
    siteURL.addEventListener('input', function(){
    
        if(vallationURL.test(siteURL.value) == true){
            siteURL.classList.add("valid")
            siteURL.classList.remove("not-valid")
    
            isValid[1].innerHTML = `<i class="valid-icon | fa-solid fa-circle-check"></i>`
            
            disabledBTN()

    
        }else{
            siteURL.classList.add("not-valid") 
            siteURL.classList.remove("valid")
    
            isValid[1].innerHTML = `<i class="not-valid-icon | fa-solid fa-circle-xmark"></i>`
            
            disabledBTN()

        }
    })
}validation()

