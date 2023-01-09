interface IProps {
	__value: string
}

const Index = (props: IProps) => {
      const { __value } = props
      
	if (!__value) return <span>-</span>

	return <span style={{ color: 'red' }}>{__value}</span>
}

export default Index
