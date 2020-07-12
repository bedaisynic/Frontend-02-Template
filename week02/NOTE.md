学习笔记

语言按语法分类
	* 非形式语言
		- 中文， 英文
	* 形式语言（乔布斯基谱系）
		- 0型 无限制文法
		- 1型 上下文相关文法
		- 2型 上下文无关文法
		- 3型 正则文法

产生式（巴克斯-诺尔范式 AKA- BNF）
* 用尖括号括起来的名称来表示语法结构名
* 语法结构分成基础结构和需要用其他语法结构定义的复合结构
	- 基础结构称终结符(不是代码终结的意思)
	- 复合结构称非终结符
* 引号和中间的字符表示终结符
* 可以有括号
* *表示重复多次
* |表示或
* +表示至少一次

四则运算：
* 1 + 2 * 3

终结符：
* Number
* + - * /

非终结符：
* MultiplicativeExpression
* AddtiveExpression

BNF的定义是可以递归的

Javascript 是上下文无关文法


现代语言的特例 (编程语言大部分为上下文无关文法)
	* C++中， *可能表示乘号或者指针，具体是哪个，取决于型号前面的标识符是否被声明为类型
	* VB中， < 可能是小于号， 也可能是XML直接量的开始，取决于当前位置是否可以接受XML直接量
	* Python中， 行首的tab符和空格会根据上一行的行首空白以一定规则被处理成虚拟终结符indent或者dedent
	* JS中， / 可能是除号， 也可能是正则表达式开头，处理方式类似于VB， 字符串模板中也需要特殊处理}, 还有自动插入分号规则


语言的分类
形式语言---用途
 * 数据描述语言(无法编程)  // JSON, HTML, XAML, SQL, CSS, (Markdown, YAML)
 * 编程语言  // c, c++, Java, C#, Python, Ruby, Perl, Lisp, T-SQL, Clojure, Haskell, JavaScript, (Shell, GO)

形式语言---表达方式
 * 声明式语言（只告诉你结果是怎么样的）// JSON, HTML, XAML, SQL, CSS, Lisp, Clojure, Haskell, (YAML)
 * 命令型语言 (达成这个结果的每个步骤是怎么样的) // C, C++, Java, C#, Python, Ruby, Perl, JavaScript, (GO)


图灵完备性
	命令式--- 图灵机
		* goto
		* if和while
	声明式--- lambda
		* 递归


动态与静态
	动态：
		-在用户的设备/在线服务器上
		-产品实际运行时
		-Runtime
	静态：
		-在程序的设备上
		-产品开发时
		-Compiletime


类型系统
	* 动态类型系统与静态类型系统 // 动态：JS  静态：C++
	* 强类型与弱类型
		String + Number
		String == Boolean
	* 复合类型
		结构体
		函数签名
	* 子类型
	* 泛型
		逆变/协变


一般命令式编程语言
Atom:
	identifier
	Literal

Experssion:表达式
	Atom
	Operator
	Punctuator

Statement语句：（if else）
	Expression
	Keyword
	Punctuator

Structure结构化：
	Fuction
	Class
	Process
	Namespace
	...

Program组织代码：（npm）
	program
	Module
	Package
	Library

      语义
语法  ====>  运行时


JS类型 // Number

Atom原子
* Literal
* variable
* keywords
* whitespace
* line terminator

Runtime
* Types
- Number
- String
- Boolean
- Object
- Null
- Undefined
- Symbol

* Execution context

// 整理笔记中。。。
