// 25Std用汎用型アンケート集計スクリプト
// 2025.05.12　25Std3rd前に作成
// Created with collaboration of Kitauchi, chatGPT, and GitHub Copilot.


// アンケート結果の表を取得
const table = document.querySelector('table');

// ヘッダ行から，集計対象のインデックス（列）と個数を取得する
const headers = table.rows[0].cells;

var n_topics = 0; // 集計対象のトピック数

// インデックスとトピック名を格納する辞書型配列を宣言
var topics_dict = [];

for (let i = 0; i < headers.length; i++) {
    let headerText = headers[i].textContent;
    
    if(headerText.includes('で扱った内容について') && headerText.includes('あてはまるものを答えてください')) {
    // 「，」と「、」を考慮．半角全角のパターンも考慮するとパターン数が多くなるので置換はしない．
        // 「」の中身を取得
        topics_dict.push( { name : headerText.match(/「(.*?)」/)[1] , index : i } );
        n_topics++;
    }
}

// 結果を格納する空の配列を宣言．
var diffs = []; // 難易度
var satis = []; // 満足度

const n_rows = table.rows.length; // 表の行数

for (let i = 0; i < topics_dict.length; i++) {  // トピック数分ループ
    var diff1 = 0;
    var diff2 = 0;
    var diff3 = 0;

    var satis1 = 0;
    var satis2 = 0;
    var satis3 = 0;
    var satis4 = 0;
    
    for (let j = 1; j < n_rows; j++) { // 1行目はヘッダ行なので2行目から
        let diff = table.rows[j].cells[topics_dict[i].index].textContent;
        let sat = table.rows[j].cells[topics_dict[i].index + 1].textContent;

        let diffValue = parseInt(diff[1], 10); // 10進数に変換
        let satValue = parseInt(sat[1], 10);

        if (diffValue >= 1 && diffValue <= 3) {
            eval(`diff${diffValue}++`);
        }

        if (satValue >= 1 && satValue <= 4) {
            eval(`satis${satValue}++`);
        }
    }
    // 結果を配列に格納
    diffs.push([diff1, diff2, diff3]);
    satis.push([satis1, satis2, satis3, satis4]);
}

// 結果をアラートで表示
let resultText = "集計結果\n";

for (let index = 0; index < topics_dict.length; index++) {
    resultText += `topic${index + 1} ${topics_dict[index].name}\n`;
    resultText += `理解度\n1：${diffs[index][0]}\n2：${diffs[index][1]}\n3：${diffs[index][2]}\n\n`;
    resultText += `満足度\n1：${satis[index][0]}\n2：${satis[index][1]}\n3：${satis[index][2]}\n4：${satis[index][3]}\n\n`;
}

alert(resultText);

// コンソールログにも表示
console.log(resultText);


// 対応中
// 表形式で表示
console.log("集計結果\nアラートのポップアップとは表示形式が異なるので注意してください．\nこの表はコピーしてGoolgleドキュメントに貼り付けも可能です．\n");
console.table(diffs, ["1", "2", "3"], ["topic1", "topic2", "topic3", "topic4"]);


// ーーーーーーーーーーーーーーーーーーーーーー
var title = document.getElementsByClassName("active")[0];
var diff11 = 0
var diff12 = 0
var diff13 = 0
var diff21 = 0
var diff22 = 0
var diff23 = 0
var satis11 =0
var satis12 =0
var satis13 =0
var satis14 =0
var satis21 =0
var satis22 =0
var satis23 =0
var satis24 =0
for(var i=3; i<20; i++) {
var x = title.getElementsByTagName("td")[i].innerHTML;
var titlename = String(x);
if(titlename.includes('One Note')) {
var diff_row = i-3;
var stat_row = i-2;
break;}}
for(var i=1; i<1000; i++) {
try{
var member = document.getElementsByTagName("tr")[i];
var y = member.getElementsByTagName("td")[diff_row].innerHTML;
var dif = String(y);
if(dif.includes('1')) {
diff11 = diff11 + 1;
}else if(dif.includes('2')) {
diff12 = diff12 + 1;
}else if(dif.includes('3')) {
diff13 = diff13 + 1;
}
var z = member.getElementsByTagName("td")[stat_row].innerHTML;
var sat = String(z);
if(sat.includes('1')) {
satis11 = satis11 + 1;
}else if(sat.includes('2')) {
satis12 = satis12 + 1;
}else if(sat.includes('3')) {
satis13 = satis13 + 1;
}else if(sat.includes('4')) {
satis14 = satis14 + 1;
}
}catch (error) {
break;}}

for(var i=3; i<20; i++) {
    var x = title.getElementsByTagName("td")[i].innerHTML;
    var titlename = String(x);
    if(titlename.includes('メールマナー')) {
    var diff_row = i-3;
    var stat_row = i-2;
    break;}}
    for(var i=1; i<1000; i++) {
    try{
    var member = document.getElementsByTagName("tr")[i];
    var y = member.getElementsByTagName("td")[diff_row].innerHTML;
    var dif = String(y);
    if(dif.includes('1')) {
    diff21 = diff21 + 1;
    }else if(dif.includes('2')) {
    diff22 = diff22 + 1;
    }else if(dif.includes('3')) {
    diff23 = diff23 + 1;
    }
    var z = member.getElementsByTagName("td")[stat_row].innerHTML;
    var sat = String(z);
    if(sat.includes('1')) {
    satis21 = satis21 + 1;
    }else if(sat.includes('2')) {
    satis22 = satis22 + 1;
    }else if(sat.includes('3')) {
    satis23 = satis23 + 1;
    }else if(sat.includes('4')) {
    satis24 = satis24 + 1;
    }
    }catch (error) {
    break;}}


alert(`topic1（One Note）\n理解度\n3：${diff13}\n2：${diff12}\n1：${diff11}\n\n満足度\n4：${satis14}\n3：${satis13}\n2：${satis12}\n1：${satis11}\n\ntopic2（メールマナー）\n理解度\n3：${diff23}\n2：${diff22}\n1：${diff21}\n\n満足度\n4：${satis24}\n3：${satis23}\n2：${satis22}\n1：${satis21}`);