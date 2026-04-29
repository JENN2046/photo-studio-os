# AGENTS.md / Photo Studio OS

## 项目定位

Photo Studio OS 是面向专业摄影工作室的操作系统原型。当前主线只聚焦：

```txt
Command Center / Brooklyn Studio A dashboard
```

不要擅自扩展成完整 ERP、CRM、相册系统或泛后台。

## 当前定版视觉方向

必须保留：

- 三仪表结构：左 SKU Coverage / 中 Studio Readiness / 右 QC Health
- 中央大仪表是视觉心脏
- 右侧栏：Risk Pulse + Approval Queue
- 下方三卡片：Project Execution / Activity Timeline / AI Inspection Feed
- 近黑背景、冷白文字、少量橙红风险色
- 高级机械仪表感，但不要游戏 HUD、不要赛博朋克、不要过亮蓝光

## 工作边界

允许做：

- 前端组件重构
- SVG 仪表优化
- Tailwind / CSS tokens 整理
- Mock data 与真实 API adapter
- 响应式桌面布局
- README / docs / issue 维护

谨慎做：

- 大幅改变视觉结构
- 加入新页面
- 引入重型 UI 库
- 把仪表改成 Canvas，除非有明确性能理由

禁止做：

- 重新设计主视觉方向
- 把页面做成普通 SaaS 后台
- 让风险色泛滥
- 把所有数据写死在组件里

## 工程原则

1. `src/data/command-center-schema.ts` 是数据结构契约。
2. `src/data/command-center-service.ts` 是真实后端接入口。
3. 组件命名应与设计层级一致。
4. 所有视觉常量优先进入 CSS tokens。
5. PR 必须说明视觉影响、数据影响、响应式影响。

## 推荐提交粒度

- `feat: add command center shell`
- `feat: refine precision gauge component`
- `feat: add command center data adapter`
- `style: tune dashboard spacing and density`
- `docs: update product direction`

## 当前 Canva 规范板

- Edit: https://www.canva.com/d/FphIGS8c9tWW6QC
- View: https://www.canva.com/d/5KTJ_kQpdWXWeZ7
