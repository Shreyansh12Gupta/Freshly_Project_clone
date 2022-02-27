var addToCartArr = JSON.parse(localStorage.getItem("addToCartObj")) || [];

display(addToCartArr)

document.querySelector('span').innerHTML=addToCartArr.length;



//document.querySelector('span').innerHTML=addToCartArr.length;
function display(addToCartArr) {
// console.log(addToCartArr);
addToCartArr.map(function (elem, index, array) {
    // image, name , company logo image , role
    var div = document.createElement("div");
    var avatar = document.createElement("img");

    avatar.setAttribute("src", elem.image);
    avatar.setAttribute('id',"avatar")    
    var name = document.createElement("h4");
    name.innerText = elem.name;
    var cal = document.createElement("p");
    cal.innerText = elem.cal;
    cal.setAttribute("id", "bigparagraph");

    var cart = document.createElement('button');
        cart.innerText = "delete";
        cart.addEventListener('click', function () {
            deleteItem(index)
        })

   
    div.append(avatar, name, cal ,cart);
    document.querySelector("#cartPage").append(div);


});
}

function deleteItem(index) {
    addToCartArr.splice(index, 1)

    localStorage.setItem('addToCartObj',JSON.stringify(addToCartArr))

    document.querySelector('span').innerHTML=addToCartArr.length;

    //display(addToCartArr)

}