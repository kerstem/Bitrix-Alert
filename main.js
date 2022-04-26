function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}

function Click(Target) {
	let click = new Event("click");
	Target.dispatchEvent(click);
}

function Main(){
    let SetButtonId=document.getElementById('tbl_sale_order_filterset_filter');
    let EditButtonId=document.getElementsByClassName('adm-table-item-edit-wrap').item(0).children[0];
    Click(SetButtonId);
    sleepFor(5000);
    let BoxCollector=document.getElementsByTagName("TBODY");
    let Box=BoxCollector.item(8);
    if(Box.childElementCount != 0){
        let NewOrderCount = 0;
        let NewOrderArr = [];
        let NewOrderList = '';
        for(var i=0; i<Box.childElementCount; i++){
            if(Box.children[i].children[5].textContent == 'Новый заказ'){
                NewOrderArr[NewOrderCount]=i;
                NewOrderCount++;
                NewOrderList+=(`${Box.children[i].children[3].textContent}\n`);
                Click(Box.children[i].children[0]);
                sleepFor(5000);
            }
        }
        if(NewOrderCount != 0){
            Click(EditButtonId);
            sleepFor(5000);
            let SaveButtonId=document.getElementsByClassName('adm-btn-save').item(0);
            let EditBoxCollector=document.getElementsByTagName("TBODY");
            let EditBox=EditBoxCollector.item(8);
            for(var j=0; j<NewOrderCount; j++){
                let Select=EditBox.children[NewOrderArr[j]].children[5].children[0];
                Select.value='OT';
            }
            Click(SaveButtonId);
            sleepFor(5000);
            alert(`Новых заказов: ${String(NewOrderCount)}\n${NewOrderList}`);
            
        }
    }
}

let timerId = setInterval(() => Main(), 10000);