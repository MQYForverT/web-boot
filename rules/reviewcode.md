---
trigger: manual
---

请review代码:
存在哪些问题/bug？
是否遵循clean code原则？
函数职责是否独立且单一？
是否有无效的变量、导入包、注释、代码？
是否遵循fail-fast原则，不使用try-except隐匿异常？
是否未在`.py`文件顶部import依赖项?

如果有，请逐一列出，勿改代码。按以下格式输出：

## 函数x

问题
...

## 函数x

问题
