# Personal Portfolio + Blog

既存の白・黒・青のポートフォリオに、JekyllベースのブログとPages CMSの編集画面を追加した構成です。

## 追加されたもの

- `blog/`：記事一覧とカテゴリー絞り込み
- `_layouts/`：ブログ・記事ページの共通レイアウト
- `_posts/`：記事ファイル（Markdown）
- `.pages.yml`：Pages CMSの編集画面設定
- `assets/js/blog.js`：カテゴリー絞り込み
- `assets/images/blog/`：記事画像の保存先

## GitHub Pages

リポジトリ名が `personal-portfolio` である前提で `_config.yml` の `baseurl` を `/personal-portfolio` にしています。リポジトリ名が異なる場合は、その値を実際のリポジトリ名に変更してください。

GitHubの Settings → Pages で Branch `main` / Folder `/(root)` を選択します。GitHub PagesはJekyllを使ってMarkdown記事をHTMLに変換します。

## ブラウザから記事を編集する

1. https://app.pagescms.org/ を開き、GitHubでサインインします。
2. Pages CMSのGitHub Appに、対象リポジトリへのアクセスを許可します。
3. `personal-portfolio` リポジトリを開き、`main` ブランチを選択します。
4. `.pages.yml` を読み込み、`ブログ記事` コレクションを開きます。
5. 記事を作成・編集し、画像を挿入して保存します。保存内容はGitHubにコミットされ、Pagesの再ビルド後に公開サイトへ反映されます。

## 下書きと公開

- `公開する` をOFFにすると `published: false` になり、サイトに表示されません。
- 公開するときはONにして保存します。
- リポジトリがPublicの場合、下書きの内容もGitHub上のソースファイルとして閲覧できる可能性があります。公開前の秘密情報は保存しないでください。

## 注意

Pages CMSはGitHubアカウントで認証し、リポジトリへ直接変更を保存する外部編集画面です。初回にGitHub Appのアクセス許可が必要です。
