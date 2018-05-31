# bookmark-client

這個庫是使用Vue.js、Vuex及Vue Router所做的產品，編輯器為Visual Studio Code。

## Visual Studio Code擴充插件

* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): 設定`.editorconfig`於根目錄可以在每次儲存的時候將文件整理成設定的格式。
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): 依照制定於`.eslintrc.js`的規則來規範程式碼，此外掛可以讓VSCode用底線來表示出不符合規範的程式碼。
* [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur): VSCode開發Vue.js用的高亮、自動完成...等地整合開發工具。

### 儲存時做lint

VSCode配合ESLint外掛可以在按下儲存時幫忙修改程式使其符合規則，在VSCode中將下面的設定加入:

```js
{
  "eslint.autoFixOnSave": true, // 開啟eslint自動修改功能
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {  // 讓.vue的檔案也受到ESLint的監控
      "language": "vue",
      "autoFix": true
    },
  ],
  "vetur.validation.template": false  // 如果有用自己的.eslintrc編輯規則，要把vetur預設的lint給關掉
}
```

註: 如果沒效請確定在`local`或是`global`是否已安裝`ESLint`，`ESLint`的外掛必須安裝`ESLint`才能作用。
