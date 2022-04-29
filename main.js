const token = '5160638103:AAGpfJ-FIculSM77mSnKyDg-952xYEpceAo';
const id = {
    'Выставочная': '5070543256',
    'Теплый стан': '1812906461',
    'Ломоносовский проспект': '889469547',
    'Каширская': '1931745462',
    'Юго-Западная': '1808333118',
    'Новые Черемушки': '5099634655',
    'Академическая': '1814074886',
    'Крылатское': '2051718044',
    'Профсоюзная': '1408074569',
    'Октябрьское поле': '1732051146',
    'Сходненская': '1541678040',
    'Улица 1905 года':'1848204778'
}

function sendTelegram(id,text) {
    var z=$.ajax({  
        type: "POST",  
        url: "https://api.telegram.org/bot"+token+"/sendMessage?chat_id="+id,
        data: "parse_mode=HTML&text="+text, 
        });
}

function main() {
    searchButton = document.getElementById(
        'tbl_sale_order_filterset_filter'
    );
    searchButton.click();
    orderCollection = document.getElementsByClassName('adm-list-table-row');
    if (orderCollection.length != 0) {
        console.log('Есть заказы');
        for (var i = 0; i < orderCollection.length; i++){
            console.log('Проверяю заказ ' + String(i+1));
            order = orderCollection.item(i);
            var order_status = order.children.item(5).textContent;
            var order_number = order.children.item(3).textContent;
            var order_spot = order.children.item(9).textContent;
            console.log(order_number + ' ' + order_status + ' ' + order_spot);
            if (order_status == 'Новый заказ') {
                console.log(`Новый заказ :${String(order_number)}`);
                sendTelegram(id[order_spot], `Новый заказ!\n${String(order_number)}`);
            }
        }
    }
    else {
        console.log('Нет заказов')
    }
}

main();
var timerId = setInterval(() => main(), 30000);