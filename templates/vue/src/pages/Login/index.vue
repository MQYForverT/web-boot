<template>
	<div>
		contents12
		<ElButton type="primary">{{ isCollapse }}</ElButton>
		<mqy-background-layout :isCollapse="getCollapse" @changeProp="handleChange">
			<!--eslint-disable-next-line vue/no-deprecated-slot-attribute-->
			<div slot="body">
				<router-view>
					<template #default="{ Component, route }">
						<transition :name="animateMode" mode="out-in" appear>
							<keep-alive :include="[]">
								<component :is="Component" :key="route.fullPath" />
							</keep-alive>
						</transition>
					</template>
				</router-view>
			</div>
		</mqy-background-layout>
	</div>
</template>

<script setup lang="ts" name="Login">
	// import { ApiGetSendSms } from '@/api/global'
	import { propsEnum } from '@mqy/component-private/dist/BackgroundLayout'

	const { isCollapse, animateMode } = useSettingStore()
	const router = useRouter()

	const { width } = useWindowSize()
	const getCollapse = computed(() => {
		return width.value < 1000 ? true : isCollapse.value
	})

	onMounted(() => {
		// ApiGetSendSms({
		// 	phone: 13349608528,
		// 	type: 1,
		// })
		router.push('/403')
	})

	const handleChange = ({ detail = [] }) => {
		console.log('web1', detail)
		switch (detail[0]) {
			case propsEnum.isCollapse:
				isCollapse.value = Boolean(detail[1])
				break
		}
		// 你的逻辑
	}
</script>
