class El{
    constructor(img, h3){
        this.src = img;
        this.h3 = h3;
        this.out = "";
    }
    render(id){
        this.out = `
            <img src="${this.src}" alt="">
            <h3>${this.h3}</h3>
        `;
        document.querySelector(`#${id}`).innerHTML = this.out;
    }
}

let img = "https://cdn3.iconfinder.com/data/icons/knowledges/44/educatiojn-07-64.png";
let el = new El(img, "Сюда можно вставить любую картинку?");
el.render("el");

let img2 = "https://cdn4.iconfinder.com/data/icons/halloween-stuff-lined/64/ghost-64.png";
let el2 = new El(img2, "То что не запрещено - разрешено!");
el2.render("el2");

let img3 = "https://cdn1.iconfinder.com/data/icons/photo-editor-3/24/i24_photoedit_contrast-64.png";
let el3 = new El(img3, "Вау, а что насчёт текста??????");
el3.render("el3");

let img4 = "https://cdn2.iconfinder.com/data/icons/finance-253/24/app-calulator-math-mobile-64.png";
let el4 = new El(img4, "На текст действуют такие же правила :)(:");
el4.render("el4");

let img5 = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/basketball-64.png";
let el5 = new El(img5, "Точно!? Чем  иожешь доказать?");
el5.render("el5");

let img6 = "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/football-64.png";
let el6 = new El(img6, "qazWSXedcRFVtgbYHNujmIK");
el6.render("el6");

let img7 = "https://cdn2.iconfinder.com/data/icons/flags_gosquared/64/Serbia_flat.png";
let el7 = new El(img7, "Теперь верю. Удачи в обучении");
el7.render("el7");

let img8 = "https://cdn1.iconfinder.com/data/icons/ensign-11/512/48_Ensign_Flag_Nation_cameroon-64.png";
let el8 = new El(img8, "Спасибо! До встречи :):):)");
el8.render("el8");

let img1 = "https://cdn1.iconfinder.com/data/icons/ensign-11/512/48_Ensign_Flag_Nation_cameroon-64.png";
let el1 = new El(img1, "P.S. Так интересней. Заранее простите");
el1.render("el1");