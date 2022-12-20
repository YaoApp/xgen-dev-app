function OnChange(info) {
	console.log(info)

	let data = { attack: 10 } // 更新消费金额数据, 消费金额
      let setting = Process('yao.form.Setting', 'hero') // 根据新数值生成配置信息
      
      // 如果setting获取报错，Throw Error，让接口报错

	return {
		data: data, // 更新消费金额数据, 消费金额
		setting: setting
	}
}
