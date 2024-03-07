System.register(['react/jsx-runtime'], (function (exports) {
	'use strict';
	var jsx;
	return {
		setters: [function (module) {
			jsx = module.jsx;
		}],
		execute: (function () {

			const Index = exports('default', (props)=>{
			    const { __value  } = props;
			    if (!__value) return /*#__PURE__*/ jsx("span", {
			        children: "-"
			    });
			    return /*#__PURE__*/ jsx("span", {
			        style: {
			            color: 'red'
			        },
			        children: __value
			    });
			});

		})
	};
}));
