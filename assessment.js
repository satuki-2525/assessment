'use strict';

const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
userNameInput.onkeydown = event => {
    if(event.key === 'Enter'){
        assessmentButton.onclick();
    }
}

assessmentButton.onclick = () => {
    
const userName = userNameInput.value;
        if(userName.length === 0){
            // 名前が空のときは処理を終了する
            return;
        }
            console.log(userName);
    
        // TODO 診断結果表示エリアの作成
        resultDivided.innerText = '';
    // headerDivided の作成
    const headerDivided = document.createElement('div');
    headerDivided.setAttribute('class', 'card-header');
    headerDivided.innerText = '診断結果';

    // bodyDivided の作成
    const bodyDivided = document.createElement('div');
    bodyDivided.setAttribute('class', 'card-body');

    const paragraph = document.createElement('p');
    paragraph.setAttribute('class', 'card-text');
    const result = assessment(userName);
    paragraph.innerText = result;
    bodyDivided.appendChild(paragraph);

    // resultDivided に Bootstrap のスタイルを適用する
    resultDivided.setAttribute('class', 'card');
    resultDivided.setAttribute('style', 'max-width: 700px;')

    // headerDivided と bodyDivided を resultDivided に差し込む
    resultDivided.appendChild(headerDivided);
    resultDivided.appendChild(bodyDivided);
    
        // TODO ツィートエリアの作成
        tweetDivided.innerText = '';
        const anchor = document.createElement('a');
        const hrefValue = 'href="https://twitter.com/intent/tweet?button_hashtag=' +
        encodeURIComponent('あなたのいいところ') +
        '&ref_src=twsrc%5Etfw"';
        anchor.setAttribute('href', hrefValue);
        anchor.setAttribute('class', 'twitter-hashtag-button');
        anchor.setAttribute('data-text', result);  // 診断結果を載せる！
        anchor.innerText = 'Tweet: #あなたのいいところ ';
    
        tweetDivided.appendChild(anchor);
    
        // widgets.jsの設定
        const script = document.createElement('script');
        script.setAttribute('src', 'http://platform.twitter.com/widgets.js');
        tweetDivided.appendChild(script);
            
    }

const ansers = [
'{userName}のいいところは声です。{userName}の特徴的な声は皆aを惹きつけ、心に残ります。',
'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
'{userName}のいいところは優しさです。あなたの優しい雰囲気や立ち振る舞いに多くの人が癒やされています。'
];

/**
 * 名前文字r列を渡すと診断結果が返ってくる関数
 * @param { String } userName ユーザーの名前
 * @param { String } 診断結果
 */
function assessment(userName){
    // 全文字のコード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for(let i=0; i < userName.length; i++){
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);

    }

    // 文字のコードの番号の合計を回答数で割って添字の数値を求める
    const index = sumOfCharCode % ansers.length;
    let result = ansers[index]; // 診断結果を取り出す

    result = result.replaceAll('{userName}', userName); // 名前に置き換える
    return result;

}

// console.assert(
//     assessment('太郎') === assessment('太郎'),
//     '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません' // 間違っていた場合に出力

// );


// console.assert(
//     assessment('太郎') === 
//     '太郎のいいところは決断力です。太郎がする決断にはいつも助けられています。',
//     '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません'
// );


// console.log(assessment('太郎'));
// console.log(assessment('次郎'));
// console.log(assessment('太郎'));


