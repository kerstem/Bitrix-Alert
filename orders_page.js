spot = 'OT'

function main() {
    let searchButton = document.getElementById(
        'tbl_sale_order_filterset_filter'
    );
    searchButton.click();
    let ordersCollection=document.getElementsByClassName('adm-list-table-row');
    let newOrdersCollection = [];
    if (ordersCollection.length != 0){
        for(var i; i<ordersCollection.length; i++){
            var j = 0;
            let order=ordersCollection.item(i);
            if (order.children[5].firstChild.firstChild.textContent == 'Новый заказ'){
                newOrdersCollection[j] = order;
                j++;
            };
        };
        if (newOrdersCollection.length != 0) {
            let alertString = '';
            for (var i; i < newOrdersCollection.length; i++){
                newOrdersCollection[i].children[0].click();
                alertString += newOrdersCollection[i].children.item(3).textContent + '\n';
            };
            let editButton = document.getElementsByClassName('adm-table-btn-edit').item(0);
            editButton.click();
            let selectCollector = document.getElementsByClassName('adm-list-table').item(0).getElementsByTagName('SELECT');
            for (var i; i < newOrdersCollection.length; i++){
                selectCollector.item(i).value = spot;
            };
            let saveButton = document.getElementsByClassName('adm-btn-save').item(1);
            saveButton.click();
            alert(`Новых заказов: ${String(newOrdersCollection.length)}\n${alertString}`)
        };
    };
};

let timerId = setInterval(() => main(), 10000);