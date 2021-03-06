# 模块十七 随机变量及其分布

## 17.1 条件概率与全概率公式

### 条件概率

::: details 先决概念

想想看，有的东西是不是忘记了？

$P(B|A)$表示“在事件A发生条件下，事件B发生”的概率。

当事件A与B相互独立时，有

$$P(AB)=P(A)P(B)$$

:::

一般地，设 $A,B$ 为两个随机事件，且 $P(A) > 0$，我们称

$$P(B|A)=\frac{P(AB)}{P(A)}$$

为**在事件A发生条件下，事件B发生的条件概率**，简称条件概率。

对于任意两个事件 $A,B$ ，若 $P(A)>0$，则有

$$P(AB)=P(A)P(B|A)$$

上式称作**概率的乘法公式**。

### 全概率公式

一般地，设$A_1,A_2,...,A_n$是一组两两互斥的事件，$A_1 \cup A_2 \cup ... \cup A_n = \Omega$ 且 $P(A_i) > 0 , i=1,2,3,...,n$，则对任意事件 $B \subseteq \Omega$，有

$$P(B)=\sum_{i=1}^{n}P(A_i)P(B|A_i)$$

上式称作概率的全概率公式。

::: details 贝叶斯公式*

将全概率公式推广，可有贝叶斯公式：

$$P(A_i|B)=\frac{P(A_i)P(B|A_i)}{P(B)}=\frac{P(A_i)P(B|A_i)}{\sum_{k=1}^{n}P(A_k)P(B|A_k)},i=1,2,...,n$$

:::

## 17.2 离散型随机变量及其分布列

