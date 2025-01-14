var StoreMeals = [
    { name: "Steak Peppercorn", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61063fef3319dbcfa7088dc3_production-meal-image-29fee2e7-8e88-4cd3-aad9-0e7d25671f7f.jpeg", cal: "500Cal | Gluten Free | Single-Serve", },
    { name: "Homestyle Chicken", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8686c6708c070e7d41_production-meal-image-e4122aa8-0fe7-4854-b6f5-e27e0c5be918.jpeg", cal: "560Cal | Gluten Free | Single-Serve", },
    { name: "Cauliflower Shell Beef Bolognese", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b89b735739065897a4f_production-meal-image-c9eef45a-97a9-487c-9550-71488e5f639a.jpeg", cal: "490Cal | Gluten Free | Single-Serve", },
    { name: "Sausage Baked Penne", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8bdf3b65081fd159c6_production-meal-image-f0de55be-d691-4ade-bc26-b4a8aedaa1fe.jpeg", cal: "470Cal | Gluten Free | Single-Serve", },
    { name: "Savory-Sweet Chicken Teriyaki Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b8e6dd23b60cb122654_production-meal-image-92ec0fc1-d352-4720-9b83-96798ab8d2de.jpeg", cal: "480Cal | Gluten Free | Single-Serve", },
    { name: "Protein-Packed Chicken Parm", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640046931cb5d54bd5472_production-meal-image-7a62bb89-9bcb-4f1f-9f0f-d8372698d48e.jpeg", cal: "410Cal | Gluten Free | Single-Serve", },
    { name: "Golden Oven-Fried Chicken & Mash", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b94f03e50f2e0d2b7f3_production-meal-image-bc1b24c8-f62a-4756-a40e-173a8b67a590.jpeg", cal: "510Cal | Gluten Free | Single-Serve", },
    { name: "Zingy Buffalo Chicken", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6b9a85b43c3383a0a3b3_production-meal-image-ef64cbd3-cc91-4c5f-9865-b9ff0442572e.jpeg", cal: "470Cal | Gluten Free | Single-Serve", },
    { name: "White Baan Turkey Chili Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401a005f9f6781262949_production-meal-image-17ade4a4-7351-4ff8-95c6-765d70e5ea5d.jpeg", cal: "540Cal | Gluten Free | Single-Serve", },
    { name: "Pork Carnitas", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba186c67063830ea67a_production-meal-image-7bfd44a5-38ec-4893-a0ff-d93693b1deb9.jpeg", cal: "480Cal | Gluten Free | Single-Serve", },
    { name: "Sesame-Ginger Chicken & Noodles", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba5f589fe69d6562dee_production-meal-image-a4feff11-ec91-43e8-bab5-e6daf8b55eea.jpeg", cal: "430Cal | Gluten Free | Single-Serve", },
    { name: "Sautéed French Green Beans (11 oz)", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6ba8406d133a498de788_production-meal-image-e184440d-cfea-4806-b7e3-1e5856975959.jpeg", cal: "140Cal | Gluten Free | Single-Serve", },
    { name: "Hearty Chipotle-Chicken Stew", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106401eb621bbc28987f309_production-meal-image-53e1a296-8d48-4ba8-acb3-0d9032960be2.jpeg", cal: "420Cal | Gluten Free | Single-Serve", },
    { name: "Chicken Tikka Masala", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bb12037c27177184b97_production-meal-image-fa07e0dc-cb7f-43d7-a669-d35dc3fbcf93.jpeg", cal: "570Cal | Gluten Free | Single-Serve", },
    { name: "Masterful Mash (16 oz)", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640562b4a8d4304d8cd7f_production-meal-image-736d13f8-813c-47a9-91e3-e11eecfeb4ef.jpeg", cal: "160Cal | Gluten Free | Single-Serve", },
    { name: "Masterful Mac & Cheese (15 oz)", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/610640534648a3861409719e_production-meal-image-a06ce51f-74b3-429e-8ff1-ada01979e783.jpeg", cal: "470Cal | Gluten Free | Single-Serve", },
    { name: "3 Grilled Chicken Breasts (9.75 oz)", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106404a9ca1f30fe0fbb9a9_production-meal-image-50d04c03-029a-4039-ab75-8aecefbdcf43.jpeg", cal: "160Cal | Gluten Free | Single-Serve", },
    { name: "8 Baked Turkey Meatballs (9.98 oz)", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064050a510183577a6c7f7_production-meal-image-ea98e43b-5663-49f6-9c00-8f2b23225bd2.jpeg", cal: "110Cal | Gluten Free | Single-Serve", },
    { name: "Unwrapped Salsa Verde Burrito", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bc1b3af4007be53c093_production-meal-image-51fe566d-7bc5-4500-91b0-622d6c2e665c.jpeg", cal: "400Cal | Gluten Free | Single-Serve", },
    { name: "Farmstead Baked Lentil Pasta", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bc4aa4db184af441ba7_production-meal-image-b845ba48-1300-4ecb-b9d0-d545b084f15a.jpeg", cal: "500Cal | Gluten Free | Single-Serve", },
    { name: "Asian-Style Chicken & Noodles", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bc75803c5766db77d82_production-meal-image-63479068-f450-4424-a206-229bd42ab321.jpeg", cal: "400Cal | Gluten Free | Single-Serve", },
    { name: "Salsa Fresca Chicken", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62149dbc07cab0c998da2a66_production-meal-image-d779e243-ce99-4811-9150-bb3a6964f682.jpeg", cal: "430Cal | Gluten Free | Single-Serve", },
    { name: "Super-Grain Pulled Pork Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c0a2037c265ce187aed_production-meal-image-2f53a0bb-c83f-48f7-b920-53e9157ac5e1.jpeg", cal: "400Cal | Gluten Free | Single-Serve", },
    { name: "Middle Eastern Falafel", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bcd85b43c0274a0ac73_production-meal-image-197e49d6-cfcc-4a4b-b0ea-4854553694de.jpeg", cal: "500Cal | Gluten Free | Single-Serve", },
    { name: "K-Town Pork & Purple Sticky Rice", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bfdfa4a1561bccc8cb2_production-meal-image-6dcb7ec8-8907-481c-b9d1-4bb54a42a89c.jpeg", cal: "470Cal | Gluten Free | Single-Serve", },
    { name: "Slow-Cooked Red Wine Beef Brisket", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c00ce5dcd725212481d_production-meal-image-37f943f1-bab9-4777-8d1f-9271115c69d0.jpeg", cal: "590Cal | Gluten Free | Single-Serve", },
    { name: "Southern-Inspired Pork Chop", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c0c258c0b2ab9211a8f_production-meal-image-ca312748-3978-41a6-b77b-71968d146b4e.jpeg", cal: "620Cal | Gluten Free | Single-Serve", },
    { name: "Escovitch Steak", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106402df2b93274e84b7c29_production-meal-image-b01ab4ec-ab22-4963-b985-7b980709d4b0.jpeg", cal: "610Cal | Gluten Free | Single-Serve", },
    { name: "Kung Pao Steak", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c16f03e5054a3d2e502_production-meal-image-d326b649-4c05-4215-a730-620b0d93ae2a.jpeg", cal: "450Cal | Gluten Free | Single-Serve", },
    { name: "Miso-Glazed Beef Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bd0df3b6577c7d15aa4_production-meal-image-c92760b3-d1c8-463a-9721-8effc5cbc614.jpeg", cal: "520Cal | Gluten Free | Single-Serve", },
    { name: "Keto-Friendly Chicken Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/6106406e186b52870a4ef9b9_production-meal-image-e11563a9-0714-42b4-aac9-239a7592018b.jpeg", cal: "330Cal | Gluten Free | Single-Serve", },
    { name: "Purely Plant Shepherd’s Pie", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bda86c670c07a0efcd2_production-meal-image-86d5fe9a-e01f-4af5-b246-e68d2eb8aebb.jpeg", cal: "340Cal | Gluten Free | Single-Serve", },
    { name: "Baked Turkey Meatballs", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c03aa4db1849944565d_production-meal-image-2d36ad62-ae02-42fe-9c16-f2064587d892.jpeg", cal: "410Cal | Gluten Free | Single-Serve", },
    { name: "Baja Green-Chile Chicken Stew", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62149de0ce36cd3cb9374fa3_production-meal-image-a181a354-9004-4837-aaef-2bd21f302cd2.jpeg", cal: "360Cal | Gluten Free | Single-Serve", },
    { name: "Creamy Mushroom Risotto", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bf7fa4a155c27cc8b88_production-meal-image-207ee5a9-50b6-4d3f-a0bb-e31354d0e606.jpeg", cal: "470Cal | Gluten Free | Single-Serve", },
    { name: "Springtime Chicken Florentine", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62149de6fcee300955368a99_production-meal-image-62334c4d-66da-4308-98f3-568dca0d56ac.jpeg", cal: "460Cal | Gluten Free | Single-Serve", },
    { name: "Chicken Alla No Vodka", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62149dea8edfcddc6aae28bb_production-meal-image-65b4c30a-d728-4370-bea5-7378fde418ce.jpeg", cal: "480Cal | Gluten Free | Single-Serve", },
    { name: "Wild-Caught Fish Cake", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62149defb01053b43a4e127c_production-meal-image-938266c6-577c-425f-ae6f-b95ef5864266.jpeg", cal: "520Cal | Gluten Free | Single-Serve", },
    { name: "Chicken Cordon Bleu", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bf10a8aa972b7670255_production-meal-image-8f27cccd-b0db-405a-9341-3f4adabcbe9c.jpeg", cal: "570Cal | Gluten Free | Single-Serve", },
    { name: "Country Chicken Stew", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62149df8de7d3b2be93c1b1f_production-meal-image-b8bb2dcf-52be-4f84-be7c-bf019107f2cc.jpeg", cal: "710Cal | Gluten Free | Single-Serve", },
    { name: "Shrimp & Andouille Paella", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61064033d2877aaa317edab7_production-meal-image-f28dfb4e-efc8-4dff-b95c-9239797edcb0.jpeg", cal: "200Cal | Gluten Free | Single-Serve", },
    { name: "Very Verde Chicken", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bfaee61ff381ae00518_production-meal-image-4aa973ed-846f-4957-9341-272c1125725d.jpeg", cal: "530Cal | Gluten Free | Single-Serve", },
    { name: "Chipotle Chicken Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bee549a61ddbce0691d_production-meal-image-603e4274-71b0-48a1-8072-c11baab58220.jpeg", cal: "470Cal | Gluten Free | Single-Serve", },
    { name: "Chicken & Pumpkin Parmesan Risotto", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bf485b43cf5faa0b293_production-meal-image-d5e81f22-3f38-4eaa-932a-c0bca23a021c.jpeg", cal: "240Cal | Gluten Free | Single-Serve", },
    { name: "Wintertime Turkey Meatloaf", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c2c5a38e27cd54e521b_production-meal-image-93da874b-3677-4881-9674-1a9f3a39ba38.jpeg", cal: "530Cal | Gluten Free | Single-Serve", },
    { name: "Chicken ’n’ Drop Biscuits", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bd35a38e27af54e3f3e_production-meal-image-68fb94dd-b723-4a29-8a8e-ad7b6a02c2ec.jpeg", cal: "500Cal | Gluten Free | Single-Serve", },
    { name: "Tricolor Beef Lasagna", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c19df3b6557b5d15ae8_production-meal-image-1ae8822e-987c-4a7e-8961-557d69673c01.jpeg", cal: "700Cal | Gluten Free | Single-Serve", },
    { name: "Southwest Beef Stew", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bca85b43c18b1a0ac1e_production-meal-image-cd1dace6-cfd9-406d-a1ee-e836f2f386ea.jpeg", cal: "650Cal | Gluten Free | Single-Serve", },
    { name: "Traditional Beef Stew", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c1c549a617576e07d76_production-meal-image-353ecb3a-15e4-465e-bb69-4b91e4c6b004.jpeg", cal: "350Cal | Gluten Free | Single-Serve", },
    { name: "Brown-Butter Pork & Cauli Shells", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c264b4b234713a0e3fe_production-meal-image-1daa7db4-183a-4aa0-bd4c-2ab21a5a47a5.jpeg", cal: "260Cal | Gluten Free | Single-Serve", },
    { name: "Indian-Spiced Chickpea Curry Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c13fa4a152d43cc96d6_production-meal-image-fa4ff532-e487-4656-b98f-f489d59e73b6.jpeg", cal: "600Cal | Gluten Free | Single-Serve", },
    { name: "BBQ Bison Burger*", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6be4ee61ff706bdff870_production-meal-image-9e969581-d09c-4617-9b17-d455d23c8952.jpeg", cal: "360Cal | Gluten Free | Single-Serve", },
    { name: "Jerk Chicken Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c064b4b238487a0b2b0_production-meal-image-2e64815b-800d-4a38-9664-c7a524148b2f.jpeg", cal: "600Cal | Gluten Free | Single-Serve", },
    { name: "Sticky-Sweet BBQ Beef Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c0f6dd23b0f8012af30_production-meal-image-93be0073-891b-4443-a6a0-9ab21a1d309c.jpeg", cal: "380Cal | Gluten Free | Single-Serve", },
    { name: "Sheet Pan Chicken", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6c2f2037c26803188fee_production-meal-image-7a3ba895-37a7-4f47-9e32-3667bb6141d3.jpeg", cal: "390Cal | Gluten Free | Single-Serve", },
    { name: "Oven-Baked Sweet Potato Cakes", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bde0c617f531e552730_production-meal-image-933355a9-e575-456c-9961-d6ac01cb50da.jpeg", cal: "420Cal | Gluten Free | Single-Serve", },
    { name: "Three-Grain Harvest Bowl", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6be2ee61ff2719dff7cd_production-meal-image-0a3b0cc8-11c7-4dd7-9b62-21a8a91c6a07.jpeg", cal: "420Cal | Gluten Free | Single-Serve", },
    { name: "Hearty Veggie Bolognese", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/62149e2f57f83141950ad757_production-meal-image-ff2c65b9-af43-4b4f-af72-835f41bc4a2b.jpeg", cal: "470Cal | Gluten Free | Single-Serve", },
    { name: "Huli Huli Chicken", image: "https://assets-global.website-files.com/5d03b4e13011831ae4624b37/61ff6bd74b4b23e889a06f18_production-meal-image-7448fb51-c1f4-4ac8-ad5b-1406fc1bfcfd.jpeg", cal: "460Cal | Gluten Free | Single-Serve", },

];
StoreMeals.map(function (elem, index, array) {
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
    div.append(avatar, name, cal);
    document.querySelector("#BIG").append(div);
});
var toggles = document.querySelectorAll(".faq-toggle");
var titles = document.querySelectorAll(".faq-title");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
titles.forEach((title) => {
  title.addEventListener("click", () => {
    title.parentNode.classList.toggle("active");
  });
});

// document.querySelector('.meal').addEventListener('click',function(){
//   window.location.href("../ADD TO CART/plan.html")
// })