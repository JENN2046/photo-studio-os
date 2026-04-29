# Photo Studio OS / VCP Integration Boundary v1

## 结论

当前 `photo-studio-os` 仓库不是要替代 VCP，也不是要脱离 VCP 另起炉灶。

它的定位是：

```txt
VCP 生态外侧的前端工作台 / 摄影工作室 Command Center UI 主线
```

也就是说：

- VCP 仍然可以作为后端调度、Agent、插件、自动化、记忆与工具调用中枢。
- Photo Studio OS 前端负责把摄影工作室的项目、风险、审批、质检、AI 检查结果可视化。
- 当前仓库先独立，是为了让前端 UI 快速成型，避免一开始就被 VCP 插件结构、后端状态、部署问题拖慢。

## 为什么先独立

先独立前端有三个目的：

1. 快速稳定视觉与交互骨架。
2. 用 mock data 先把 Command Center 做出来。
3. 给后续 VCP / API / Agent 接入留下清晰接口。

这不是最终割裂，而是先把前端磨成一块可接血管的骨头。

## 推荐最终架构

```txt
Photo Studio OS Frontend
        ↓
Command Center API Adapter
        ↓
VCP / VCPToolBox / Agent Plugins / Studio Data Layer
```

## 前端仓库职责

`photo-studio-os` 负责：

- Next.js / React 前端界面
- Command Center 页面
- SVG 仪表组件
- 视觉 tokens
- 数据 schema
- API adapter
- loading / error / responsive 状态

## VCP 侧职责

VCP 侧未来负责：

- Agent 调度
- 插件调用
- 摄影工作流自动化
- 项目状态汇总
- AI 检查任务
- 审批队列数据
- 风险事件生成
- 记忆与上下文管理

## 接口边界

前端不直接理解 VCP 内部插件细节。前端只消费稳定快照：

```txt
GET /api/command-center/snapshot
```

返回：

```txt
CommandCenterSnapshot
```

这让前端、VCP、Agent 三者保持清晰边界。

## 当前阶段判断

当前阶段不做 VCP 深度嵌入。

先做：

```txt
独立可运行前端骨架 + 可替换数据 adapter
```

后做：

```txt
接入 VCP 后端 / VCP 插件 / Agent 数据流
```

## 最后原则

不要把 Photo Studio OS 做成一个和 VCP 竞争的系统。

它应该是 VCP 在摄影工作室场景里的可视化驾驶舱。

VCP 是发动机。  
Photo Studio OS 是仪表盘。  
两者要分层，不要混成一团。
