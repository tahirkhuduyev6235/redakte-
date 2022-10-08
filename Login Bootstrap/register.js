let names = document.getElementById("sname")
let emails = document.getElementById("semail")
let passwords = document.getElementById("spassword")
let form = document.getElementById("signup")

let myArr = []
if (localStorage.getItem('userdata')) {
    myArr = JSON.parse(localStorage.getItem('userdata'))
    console.log(myArr);
}


document.getElementById("btn-1").addEventListener("click", function(e) {
    e.preventDefault()

    let person = new ObjCreate(names.value, emails.value, passwords.value)
    myArr.push(person)
    let myjsontxt = JSON.stringify(myArr)
    localStorage.setItem("userdata", myjsontxt)
})

function ObjCreate(n, e, p) {
    this.name = n
    this.email = e
    this.password = p

}