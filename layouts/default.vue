<template>
  <div>
    <Header />
    <Cart />
    <Sidebar />
    <main class="container">
      <Nuxt />
    </main>
  </div>
</template>

<style>
html {
  font-family: "PT Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  position: absolute;
  width: 1104px;
  height: 848px;
  left: calc(50% - 472px);
  top: 163px;
}
a.nuxt-link-active,
a.nuxt-link-active:hover {
  color: #1f1f1f;
  text-decoration: underline;
}
</style>
