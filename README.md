<a href="https://svelte-fire-toast.surge.sh"><img alt="svelte-fire-toast - Try it out" src="https://raw.githubusercontent.com/ankurrsinghal/svelte-fire-toast/main/src/routes/assets/header.png"/></a>

<br />
<div align="center"><strong>Smoking hot  Notifications for Svelte.</strong></div>
<div align="center"> Lightweight, customizable and beautiful by default.</div>
<br />
<div align="center">
<a href="https://svelte-fire-toast.surge.sh">Website</a> 
<span> · </span>
<a href="https://svelte-fire-toast.surge.sh">Documentation</a> 
<span> · </span>
<a href="https://twitter.com/ankurpsinghal">Twitter</a>
</div>

<br />
<div align="center">
  <sub>Created by <a href="https://twitter.com/ankurpsinghal">Ankur Singhal</a> 👨‍🍳</sub>
</div>

<br />

## Features

- 🔥 **Hot by default**
- 🔩 **Easily Customizable**
- ⏳ **Promise API** - _Automatic loader from a promise_
- 🕊 **Lightweight** - _less than 5kb including styles_
- ✅ **Accessible**

## Installation

#### With yarn

```sh
yarn add svelte-fire-toast
```

#### With NPM

```sh
npm install svelte-fire-toast
```

## Getting Started

Add the Toaster to your app first (entry point +layout.svelte). It will take care of rendering all notifications emitted. Now you can trigger `toast()` or `use:fireAction` from anywhere!

```svelte
<script>
	import { Toaster, toastAction } from 'svelte-fire-toast';
</script>

<Toaster />
<button use:toastAction={'Toasted!'}> Fire </button>
```

## Documentation

Find the full API reference on [official documentation](https://svelte-fire-toast.surge.sh).
