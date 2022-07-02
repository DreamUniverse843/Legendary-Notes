# Hello VuePress

数学公式测试

$$\sqrt{ab} \le \frac{a+b}{2}$$

::: tip 演示部分

假设 $y >= 0$ , 而 $[\log x]$ 表示 $\log x$ 的整数部分, 设:

$$\Phi (y) = \frac {1} {2 \pi i} \int_{2 - i \infty}^{2 + i \infty} \frac {y^{\omega} \mathrm{d} \omega} {\omega \left(1 + \frac {\omega} {(\log x)^{1.1}}\right)^{[ \log x ] + 1}}, x > 1$$

显见， 当 $0 <= y <= 1$ 时， 有 $\Phi(y) = 0$. 对于所有 $y >= 0$, 则 $\Phi(y)$ 是一个非减函数.

当 $\log x>= 10^4$ 及 $y>= e^{2{(\log x)}^{-0.1}}$ 时， 则有:

$$1 - x^{- 0.1} <= \Phi (y) <= 1$$

:::

::: warning 提示
目前文档的编写工作刚刚开始，尚未完成！
:::

::: danger 千万小心
维护者请留意：在提交修改代码至 main 分支前，请务必在本地做好调试验证，确保无问题后再提交或开 Pull Request。
:::