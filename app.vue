<template>
  <div>
    <NuxtLayout>
      <h2>Nuxt3 app</h2>
      <NuxtLink to="/">home</NuxtLink> |
      <NuxtLink to="/about">about</NuxtLink> |
      <NuxtLink to="/user-admin/1">user-admin-1</NuxtLink> |
      <NuxtLink to="/parent">parent</NuxtLink> |
      <NuxtLink to="/parent/child">parent/child</NuxtLink> |
      <NuxtLink to="/helloWorld">helloWorld</NuxtLink>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
