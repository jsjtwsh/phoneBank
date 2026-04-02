# AGENTS.md — phoneBank

> 永远使用中文和用户对话。

## 项目概述

移动端 H5 银行应用 (兴业银行)，React 19 + TypeScript + Vite 8 + Tailwind CSS 4。
设计稿基准宽度 375px，使用 rem 适配不同屏幕宽度。

## 构建/开发命令

```bash
pnpm dev          # 启动开发服务器 (Vite HMR)
pnpm build        # 类型检查 + 生产构建 (tsc -b && vite build)
pnpm lint         # ESLint 检查
pnpm preview      # 预览生产构建
```

**注意**: 项目当前无测试框架。如需添加测试，优先使用 Vitest + React Testing Library。

## TypeScript 配置

- **严格模式**: `strict: true`
- **未使用变量**: `noUnusedLocals: true`, `noUnusedParameters: true`
- **模块语法**: `verbatimModuleSyntax: true` (import type 必须显式)
- ** Erasable Syntax**: `erasableSyntaxOnly: true` (禁止 enum/namespace)
- **模块解析**: `bundler` 模式
- **JSX**: `react-jsx`
- **项目结构**: 使用 project references (tsconfig.app.json + tsconfig.node.json)

## 代码风格规范

### 导入规范
- 使用 `verbatimModuleSyntax`，类型导入必须用 `import type`
- React 导入: `import { useState } from 'react'`
- 样式导入: `import './index.css'`
- 资源导入: `import icon from './assets/icon.svg'`

### 命名约定
- 组件: PascalCase (`App`, `ServiceCard`)
- 变量/函数: camelCase (`serviceItems`, `getLocalServiceFullSvg`)
- 常量: camelCase (当前项目风格)
- 文件名: PascalCase for components (`.tsx`)

### Tailwind CSS v4 规范
- 使用 `@import "tailwindcss"` (非 `@tailwind` 指令)
- **数值可直接用小数**: `left-1.5` 代替 `left-[0.375rem]`
- **rem 单位**: 项目基于 rem 做响应式，1rem = 16px (375px 视口)
- 颜色: 支持 `bg-linear-to-b` 渐变语法 (TW4 新语法)
- 支持 `backdrop-blur-[13.591px]` 等精确值 (仅当无对应预设时)

### 布局风格
- 大量使用 `absolute` + `relative` 定位 (设计稿像素级还原)
- 尺寸单位统一用 rem (Tailwind 默认 rem 单位)
- 移动端最大宽度: `max-w-[23.4375rem]` (375px)
- 底部固定导航: `fixed bottom-0`

### 错误处理
- ESLint 配置: `@eslint/js` recommended + `tseslint.configs.recommended` + `react-hooks` + `react-refresh`
- 禁止 `as any`、`@ts-ignore`、`@ts-expect-error`
- 使用 `!` 非空断言时需确保值确实存在 (如 `document.getElementById('root')!`)

### React 规范
- 函数组件: `function App() { ... }` (非箭头函数)
- 使用 `aria-label` 做无障碍标注
- 列表渲染使用有意义的 `key` (如 `key={item.label}`)
- 内联 SVG 直接嵌入 JSX

## 项目结构

```
src/
  assets/figma/     # 设计资源 (PNG/SVG)
  App.tsx           # 主应用组件 (当前所有 UI 逻辑)
  App.css           # 模板自带样式 (未使用)
  index.css         # 全局样式 + Tailwind + rem 适配
  main.tsx          # 入口文件
```

## 关键实现细节

### rem 适配方案
```css
html {
  font-size: clamp(12px, 4.266667vw, 20px);
}
```
- 375px 视口下 1rem = 16px
- 最小 12px，最大 20px
- 计算公式: `vw值 = (目标px / 375) * 100`

### SVG 资源批量导入
```typescript
const localServiceSvgModules = import.meta.glob('./assets/figma/*.svg', {
  eager: true,
  import: 'default',
}) as Record<string, string>
```
