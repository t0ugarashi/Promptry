# プロジェクト概要
本プロダクト「Promptry for PC」（以下：Promptry）では日常でのウェブアクセスを最適化するように設計されたPC向けのスタートページです。<br>
「Promptry」は英語でプロンプト「Prompt」と設備や場所を意味する接尾辞「-ry」が組み合わさった造語です。このスタートページが日常でのウェブアクセスやAIアクセスですぐに作業を促せれるように最適化させるといったコンセプトになっています。<br>
PromptryのUIにはグラスモーフィズムを取り入れたり、背景画像に動画を差し込めるといった普段の作業のスタートページに洗礼さと創造性をとりこみ、ウェブアクセスが苦痛にならないような設計になっています。<br>

## 機能説明
「Promptry」では以下の機能を備えています。<br>
-検索エンジンを選択可能にした検索パネル<br>
-検索パネル内でAI用のプロンプト入力を可能にする切り替え式のトグルボタン<br>
-ブックマークパネル（ファビコンまたはアイコン画像による視覚的認識）<br>

## 設計思想
このスタートページでは先進的なデザインを使用しつつも明確で迅速なウェブアクセスを行うことができます。<br>
-機能を詰め込みすぎず設計させた、作業がはじめやすいスタートページ<br>
-視覚的階層は色の過剰ではなく、グラスモーフィズムによる最小限の階層分けと間隔、配置によって実現させます<br>
-アニメーションは状態変更（ホバー、フォーカス）のみに使用されます<br>

## 開発環境
-開発機器：MacBook Pro (13-inch, 2017, Thunderbolt 3ポートx 2)<br>
-使用ソフト：Visual Studio Code<br>

## 使用技術
-HTML5<br>
-CSS3(Flexbox,responsive layout)<br>
-Vanilla Javascript(DOM manipulation)<br>

## ディレクトリ構成
.<br>
|-index.html<br>
|-css/<br>
| |-style.css<br>
|<br>
|-js/<br>
| |-search.js<br>
| |-bookmarks.js<br>
|<br>
|-image/<br>
| |-wallpaper/<br>
| | |-back.mp4<br>
| | |-other_wallpaper/<br>
| |   |-back.png<br>
| | <br>
| |-system_img/<br>
|   |-Logo.PNG<br>
|<br>
|-readme.md<br>

## 背景について
-back.pngは次のサイトから取りました<br>
https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E9%9D%92%E7%A9%BA%E3%81%AE%E4%B8%8B%E3%81%AE%E8%8C%B6%E8%89%B2%E3%81%AE%E5%B2%A9%E5%B1%A4-CSpjU6hYo_0 <br>
-bach.mp4は次のサイトから取りました<br>
https://www.pexels.com/ja-jp/video/4153410/ <br>
-Logo.pngはGeminiで生成しました<br>


## セットアップ方法
-背景動画を変更する<br>
　１.Promptry/image/wallpaper/に移り現在のback.mp4を削除またはother_wallpaperに入れる<br>
　２.用意した背景動画または画像ファイルをback.(拡張子(現在はmovかjpgにしか対応していません))に名前を変え、Promptry/image/wallpaper/に動画または画像を挿入<br>
　３.サイトを開いているであれば再度読み込みをする<br>
-ブックマークを追加、削除する<br>
　１.Promptry/js/bookmarks.jsを開く<br>
　２.const data内のjson形式の文字列に以下の型に合わせた文章を挿入する。ただし入力の規則についてはjson方式に合わせる<br>

　名前:{<br>
　    url:"urlのリンク",<br>
　    icon:"ファビコン表示が使えなかったときの画像表示のリンク"<br>
　}<br>

　3.削除に関しては削除したい項目の上記の文章の型ごと削除します<br>
　4.サイトを開いているであれば再度読み込みをする<br>

## アップデート内容v1.0.1
-cssのコードの矛盾を一部修正<br>
-AI検索に切り替え時にsearch-selectに適用される.hidden-search内のコードをdisplay:none;ではなくvisibility:none;を使用し、レイアウト崩れを抑制しました。<br>
-壁紙には動画だけではなく、写真も壁紙にできるように調整しました。<br>

## 今後の予定
-モバイル版スタートページ「Promptry for Mobile」のリリース<br>
-レイアウトをより自由にPC向けに設計<br>
-日付や簡易天気予報の追加、既存機能の改良<br>

## ライセンス
Promptry v1.0.1<br>
Copyright (c) 2026 t0ugarashi<br>

