学习笔记

JavaScript表达式

- Atom
	* Grammar
		- 语法树与运算符优先级的关系

		- 运算值 左值和右值得区别
	* Runtime
- Expression
	* Member
		- a.b
		- a[b]
		- foo`string`
		- super.b
		- super[ 'b' ]
		- new.target
		- new Foo()

	* New
		- new Foo
		- new a()()
		- new new a()

	* Call
	 	- foo()
	 	- spuer()
	 	- foo()['b']
	 	- foo().b
	 	- foo()`abc`

	 * Left handside & Right handside
	 	- a.b = c // a.b是左表达式，a + b是右表达式不能放在等号左侧

	 * Update
	 	- a ++
	 	- a --
	 	- -- a
	 	- ++ a

	 * Unary
	 	- delete a.b
	 	- void foo()
	 	- typeof a
	 	- + a
	 	- - a
	 	- ~ a
	 	- !a
	 	- await a

	 * Exponental
	 	- * 右结合运算，3 ** 2 ** 3等价于3 ** (2 ** 3)

	 * Multiplicative
	 	- * /%

	 * Additive
	 	- +-

	 * Shift
	 	- <<, >>, >>> 移位运算符

	 * Relationship
	 	- <, >, <=, >=, instanceof, in 关系运算符

	 * Equality
	 	- ==
	 	- !=
	 	- ===
	 	- !==
	 * Bitwise
	 	- & ^ |

	 * Logical
	 	- &&
	 	* ||

	 * Conditional
	 	- conditional ? action1 : action2，? :三目运算


	Type Convertion
	 	- a + b
	 	- "false" == false
	 	- a[0] = 1

	type: normal, break, continue, return, throw
	   value: 基本类型
	   target: label

	简单语句
	 	- expression
	 	- empty
	 	- debugger
	 	- throw
	 	- continue
	 	- break
	 	- return

- Statement
- Structure
- Program/Module
- JS 执行粒度(运行时)
	- 宏任务
	- 微任务 (promise)
	- 函数调用(Excution Context)
	- 语句/声明(Completion Record)
	- 表达式(Reference)
	- 直接量/变量/this...