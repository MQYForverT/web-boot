<template>
	<mqy-defaults>
		<div slot="logo">
			<slot name="logo" />
		</div>
		<div slot="body">
			<slot name="body" />
		</div>
	</mqy-defaults>
</template>
<script setup lang="ts">
	import { defineCustomElement } from 'vue'
	import type { changeProp, LayoutEmits } from './BackgroundLayout'
	import { propsEnum, layoutProps, propsKey, changePropKey } from './BackgroundLayout'
	import defaults from './component/Main/default.vue'

	const defaultsElement = defineCustomElement(defaults)
	customElements.define('mqy-defaults', defaultsElement)

	const props = defineProps(layoutProps)
	const proxyProps = new Proxy(props, {
		get(target, propKey, receiver) {
			let value = Reflect.get(target, propKey, receiver)
			switch (propKey) {
				case propsEnum.isDrawer:
				case propsEnum.isMobile:
				case propsEnum.isCollapse:
				case propsEnum.isAllOpen:
				case propsEnum.isUniqueOpened:
				case propsEnum.isFixedHeader:
				case propsEnum.isBreadcrumb:
				case propsEnum.isBreadcrumbIcon:
				case propsEnum.isTagsView:
				case propsEnum.isTagsViewIcon:
				case propsEnum.isCacheTagsView:
				case propsEnum.isSortableTagsView:
				case propsEnum.isShareTagsView:
				case propsEnum.isWatermark:
				case propsEnum.isFooter:
					value = Boolean(value)
					break
				case propsEnum.tagsShowNum:
					value = Number(value)
					break
				case propsEnum.menuList:
					value = JSON.parse(value)
					break
			}
			return value
		},
	})
	provide(propsKey, proxyProps)

	const emits = defineEmits<LayoutEmits>()
	const changeProp: changeProp = (prop, value) => {
		emits('changeProp', prop, value)
	}
	provide(changePropKey, changeProp)
</script>
