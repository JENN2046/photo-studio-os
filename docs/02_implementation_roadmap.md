# Photo Studio OS / Implementation Roadmap v1

## 总体策略

当前阶段只做一件事：把 Command Center 从视觉基准推进到可运行、可维护、可接真实数据的前端主线。

不要把范围扩散到完整工作室 OS。先把主控台打穿。

## Phase 0：仓库落地与方向锁定

状态：进行中

目标：

- 初始化 `JENN2046/photo-studio-os`
- 建立 README / AGENTS / docs
- 固定视觉母版与工程边界
- 把 Canva 视觉规范板作为外部视觉资产

验收：

- 仓库可被其他工程协作者理解
- 后续 Agent 能读懂边界，不乱改方向
- Command Center 被明确列为第一主线

## Phase 1：Command Center 前端骨架

目标：

- 建立 Next.js / React / TypeScript / Tailwind 项目结构
- 完成 `/command-center` 页面入口
- 完成主布局：Sidebar / TopBar / GaugeHero / BottomCards / RightRail
- 完成 mock data 驱动

验收：

- `npm install && npm run dev` 可运行
- `/command-center` 可打开
- 页面结构与 Brooklyn Studio A 母版一致
- 数据不直接散落在组件里

## Phase 2：仪表组件精修

目标：

- `PrecisionGauge` SVG 参数化
- 支持 value / label / subline / size
- 增强金属环、玻璃盘面、刻度、指针、中心轴
- 左右小仪表与中央大仪表保持等距视觉关系

验收：

- 三仪表主从关系清楚
- 中央大仪表是视觉心脏
- 仪表不依赖静态图片
- 后续可以接真实数值

## Phase 3：真实数据接入准备

目标：

- 定义 `CommandCenterSnapshot`
- 建立 `command-center-service.ts`
- 支持 mock fallback
- 预留真实 API endpoint

建议接口：

```txt
GET /api/command-center/snapshot
```

验收：

- 前端可以无痛从 mock 切到真实 API
- 数据结构清晰
- loading / error 状态存在

## Phase 4：视觉 QA 与响应式

目标：

- 1920 × 1080 主视觉校准
- 1600 桌面压缩模式
- 1320 以下隐藏右栏
- 1120 以下单列降级

验收：

- 主控台宽屏气质不塌
- 不为了移动端牺牲桌面旗舰感
- 风险色、字体、卡片密度保持克制

## Phase 5：后端与真实摄影工作流对接

目标：

- 接入项目、SKU、QC、审批、AI 检查数据
- 与未来 Photo Studio OS 后端 API 对齐
- 开始形成真实摄影工作室项目流

验收：

- Dashboard 显示真实项目数据
- Risk Pulse 能反映真实风险
- Approval Queue 能承载真实审批任务
- AI Inspection Feed 能承载真实检查结果

## 当前结论

先做窄，做深，做准。

Command Center 是第一块地基。它稳了，Photo Studio OS 才有主心骨。
