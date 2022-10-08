const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function caesarCipher(str){
    let newStr = str.split('')
    let regEx = /[a-zA-Z]/
    let newArr = newStr.map((item, index) => {
        if(regEx.test(item) === true){
            let abcIndex = abc.indexOf(item.toLowerCase())
            if(item === 'z'){
                return 'a'
            }else if(item === 'Z'){
                return 'Z'
            }else{
                if(item.toUpperCase() === item){
                    return abc[abcIndex+1].toUpperCase()
                }else{
                    return abc[abcIndex+1]
                }
            }

        }else{
            return item
        }
    })
    return newArr.join('')
}


module.exports = caesarCipher