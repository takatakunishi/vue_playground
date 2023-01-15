module.exports = [
	{
		type:'select',
		name:'atomic',
		message:'Select the component you want to create',
		choices:['atoms', 'molecules', 'organisms', 'pages']
	},
	{
		type:'input',
		name:'component_name',
		message:'input component name',
		validate: (input) => input !== ""
	},
	{
		type:'confirm',
		default:true,
		name:'require_storybook',
		message:'need to make storybook?'
	}
]