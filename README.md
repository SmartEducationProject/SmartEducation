# README

<p>
<a href="https://www.oscs1024.com/project/oscs/SmartEducationProject/SmartEducation?ref=badge_small" alt="OSCS Status"><img src="https://www.oscs1024.com/platform/badge/SmartEducationProject/SmartEducation.svg?size=small"/></a>
</p>

## 分支开发

- 禁止使用 master 分支开发！
- develop 作为开发主分支，master 作为稳定版本主分支
- 不要直接 push 到 develop 或者 master 分支，可提交 pull request , 有利于合作者进行 code review
- 在自己的分支上开发，如：`dev-myy` 、 `dev-mdc`

## 提交规范

遵循 Angular Commit 规范，为了方便编写遵循规范的 commit message，我们使用 Commitizen 进行 git commit

- 每次提交的时候，使用`git cz`，选择 commit 的类别：

  - feat：新功能（feature）
  - fix：修补 bug
  - docs：文档（documentation）
  - style： 格式（不影响代码运行的变动）
  - refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
  - test：增加测试
  - chore：构建过程或辅助工具的变动

- 输入简短描述

示例：

<img src="https://myyoss.oss-cn-shenzhen.aliyuncs.com/img/md/202207210110846.png" alt="image-20220721011042744" style="zoom:50%;" />
