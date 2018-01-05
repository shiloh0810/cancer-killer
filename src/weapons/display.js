$('#menu div').hide();

delayShow('.js-weapons_0', 'radiofrequency ablation', 0);
delayShow('.js-weapons_1', 'cryo ablation', 0);
delayShow('.js-weapons_2', 'surgery', 0);
delayShow('.js-weapons_3', 'chemotherapy', 10000);
delayShow('.js-weapons_4', 'radiation therapy', 20000);
// delayShow('.js-weapons_5', 5, 30000);
// delayShow('.js-weapons_6', 6, 4000);
delayShow('.js-weapons_7', 'transplantation', 30000);
delayShow('.js-weapons_8', 'Immuno', 40000);

function delayShow(element, key, time) {
    setTimeout(function () {
        $(element).show();
        showMsg(key);
    }, time)
}