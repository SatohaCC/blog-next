# Github Actions

## dependabot.yml
- このファイルはGitHubのDependabotの設定ファイルで、依存関係の自動更新を管理。

### versioning-strategyの選択肢
- auto が無難？
- increaseだと常に最新に。破壊的変更を気にせず、積極的に更新したい場合。
    - CIで十分なテストがあればこっちでもいい？
