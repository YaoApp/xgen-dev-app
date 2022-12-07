function OnChange(query) {
	query = query || {}
	field = query.field // 字段名称
	newVal = query.value // 新数值
	oldVal = query.old // 原始值
	extra = query.extra // 开发者定义数据

	let data = { attack: 10 } // 更新消费金额数据, 消费金额
      let setting = Process('yao.form.Setting', 'hero', data) // 根据新数值生成配置信息
      
	return {
		data: data, // 更新消费金额数据, 消费金额
		setting: setting
	}
}
