// SNSサーバー

// データベースに接続

// webサーバーを起動
const express = require('express');
const app = express();
const portNo = 8000;
app.listen(portNo, () => {
    console.log('起動しました。', `http://localhost:${portNo}`);
});


//静的ファイルを自動的に返すようにルーティング
app.use('/public', express.static('./public'));
app.use('/login', express.static('./public'));
app.use('/users', express.static('./public'));
app.use('/timeline', express.static('./public'));
app.use('/', express.static('./public'));