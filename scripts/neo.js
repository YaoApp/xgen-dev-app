function chat(args) {
	const date = new Date()

	return {
		text: `<Test>Hello, World!</Test>

            现在的时间是：
            ${date.getFullYear()}-${
			date.getMonth() + 1
		}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
            `
	}
}
