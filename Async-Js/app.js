
console.log('Start')

function userLogin(email,password,callback) {
    setTimeout(() => {
        console.log("Data Gathered!")
        callback({userEmail: email})
    },5000)
}

const user = userLogin('def@gmail.com',1234444,user => {console.log(user)})

console.log('End')