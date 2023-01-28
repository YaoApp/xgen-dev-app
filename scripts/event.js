function OnChange(info) {
	console.log(info)

	let data = { attack: 10 } // 更新消费金额数据, 消费金额
	let setting = Process('yao.form.Setting', 'hero') // 根据新数值生成配置信息

	// 如果setting获取报错，Throw Error，让接口报错

	return {
		data: data, // 更新消费金额数据, 消费金额
		setting: {
			actions: [
				{
					action: [
						{
							name: 'Confirm',
							payload: {
								content: '删除后不可撤销！',
								title: '确认删除'
							},
							type: 'Common.confirm'
						},
						{
							name: 'Delete',
							payload: {},
							type: 'Form.delete'
						},
						{
							name: 'Back',
							payload: {},
							type: 'Common.closeModal'
						}
					],
					divideLine: true,
					icon: 'icon-trash-2',
					id: '5a2b59fb74c1c33cf7526f62b405ce4f',
					style: 'danger',
					title: '删除'
				},
				{
					action: [
						{
							name: 'CloseModal',
							payload: {},
							type: 'Common.closeModal'
						}
					],
					icon: 'icon-arrow-left',
					id: '1e83649766949b5a45a7bc273fac3060',
					title: '返回'
				},
				{
					action: [
						{
							name: 'Submit',
							payload: {},
							type: 'Form.submit'
						},
						{
							name: 'Audit',
							payload: {
								args: ['[[$Submit]]'],
								method: 'audit'
							},
							type: 'Service.test'
						},
						{
							name: 'Back',
							payload: {},
							type: 'Common.closeModal'
						}
					],
					icon: 'icon-arrow-up',
					id: 'ac48a858a433f29c911e69c881eeb62e',
					style: 'primary',
					title: '审核'
				},
				{
					action: [
						{
							name: 'Submit',
							payload: {},
							type: 'Form.submit'
						},
						{
							name: 'Back',
							payload: {},
							type: 'Common.closeModal'
						}
					],
					icon: 'icon-check',
					id: 'd6b6346924b1b105050d8fb2ae313cd4',
					showWhenAddAndView: true,
					style: 'primary',
					title: '保存'
				}
			],
			config: {
				full: true
			},
			fields: {
				form: {
					'价格（点券）': {
						bind: 'coupon_price',
						edit: {
							props: {},
							type: 'InputNumber'
						},
						id: '17119d7952055fd5fc40a8a5b300aaeb'
					},
					'价格（金币）': {
						bind: 'gold_price',
						edit: {
							props: {},
							type: 'InputNumber'
						},
						id: '368d30a28ac2bdebc5b71e8845988b6c'
					},
					位置: {
						bind: 'position',
						edit: {
							props: {
								options: [
									{
										label: '上单',
										value: '上单'
									},
									{
										label: '中单',
										value: '中单'
									},
									{
										label: '打野',
										value: '打野'
									}
								]
							},
							type: 'Select'
						},
						id: '34489d6fd8191dcefa6c3178e4c272d6'
					},
					列表: {
						bind: 'json_1',
						edit: {
							props: {
								hasChildren: true,
								name: 'test'
							},
							type: 'List'
						},
						id: '943c9f827fea0b1dc49fa86c797d9ae4'
					},
					别名: {
						bind: 'alias',
						edit: {
							props: {},
							type: 'Input'
						},
						id: 'feb8ed5538042413f7eaa603ffd91ec9'
					},
					名称: {
						bind: 'name',
						edit: {
							props: {},
							type: 'Input'
						},
						id: 'ff5c0057972425a974e39bd7ae791028'
					},
					头像: {
						bind: 'avatar',
						edit: {
							props: {
								api: '/api/__yao/form/hero/upload/fields.form.%E5%A4%B4%E5%83%8F.edit.props/api',
								filetype: 'image'
							},
							type: 'Upload'
						},
						id: '8faefd5e387c32d01b9921d5d8ff0324'
					},
					描述: {
						bind: 'desc',
						edit: {
							props: {
								UploadByFileApi: '/api/UploadByFileApi',
								UploadByUrlApi: '/api/UploadByUrlApi'
							},
							type: 'RichText'
						},
						id: 'b038d86f7a73857ab2b56dfd000ae0ee'
					},
					操作难度: {
						bind: 'difficulty',
						edit: {
							props: {},
							type: 'InputNumber'
						},
						id: '6a01d849ca0267dc0b19811e6ae2df10'
					},
					昵称: {
						bind: 'title',
						edit: {
							props: {},
							type: 'Input'
						},
						id: '0a4a894f4c80f1708def746d6bba7dea'
					},
					物理伤害: {
						bind: 'attack',
						edit: {
							props: {},
							type: 'InputNumber'
						},
						id: 'e452e2741a5a102e17a4d9a8c3082422'
					},
					角色: {
						bind: 'roles',
						edit: {
							props: {
								mode: 'multiple',
								xProps: {
									remote: {
										api: '/api/__yao/form/hero/component/fields.form.%E8%A7%92%E8%89%B2.edit.props.xProps/remote',
										params: {
											label: 'name',
											model: 'role',
											value: 'type'
										}
									}
								}
							},
							type: 'Select'
						},
						id: 'f090b5da4c96e45c5ebb9a9347250097'
					},
					防御能力: {
						bind: 'defense',
						edit: {
							props: {},
							type: 'InputNumber'
						},
						id: 'a355ccf455c39da863b61270c58fccb9'
					},
					魔法伤害: {
						bind: 'magic',
						edit: {
							props: {},
							type: 'InputNumber'
						},
						id: '4cf14573302fb4d66ada98a2210859e7'
					}
				}
			},
			form: {
				sections: [
					{
						columns: [
							{
								name: '名称',
								width: 12
							},
							{
								name: '别名',
								width: 12
							},
							{
								name: '角色',
								width: 12
							},
							{
								name: '位置',
								width: 12
							}
						]
					}
				]
			},
			hooks: {
				onChange: {
					名称: {
						api: '/api/__yao/form/hero/component/fields.form.%E5%90%8D%E7%A7%B0.edit.props/on%3Achange',
						params: {
							extra: '开发者定义数据'
						}
					}
				}
			},
			name: 'Hero Form',
			primary: 'id'
		}
	}
}
