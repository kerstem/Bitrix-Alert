function main(){
    let SearchButton = document.getElementById('tbl_sale_order_filterset_filter');
    //Получает кнопку "Найти" на странице заказов
    SearchButton.click();
    //Кликает по ней
    let OrdersCollection=document.getElementsByClassName('adm-list-table-row');
    //Получает HTMLCollection таблицы заказов
    if (OrdersCollection.length != 0)//Если заказы вообще есть
    {
        for(var i; i<OrdersCollection.length; i++)//Пробегает по каждому заказу
        {
            let Order=OrdersCollection.item(i);//Берет конкретный заказ Order из HTMLCollection в процессе итерации
            let OrderStatus=Order.children.item(5).firstChild.firstChild.textContent;//Получает строку статуса заказа
            if (OrderStatus == 'Новый заказ'){

            }
        }
    }
}

