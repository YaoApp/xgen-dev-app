const MaxTokens = 2048

const test_reply = ['kaksdkaskdkas']

function chat(content, context, token) {
	console.log(content, context, token)

	let cfg = setting()
	let url = `${cfg.host}/v1/chat/completions`
	let paylad = { model: cfg.model, messages: [{ role: 'user', content }], user: 'yao' }

	return stream(url, paylad, cfg.key, (data) => {
		const real_data = data.replace('data: ', '')

		if (data.indexOf('[DONE]') !== -1) {
			ssEvent('message', {
				actions: [
					{
						name: 'SearchTable',
						type: 'Table.search',
						payload: {}
					},
					{
						name: 'HistoryPush',
						type: 'Common.historyPush',
						payload: {
							pathname: '/x/Form/hero/1/edit'
						}
					}
				],
				confirm: true,
                        done: true
			})

			return 0
		}

		if (real_data.indexOf(`"delta":{"content"`) !== -1) {
			const formated_data = JSON.parse(real_data)
			const text = formated_data.choices[0].delta.content

			ssEvent('message', {
				text
			})
		}

		return 1
	})
}

function stream(url, payload, key, cb) {
	payload['stream'] = true
	let response = http.Stream('POST', url, cb, payload, null, {
		Authorization: `Bearer ${key}`,
		'Content-Type': 'application/json; charset=utf-8'
	})

	if (response.code != 200) {
		let data = response.data || {}
		let err = data.error || {}
		let message = err.message || 'unknown error'
		log.Error(`OpenAI API error ${message}`)
		throw new Exception(`OpenAI API error ${message}`, response.code || 500)
	}

	return response.data
}

function setting() {
	let vars = Process('utils.env.GetMany', 'OPENAI_MODEL', 'OPENAI_KEY', 'OPENAI_PROXY', 'OPENAI_MODEL_EMBEDDING')

	return {
		model: vars['OPENAI_MODEL'] || 'gpt-3.5-turbo',
		model_embedding: vars['OPENAI_MODEL_EMBEDDING'] || 'text-embedding-ada-002',
		key: vars['OPENAI_KEY'],
		host: vars['OPENAI_PROXY'] ? vars['OPENAI_PROXY'] : 'https://api.openai.com'
	}
}
