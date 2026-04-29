# Photo Studio OS / Task Breakdown v1

## 当前任务编排原则

细节实现交给后续工程协作者，但仓库必须先把骨架、边界、顺序和验收标准钉住。

任务按五条线推进：

```txt
A. Repository Foundation
B. Command Center Shell
C. Precision Gauge System
D. Data Adapter
E. Visual QA / Responsive Polish
```

## A. Repository Foundation

目标：让任何协作者进入仓库后知道项目是什么、不是什么、先做什么。

任务：

- 完成 README
- 完成 AGENTS.md
- 完成 docs 产品方向、架构、路线图
- 增加基础 package / tsconfig / tailwind / postcss
- 后续补充 CI 与 lint

验收：

- 新协作者 10 分钟内能理解当前阶段目标
- Agent 不会擅自重设视觉方向

## B. Command Center Shell

目标：把 Brooklyn Studio A 母版落成页面骨架。

任务：

- `/command-center` 页面入口
- `SidebarNavigation`
- `TopStatusBar`
- `GaugeHeroSection`
- `RightOperationsRail`
- 下方三卡片区域

验收：

- 页面能跑起来
- 布局与视觉母版一致
- 没有业务数据硬编码散落在组件中

## C. Precision Gauge System

目标：让三仪表成为可复用、可参数化、可接数据的 SVG 组件。

任务：

- `PrecisionGauge` 支持 value / label / subline / size
- 中央 hero gauge 与左右 small gauge 尺寸区分
- 金属环、玻璃面、刻度、指针、风险弧分层
- 左右小仪表与中央表视觉等距

验收：

- SVG 可维护
- 数值更新能改变指针角度
- 中央仪表仍然是视觉心脏

## D. Data Adapter

目标：让 mock 和真实 API 可以无痛切换。

任务：

- `command-center-schema.ts`
- `command-center-mock.ts`
- `command-center-service.ts`
- loading / error 状态
- 环境变量 endpoint

验收：

- 无 endpoint 时走 mock
- 有 endpoint 时请求真实 API
- 页面组件只消费 typed snapshot

## E. Visual QA / Responsive Polish

目标：把界面从“能跑”推进到“像产品”。

任务：

- 1920 × 1080 主视口校准
- 1600 桌面压缩
- 1320 以下隐藏右栏
- 1120 以下单列降级
- 字体、卡片密度、风险色控制

验收：

- 不灰、不亮、不泛 SaaS
- 风险红只在必要处出现
- 卡片信息密度稳定
- 宽屏主控台气质保留

## 推荐协作顺序

```txt
1. 先补齐项目基础文件与可运行性
2. 再完成 /command-center 页面骨架
3. 再磨 PrecisionGauge
4. 再接数据 adapter
5. 最后做视觉 QA 与响应式
```

不要反过来。先修细节再修地基，会散。
