# 智能装备研究院工作台静态门户

这是一个纯静态的智能装备研究院工作台门户，可展示部门介绍、资讯发布、共享文档、项目介绍、平台能力与合作入口。可部署到 Vercel、Netlify、GitHub Pages、阿里云 OSS、腾讯云 COS 等静态托管平台。

## 本地预览

```bash
python3 -m http.server 4173
```

打开：

```text
http://127.0.0.1:4173/
```

## 内容替换

- 首页主标题：`index.html` 中的 `hero-title`
- 工作台入口：`#workspace`
- 部门最新消息：`news/index.html`
- 研发资讯：`research/index.html`
- 共享文档：`#documents`
- 项目介绍：`#projects`
- 研究方向：`#fields`
- 平台能力：`#platform`
- 联系方式：`#contact`
- 首屏图片：替换 `assets/hero-research.jpg`

## 后续升级方向

- 资讯发布：接入 CMS、Markdown 文件目录或数据库。
- 共享文档：接入对象存储、网盘链接、权限系统或统一登录。
- 项目介绍：接入项目库，支持分类、检索、详情页和归档。
- 数据看板：增加访问统计、项目进度和资料下载统计。

## 发布新内容

1. 复制 `templates/content-template.html` 到 `news/` 或 `research/` 目录。
2. 将文件名改成英文短横线格式，例如 `new-equipment-test.html`。
3. 修改标题、日期、摘要和正文。
4. 在对应栏目列表页 `news/index.html` 或 `research/index.html` 中新增一条入口。
5. 如需在首页展示，也同步修改 `index.html` 中的最新消息或研发资讯卡片。

## 云端部署

### Vercel

1. 新建项目并导入本目录。
2. Framework Preset 选择 `Other`。
3. Build Command 留空。
4. Output Directory 填 `.`。
5. 部署后会得到一个公网 URL。

### Netlify

1. 新建站点并上传本目录。
2. Build command 留空。
3. Publish directory 填 `.`。
4. 部署后会得到一个公网 URL。

### GitHub Pages

1. 把本目录提交到 GitHub 仓库。
2. 在仓库 Settings > Pages 中选择部署分支。
3. Source 选择仓库根目录。
