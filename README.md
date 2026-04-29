# Photo Studio OS Command Center Rebuild v2

第二轮重建包。基于已定版的 Brooklyn Studio A 视觉基准继续打磨：

- 仪表质感增强：`PrecisionGauge` 分层 SVG、金属渐变、玻璃高光、细刻度、指针 hub。
- 卡片密度优化：`CommandPanel` 支持 `density="compact"`，行高更稳。
- 真实数据接入：新增 `command-center-service.ts` 作为数据适配层。
- 响应式：支持 1920 主场景、1600 紧凑桌面、1320 隐藏右栏、1120 单列降级。
- 组件命名：更稳定，贴近 Figma 层级与工程语义。

## Run

```bash
npm install
npm run dev
```

Open:

```txt
/command-center
```

## Real data seam

Set this env var to connect a real API later:

```bash
PHOTO_STUDIO_OS_COMMAND_CENTER_ENDPOINT=https://your-api.example.com/api/command-center/snapshot
```

Expected shape is `CommandCenterSnapshot` in:

```txt
src/data/command-center-schema.ts
```

## Core components

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
