# Photo Studio OS / Frontend Architecture v1

## 技术主线

建议采用：

```txt
Next.js / React / TypeScript / Tailwind CSS / SVG Gauge
```

当前目标不是一次性做完整系统，而是先稳定 Command Center 的工程骨架。

## 页面入口

```txt
src/app/command-center/page.tsx
```

## 推荐组件树

```txt
CommandCenterPage
├── SidebarNavigation
├── MainArea
│   ├── TopStatusBar
│   ├── GaugeHeroSection
│   │   ├── PrecisionGauge / SKU Coverage
│   │   ├── PrecisionGauge / Studio Readiness
│   │   └── PrecisionGauge / QC Health
│   └── BottomPanelGrid
│       ├── ProjectExecutionCard
│       ├── ActivityTimelineCard
│       └── AIInspectionFeedCard
└── RightOperationsRail
    ├── RiskPulseCard
    ├── ApprovalQueueCard
    └── MiniStatusCards
```

## 核心组件命名

```txt
SidebarNavigation
TopStatusBar
RightOperationsRail
GaugeHeroSection
PrecisionGauge
CommandPanel
ProjectExecutionCard
ActivityTimelineCard
AIInspectionFeedCard
```

## 数据层分界

前端页面不直接写死业务数据。统一通过数据适配层进入：

```txt
src/data/command-center-schema.ts
src/data/command-center-mock.ts
src/data/command-center-service.ts
```

`command-center-service.ts` 当前可以先返回 mock，后续接真实 API。

## 真实数据接口预留

建议环境变量：

```bash
PHOTO_STUDIO_OS_COMMAND_CENTER_ENDPOINT=https://your-api.example.com/api/command-center/snapshot
```

接口返回结构应匹配：

```txt
CommandCenterSnapshot
```

## 响应式策略

优先顺序：

1. 1920 × 1080 主控台模式
2. 1600 宽桌面压缩模式
3. 1320 宽以下隐藏右侧栏
4. 1120 宽以下单列降级

移动端不是当前阶段重点。不要为了移动端牺牲主控台气质。

## 工程原则

- 不把 AI 生成图直接当 UI。
- 不把视觉稿碎片化成不可维护 CSS。
- 仪表必须 SVG 化、参数化、可接真实数值。
- 风险色只服务状态，不做装饰。
- Mock Data 必须可被 API adapter 替换。
