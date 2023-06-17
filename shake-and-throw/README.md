# mosacup-prototype

## clone 手順

git clone https://github.com/abokado2525/mosacup-prototype.git

cd shake-and-throw

yarn install

の順で実行してください

そしたら yarn dev で動くようになるよ！

## フォルダー構造について

- pages/
- public/
- styles/ ← CSS ファイルをまとめるフォルダ

  - components/
  - layouts/
  - pages/
  - globals/

  components/: コンポーネント固有のスタイルを格します。例えば、ボタンやフォームなどの再利用可なコンポーネントのスタイルを管理します。

  layouts/: ページのレイアウトに関連するスタイル格納します。例えば、ヘッダーやフッターなどの共のレイアウト要素のスタイルを管理します。

  pages/: 特定のページに関連するスタイルを格納しす。例えば、特定のページに固有のスタイルやスタルシートを管理します。

  globals/: グローバルなスタイルや共有のスタイル格納します。例えば、リセット CSS やテーマ設定ど、アプリケーション全体に適用されるスタイルを理します。
