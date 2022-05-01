//для отправки в телегу

export class Telegram{
    static token = '5160638103:AAGpfJ-FIculSM77mSnKyDg-952xYEpceAo';
    static id = {
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
        'Улица 1905 года': '1848204778'
    };
    
    static send(target, text) {
        var request = new XMLHttpRequest();
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        request.open('POST',`https://api.telegram.org/bot${token}/sendMessage?chat_id=${id[target]}`);
        request.send(`parse_mode=HTML&text=${text}`)
    }
}