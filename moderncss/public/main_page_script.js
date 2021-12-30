var cards =
{
    "1": {
        "title": "Многолетняя астра",
        "text": "Многолетние астры относятся к семейству астровых, то есть являются ближайшими родственниками известной всем однолетней астры китайской, или калли-стефус. Многолетние астры называют также настоящими или истинными.Это корневищное травянистое растение дает хорошую срезку, особенно осенью, когда в открытом грунте уже нет других цветов. Это травянистые растения с прямостоячими густооблиственными побегами, высотой от 25 до 160 см.Листья мелкие, ланцетной формы, темно-зеленые. Соцветия - корзинки диаметром 1-5 см. Цветки белые, голубые, фиолетовые, розовые и малиновые. Известно около 500 видов многолетних астр.",
        "img": "img/card/1.jpg",
        "date": "9,10,12,",
        "next_key": 2,



    },
    "2": {
        "title": "Вербена",
        "text": "Вербена – очень непривередливое травянистое многолетнее растение. Его трогательные силуэты гордо красуются на клумбах даже у начинающих садоводов. Период цветения у растения довольно длинный — если своевременно обрывать увядшие бутоны, то вербена сохранит свою красоту практически до заморозков.",
        "img": "img/card/2.jpg",
        "date": "9,10,12",
        "next_key": 3,


    },
    "3": {
        "title": "Очиток",
        "text": "Суккулентное растение седум (Sedum), либо очиток, является представителем семейства Толстянковые. В народе такой суккулент еще именуют лихорадочной либо грыжной травой. В природных условиях его еще можно повстречать в Евразии, Африке, Южной и Северной Америке на лугах и сухих склонах. Название седум произошло от слова «sedo», которое с латыни переводится как «утихать», это связано с тем, что листва у некоторых видов применялась в качестве обезболивающего средства. Существует миф о том, как Телефос сын Геракла вылечил таким растением тяжелую рану, которую нанес ему копьем Ахилл. На сегодняшний день известно больше 300 видов такого растения.",
        "img": "img/card/3.jpg",
        "date": "9,10,12",
        "next_key": 4,

    },
    "4": {
        "title": "testh",
        "text": "Суккулентное растение седум (Sedum), либо очиток, является представителем семейства Толстянковые. В народе такой суккулент еще именуют лихорадочной либо грыжной травой. В природных условиях его еще можно повстречать в Евразии, Африке, Южной и Северной Америке на лугах и сухих склонах. Название седум произошло от слова «sedo», которое с латыни переводится как «утихать», это связано с тем, что листва у некоторых видов применялась в качестве обезболивающего средства. Существует миф о том, как Телефос сын Геракла вылечил таким растением тяжелую рану, которую нанес ему копьем Ахилл. На сегодняшний день известно больше 300 видов такого растения.",
        "img": "img/news6.jpg",
        "date": "9,10",
        "next_key": 1,

    },

};
var card_style = '';
var cards_block = '';
var true_cards = [];
var current_month = (new Date().getMonth()) + 1;
var i = 0;
var key_change;
for (var key in cards) {

    if (cards[key].date.indexOf(current_month) != -1) {

        true_cards.push(cards[key]);

    }

}

for (var key in true_cards) {
    true_cards[i].next_key = Number(key) + 1;
    i++;
}
true_cards[true_cards.length - 1].next_key = Object.keys(true_cards)[0];
var obj_keys=Object.keys(true_cards);
for(i=0;i<obj_keys.length;i++)
{
    
    cards_block += ' <div id="' + obj_keys[i] + '" class=" ';
    if(obj_keys[i]==true_cards.length-1)
    {
        cards_block += " z-10 ";
    }
    cards_block += 'w-full h-96 absolute bg-lime-600 rounded-xl overflow-hidden flex flex-col md:flex-row text-gray-100"><div class="min-h-full max-h-96 md:w-2/5 text-left p-6 space-y-2 overflow-y-auto"><p class="text-3xl  font-bold">' + true_cards[obj_keys[i]].title + '</p><p class=" text-lg  ">' + true_cards[obj_keys[i]].text + '</p></div><div class="  h-full w-full bg-cover" style="background-image: url(' + true_cards[obj_keys[i]].img + ')" </div></div></div>';
}
var carusel = document.getElementById('cr');
cr.innerHTML += cards_block;
var curren_elem_id;
var next_elem;
var elem;
key_change = true_cards[true_cards.length - 1].next_key;

function change_picture() {
     elem= document.getElementsByClassName("z-10")[0];
    curren_elem_id = elem.id;
    $(".z-10").removeClass("z-10");
    key_change = true_cards[curren_elem_id].next_key;
    next_elem = document.getElementById(key_change);
    next_elem.classList.add("z-10");
}

window.onload = function () {

    main_page_news_block();
};