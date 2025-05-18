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
blank.rowSpan = 2;
setCellStyle(blank, true);
headerRow1.appendChild(blank);

// 難易度ヘッダー
let th1 = document.createElement('th');
th1.colSpan = 4;
th1.textContent = '難易度';
setCellStyle(th1, true);
headerRow1.appendChild(th1);

// 満足度ヘッダー
let th2 = document.createElement('th');
th2.colSpan = 4;
th2.textContent = '満足度';
setCellStyle(th2, true);
headerRow1.appendChild(th2);

table.appendChild(headerRow1);

// 2行目：トピックヘッダー
const headerRow2 = document.createElement('tr');
['topic1', 'topic2', 'topic3', 'topic4', 'topic1', 'topic2', 'topic3', 'topic4'].forEach(topic => {
    const th = document.createElement('th');
    th.textContent = topic;
    setCellStyle(th, true);
    headerRow2.appendChild(th);
});
table.appendChild(headerRow2);

// データ行（1〜4）
for (let i = 1; i <= 4; i++) {
    const row = document.createElement('tr');
    const rowHeader = document.createElement('th');
    rowHeader.textContent = i;
    setCellStyle(rowHeader, true);
    row.appendChild(rowHeader);

    // 空のデータセルを8個
    for (let j = 0; j < 8; j++) {
        const td = document.createElement('td');
        setCellStyle(td);
        row.appendChild(td);
    }

    table.appendChild(row);
}

// ページの先頭に追加
document.body.insertBefore(table, document.body.firstChild);
