module.exports = {
	base: '/note/',
	themeConfig: {
		nav: [
			{ text: 'home', link: '/' },
			{ text: 'mini-vue', link: '/vue/' }
			// { text: 'External', link: 'https://google.com' }
		],
		sidebar: {
			'/vue/': [
				{
					title: 'vue面试题',
					children: [{ title: 'vue面试题', path: 'interview/vue响应式原理' }]
				},
				{
					title: 'mini-vue',
					children: [{ title: 'mini-vue学习记录', path: 'mini-vue/mini-vue学习笔记' }]
				}
			]
		}
	},
	plugins: ['vuepress-plugin-mermaidjs']
}
