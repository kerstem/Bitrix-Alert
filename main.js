function Click(Target) {
	let click = new CustomEvent("click");
	Target.dispatchEvent(click);
}

SetButtonId=document.getElementById('tbl_sale_order_filterset_filter');
SaveButtonId=document.getElementsByClassName('adm-btn-save').item(1);

function Check(){
    BoxCollector=document.getElementsByTagName("TBODY");
    Box=BoxCollector.item(8);
    if(Box.childElementCount != 0){
        for(var i=0; i<Box.childElementCount; i++){
            let NewOrderCount = 0;
            let NewOrderArr = [];
            let NewOrderList = '';
            if(Box.children[i].children[5].textContent == 'Новый заказ'){
                NewOrderArr[NewOrderCount]=i;
                NewOrderCount++;
                NewOrderList+=(`${Box.children[i].children[3].textContent}\n`);
                Click(Box.children[i].children[0]);
            }
            if(NewOrderCount != 0){
                document.forms['form_tbl_sale_order'].elements['action_button'].value='edit';
                for(var i=0; i<NewOrderCount; i++){
                    Box.children[NewOrderArr[i]].children[5].children[1].value='OT';
                }
                Click(SaveButtonId);
                alert('Новых заказов: '
                +String(NewOrderCount)
                +'\n'
                +NewOrderList)
            }
        }
    }
}

function main(){
    Click(SetButtonId);
    Check();
}

let timerId = setInterval(() => main(), 60000);