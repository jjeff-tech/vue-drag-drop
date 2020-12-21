<template>
  <div id="app">
    <nav class="navbar navbar-white bg-info navbar-expand-lg px-4 border-bottom">
      <router-link to="/"><span class="navbar-brand mb-0 h1 text-white">Navbar</span></router-link>
      <div class="flex-grow-1"></div>
      <div class="navbar-nav">
        <router-link class="nav-item nav-link text-white" to="/">Home</router-link>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style>
.clickable {
  cursor: grab;
}

.full-height {
  min-height: calc(100vh - 57px);
}

.dropzone {
  padding: 1em 1em 0 1em;
  background: #f8f9fa;
  border: dashed 4px #ddd;
  border-radius: 3px;
}

.dropzone h3 {
  text-align: center;
  color: #ccc;
}

.fixed {
  position: fixed;
}

.bottom {
  bottom: 0;
  right: 0;
  left: 0;
}

body #toast-container > div {
  opacity: 1;
}
</style>
