---
trigger: manual
---

单元测试重点关注关键功能的测试，要求：

1. **测试用例**：专注于构建测试用例。为关键函数/方法提供测试用例，不必面面俱到，避免测试用例太复杂。
   测试用例优先以易于理解的Table-Driven Tests形式呈现，例如:

```
class TestMath(unittest.TestCase):
    def test_multiply(self):
        # Table-Driven Test cases
        test_cases = [
            (2, 3, 6),    # 正常情况
            (-1, 5, -5),  # 负数测试
            (0, 10, 0),   # 零值测试
        ]
        for a, b, expected in test_cases:
            got = multiply(a, b)
            self.assertEqual(got, expected, f"{a}*{b}应得{expected}，实际得到{got}")
```

2. **依赖处理策略**：除非用户明确要求，否则不得对被测试代码进行mock, 应直接调用依赖。
3. **测试框架**：Python的unittest单元测试框架。不得创建setUp方法，让测试代码跟随测试用例，便于阅读。
4. **命名**：测试文件与被测试文件在同一个目录下，命名为test\_\*.py。
5. 不得使用类似`try-except`语句吞没异常。
6. 如果被测的类为AI Model并且输出包含张量，仅测试model的输出shape是否符合预期。

请分成小段进行编码，比如逐个为每个函数/方法的写单元测试。
