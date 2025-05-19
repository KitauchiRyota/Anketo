let n_topics = 3;

// テーブル作成
const table = document.createElement('table');
table.border = '1';
table.style.borderCollapse = 'collapse';
table.style.marginBottom = '20px';

// スタイル調整用関数
const setCellStyle = (cell, isHeader = false) => {
    cell.style.padding = '6px 10px';
    cell.style.textAlign = 'center';
    if (isHeader) {
        cell.style.fontWeight = 'bold';
        cell.style.backgroundColor = '#f0f0f0';
    }
};

// 1行目ヘッダー
const headerRow1 = document.createElement('tr');

// 空セル（行番号列）
let blank = document.createElement('th');
blank.rowSpan = 3;
setCellStyle(blank, true);
headerRow1.appendChild(blank);

// 難易度ヘッダー
let th1 = document.createElement('th');
th1.colSpan = n_topics * 3; // 3段階評価
th1.textContent = '難易度';
setCellStyle(th1, true);
headerRow1.appendChild(th1);

// 満足度ヘッダー
let th2 = document.createElement('th');
th2.colSpan = n_topics * 4; // 4段階評価
th2.textContent = '満足度';
setCellStyle(th2, true);
headerRow1.appendChild(th2);

table.appendChild(headerRow1);

// 2行目：トピックヘッダー
const headerRow2 = document.createElement('tr');
for (let i = 0; i < n_topics; i++) {
    // 難易度のトピック
    const th = document.createElement('th');
    th.colSpan = 3; // 3段階評価
    th.textContent = `topic${i + 1}`;
    setCellStyle(th, true);
    headerRow2.appendChild(th);
}
for (let i = 0; i < n_topics; i++) {
    // 満足度のトピック
    const th2 = document.createElement('th');
    th2.colSpan = 4; // 4段階評価
    th2.textContent = `topic${i + 1}`;
    setCellStyle(th2, true);
    headerRow2.appendChild(th2);
}
table.appendChild(headerRow2);

// 3行目：評価ヘッダー
const headerRow3 = document.createElement('tr');
for (let i = 0; i < n_topics; i++) {
    for (let j = 0; j < 3; j++) {
        // 難易度の評価
        const th = document.createElement('th');
        th.textContent = `${j + 1}`;
        setCellStyle(th, true);
        headerRow3.appendChild(th);
    }
}

for (let i = 0; i < n_topics; i++) {
    for (let j = 0; j < 4; j++) {
        // 満足度の評価
        const th = document.createElement('th');
        th.textContent = `${j + 1}`;
        setCellStyle(th, true);
        headerRow3.appendChild(th);
    }
}
table.appendChild(headerRow3);

// データ行を1行だけ作成
const row = document.createElement('tr');
const rowHeader = document.createElement('th');
rowHeader.textContent = "結果";
setCellStyle(rowHeader, true);
row.appendChild(rowHeader);

// 難易度からデータを追加
for (let i = 0; i < n_topics; i++) {
    for (let j = 0; j < 3; j++) {
        const td = document.createElement('td');
        td.textContent = diffs[i][j]
        setCellStyle(td);
        row.appendChild(td);
    }
}
for (let i = 0; i < n_topics; i++) {
    for (let j = 0; j < 4; j++) {
        const td = document.createElement('td');
        td.textContent = satis[i][j]
        setCellStyle(td);
        row.appendChild(td);
    }
}

table.appendChild(row);

// ラッパーdivを作成して中央ぞろえ
const wrapper = document.createElement('div');
wrapper.style.textAlign = 'center';
wrapper.style.marginTop = '40px'; // 上部の余白を追加
wrapper.appendChild(table);

// ページの先頭に追加
document.body.insertBefore(wrapper, document.body.firstChild);
