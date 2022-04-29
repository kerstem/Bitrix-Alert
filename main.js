const token = '5160638103:AAGpfJ-FIculSM77mSnKyDg-952xYEpceAo';
const id = {
    'Выставочная': '5070543256',
    'Теплый стан': '1812906461',
    'Ломоносовский проспект': '889469547'
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


var timerId = setInterval(() => main(), 60000);