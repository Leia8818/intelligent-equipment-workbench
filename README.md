# 智能装备研究院工作台

这是一个部署在 GitHub Pages 上的静态工作台，用于集中展示智能装备研究院的知识资产、项目资产、AI能力资产和后续建设方向。

线上地址：

```text
https://leia8818.github.io/intelligent-equipment-workbench/
```

扫码页：

```text
https://leia8818.github.io/intelligent-equipment-workbench/demo-qr.html
```

## V1.0 信息结构

- 研究院概览：`overview/index.html`
- 重点项目：`projects/index.html`
- AI赋能中心：`ai/index.html`
- 知识中心：`knowledge/index.html`
- 未来探索：`future/index.html`
- 内容录入规范：`guide/index.html`
- 扫码入口页：`demo-qr.html`

## 内容真实机制

所有项目详情、知识资料、案例和模板都应保留以下字段：

- 资料来源
- 更新时间
- 责任人
- 可信度

字段为空时显示“待补充”，不要隐藏。

可信度分级：

- A级：原始数据 / 正式文件
- B级：内部整理资料
- C级：公开网络资料
- D级：AI辅助生成内容，待人工核实

## 后续提供内容的格式

### 最新消息

```text
标题：
日期：
正文：
资料来源：
附件：
```

### 研发资讯

```text
标题：
分类：
摘要：
正文：
资料来源：
可信度：
```

### 共享文档

```text
文档名称：
文档分类：
文档说明：
网盘链接：
资料来源：
更新时间：
```

### 项目介绍

```text
项目名称：
项目背景：
当前进展：
阶段成果：
图片：
资料来源：
更新时间：
```

### 首页文案

```text
标题：
副标题：
部门介绍：
联系方式：
```

## 本地预览

```bash
python3 -m http.server 4173
```

打开：

```text
http://127.0.0.1:4173/
```

## GitHub Pages 发布

修改完成后：

```bash
git add .
git commit -m "Update workbench content"
git push
```

GitHub Pages 会自动从 `main` 分支根目录发布。
