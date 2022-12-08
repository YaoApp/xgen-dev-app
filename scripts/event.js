function OnChange(info) {
	console.log(info)

	let data = { attack: 10 } // 更新消费金额数据, 消费金额
	let setting = Process('yao.form.Setting', 'hero', { name: 'Hero' + data.attack }) // 根据新数值生成配置信息

	return {
		data: data, // 更新消费金额数据, 消费金额
		setting: setting
	}
}
