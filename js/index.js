// Lấy dữ liệu trên local
const userLogin = JSON.parse(localStorage.getItem("userLogin")) ;

const userLoginElement = document.getElementById("userLogin");

if(userLogin){
    // Hiển thị tên user đang đăng nhập lên header
    userLoginElement.innerHTML = userLogin.userName;
}else{
    userLoginElement.innerHTML = ""
}

// Mảng chứa sản phẩm
// let products = [
//     {
//         image: "../asset/images/vn-11134207-7r98o-llk0uafkkn9k69_tn.jpg",
//         name: "Dép CD ",
//         price: "150.000đ",
//         id: 1,
//         sold: "Đã bán +2000",
//     },
//     {
//         image: "../asset/images/vn-11134207-7qukw-lh2wch7tfr5e9c.jpg",
//         name: "Quần Amiri",
//         price: "400.000đ",
//         id: 2,
//         sold: "Đã bán +3000",
//     },
//     {
//         image: "../asset/images/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium.jpg",
//         name: "Iphone 15 Pro Max 512gb Titan",
//         price: "25.000.000đ",
//         id: 3,
//         sold: "Đã bán +200",
//     },
//     {
//         image: "../asset/images/a62d0e19e09cbc63846580615f14367f_9624b4ece4cc418bbb53ebd0ad74b11f_master.webp",
//         name: "Áo thom browne",
//         price: "600.000đ",
//         id: 4,
//         sold: "Đã bán +500",
//     },
//     {
//         image: "../asset/images/5820030ao-so-mi-nam-thom-browne-blue-classic-chuan-authentic-jpeg.webp",
//         name: "Áo sơ mi Thom Browne",
//         price: "300.000",
//         id: 5,
//         sold: "Đã bán +512",
//     },
//     {
//         image: "../asset/images/1924762_blac_1_b06aecbf-64cd-48b3-b741-c735d419b75e_1728x_50977cf6b8a243a7a8790983d6acf35d.png",
//         name: "Áo Stussy",
//         price: "2.000.000đ",
//         id: 6,
//         sold: "Đã bán +200",
//     },
//     {
//         image: "../asset/images/1646-main-bike-gray-kv-1083.jpg",
//         name: "Honda Vision 2023",
//         price: "30.000.000đ",
//         id: 7,
//         sold: "Đã bán +100",
//     },
//     {
//         image: "../asset/images/oxva_xlim_pro__v3__pod_kit_gleamy_gray_podz.webp",
//         name: "Máy thở",
//         price: "200.000đ",
//         id: 8,
//         sold: "Đã bán +1000",
//     },
// ]

// localStorage.setItem("products", JSON.stringify(products));

// Lấy dữ liệu về đi render
let products = JSON.parse(localStorage.getItem("products"));
console.log("111",products);

// function render product
function renderProduct(){
    let element = "";
    for(let i=0;i < products.length;i++ ){
        element += 
        `<div class="box">
        <div class="box-img">
          <img
            src="${products[i].image}"
            alt=""
          />
        </div>
        <p>${products[i].sold}</p>
        <h3>${products[i].name}</h3>
        <h2>${products[i].price}</h2>
        <a href="#" class="btn">Mua </a>
        <br />
        <a href="#" class="btn">Thêm vào giỏ</a>
      </div>`
      
    }
    document.getElementById("products").innerHTML=element;
}
renderProduct();

// Function đi mua hàng
function addToCart(){
    // Đăng nhập mới cho đi mua hàng

    let checkLogin = JSON.parse(localStorage.getItem("checkLogin"));
    if(checkLogin==null){
        alert("Bạn phải đăng nhập để đi mua hàng");
        return;
    }
    console.log("đi mua hàng bthg");
    // Lấy giở hàng để đi mua
    let users = JSON.parse(localStorage.getItem("users"));
    for(let i=0;i<users.length;i++){
        if(users[i].id==checkLogin){
            console.log("Giỏ hàng của bạn sẽ là: ", users[i].cart);
            let product = JSON.parse(localStorage.getItem("products"));
            for(let i=0;i<product.length;i++){
                if(productId ==product[i].id){
                    console.log("111",product[i]);
                }
            }  
            break;
        }
    }
}