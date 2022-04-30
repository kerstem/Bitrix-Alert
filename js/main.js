import { Telegram } from "./telegram.js";

function main() {
    searchButton = document.getElementById(
        'tbl_sale_order_filterset_filter'
    );
    searchButton.click();
    var status_col;
    var number_col;
    var spot_col;
    let orderHeader = document.getElementsByClassName('adm-list-table-header').item(0).children;
    for (var i = 0; i < orderHeader.length; i++) {
        switch (orderHeader.item(i).firstElementChild.textContent) {
            case 'ID':
                number_col = i;
                console.log(`Номера заказов в колонке ${String(i)}`);
                break;
            case 'Статус':
                status_col = i;
                console.log(`Статусы заказов в колонке ${String(i)}`);
                break;
            case 'Розн.магазин':
                spot_col = i;
                console.log(`Магазины заказов в колонке ${String(i)}`);
                break;
        }
    }
    console.log('');
    var orderCollection = document.getElementsByClassName('adm-list-table-row');
    if (orderCollection.length != 0) {
        console.log('Есть заказы');
        for (var i = 0; i < orderCollection.length; i++) {
            console.log(`Проверяю заказ ${String(i + 1)}`);
            let order = orderCollection.item(i);
            let order_status = order.children.item(status_col).textContent;
            let order_number = order.children.item(number_col).textContent;
            let order_spot = order.children.item(spot_col).textContent;
            console.log(order_number + ' ' + order_status + ' ' + order_spot);
            if (order_status == 'Новый заказ') {
                console.log(`Новый заказ :${String(order_number)}`);
                Telegram.send(id[order_spot], `Новый заказ!\n${String(order_number)}`);
            }
        }
        console.log('')
    }
    else {
        console.log('Нет заказов\n')
    }
}

main();
var timerId = setInterval(() => main(), 30000);