# Next.jsでシームレスなページ遷移を行う



## 環境構築

+ node.js（v12.16.2で確認）

```
$ npm install
```
## デバッグ実行

```
$ npm run dev
```

## 静的ファイルへのexport

deploy先のパスに注意！
```
$ npm run build
$ npm run export
```




## このリポジトリを一から作る場合の手順
```
$ npx create-next-app --example with-next-page-transitions hello-with-next-page-transitions
```
その後はコミットログが詳しい。

+ .node-version によるバージョン指定
+ package.jsonにexportタスクを追記
+ next.config.jsにdeploy先のパスを記述


