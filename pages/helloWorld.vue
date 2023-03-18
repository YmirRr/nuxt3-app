<template>
  <div>
    <h2>Hello World Page</h2>
		<NuxtLayout name="custom">
			<template #title>
				<h3>标题插槽内容</h3>
			</template>
			<template #detail>
				<p>详情插槽内容</p>
			</template>
		</NuxtLayout>
  </div>
</template>
