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