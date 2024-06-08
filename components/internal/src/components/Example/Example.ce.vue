<template>
	<div class="vx-example">
		<div>{{ title }}</div>
		<ElButton type="primary" @click="onClick">{{ num }}</ElButton>
		<ElTable :data="tableData" border style="width: 100%">
			<ElTableColumn prop="date" label="Date" width="180" />
			<ElTableColumn prop="name" label="Name" width="180" />
			<ElTableColumn prop="address" label="Address" />
		</ElTable>
	</div>
</template>

<script setup lang="ts">
	import { ElButton, ElTable, ElTableColumn } from 'element-plus'

	withDefaults(defineProps<{ title: string }>(), { title: 'title' })

	const emits = defineEmits<{
		(eventName: 'testEvent', val: number): void
	}>()

	const num = ref(0)

	const tableData = reactive([
		{
			date: '2016-05-03',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-02',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-04',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
		{
			date: '2016-05-01',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		},
	])

	const onClick = () => {
		num.value++
		tableData.push({
			date: '2016-05-0' + num.value,
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
		})
		emits('testEvent', num.value)
	}
</script>

<style>
	@unocss-placeholder;
</style>
<style lang="scss">
	@use 'element-plus/theme-chalk/src/button.scss';
	@use 'element-plus/theme-chalk/src/table.scss';
	@use './Example.scss';
</style>
