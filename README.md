# Tailwind Tutorial and Nike Clone

- The below code is the basic tailwind crash course with some explanations as on comments. copy and paste the below code in tailwind play website on the browser

<main class="p-5">
  <h1 class="text-center text-lg text-blue-600">Hello world</h1>

  <div class="my-4 h-20 w-full rounded-md border-2 border-violet-700 bg-violet-400 p-2">
    <p class="mt-3 text-center font-mono text-lg font-extrabold">A div</p>
  </div>
  <!-- postion fixed in tailwind css -->
  <div class="fixed top-1 h-10 w-10 bg-red-500"></div>

  <!-- flex in tailwind css -->
  <div class="flex justify-between space-x-10">
    <div class="h-16 w-16 rounded-full bg-blue-700"></div>
    <div class="h-16 w-16 rounded-full bg-blue-700"></div>
    <div class="h-16 w-16 rounded-full bg-blue-700"></div>
  </div>

  <div class="mt-5 grid grid-cols-5 gap-2">
    <div class="h-8 bg-blue-500"></div>
    <div class="h-8 bg-blue-500"></div>
    <div class="h-8 bg-blue-500"></div>
    <div class="h-8 bg-blue-500"></div>
    <div class="h-8 bg-blue-500"></div>
  </div>

  <!-- media queries in tailwind -->

  <!-- break point will be the min-width of the screen -->
  <div class="hidden sm:block">
    <p>I will only be seen when the width > 768px</p>
  </div>

  <!-- max will keep breakpoint as max-width of the screen -->
  <div class="hidden max-sm:block">
    <p>I will only be seen when the width <= 768px</p>
  </div>
  <button class="m-1 rounded-md bg-blue-800 p-2 text-white hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-600 active:bg-blue-900">
    <!-- focus and active will reflect the changes when clicked on a button -->
    Click me
  </button>

  <ul class="space-y-2 text-center">
    <li class="p-2 first:bg-yellow-300">item 1</li>
    <li class="p-2 first:bg-yellow-300 odd:bg-blue-500 even:bg-green-500">item 1</li>
    <li class="p-2 first:bg-yellow-300 odd:bg-blue-500 even:bg-green-500">item 1</li>
    <li class="p-2 first:bg-yellow-300 odd:bg-blue-500 even:bg-green-500">item 1</li>
    <li class="p-2 first:bg-yellow-300 odd:bg-blue-500 even:bg-green-500">item 1</li>
  </ul>

  <!-- ring provided outline for the div -->
  <div class="my-3  rounded-lg bg-white p-4 shadow-xl ring-1 ring-slate-500/5 dark:bg-slate-600">
    <!-- tracking will provide letter spacing -->
    <p class="text-base font-medium tracking-tight text-slate-900">This is a text element</p>
    <p class="mt-2 text-sm text-slate-500">This is also a text element</p>
    <button id="toggleDark" class="my-2 rounded bg-gray-300 p-2 text-sm font-medium hover:bg-gray-100 ring-2 ring-gray-300"  onclick="document.body.classList.toggle('dark')">Toggle Dark Mode</button>
  </div>
</main>



