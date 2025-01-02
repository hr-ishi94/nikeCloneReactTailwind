# NIKE CLONE USING REACT AND TAILWIND CSS

## <a name="tech-stack">⚙️ Tech Stack</a>

- Tailwind CSS
- React.js

## <a name="features">🔋 Features</a>

👉 **Maximizing Tailwind CSS**: Discover tips and tricks to make the most out of Tailwind CSS.

👉 **Understanding Tailwind Internals**: Dive into the inner workings of Tailwind, gaining insights into its structure and optimizations.

👉 **Best Practices**: Learn Tailwind's best practices for efficient and maintainable code.

👉 **Theming**:Explore techniques to add different themes to your website using Tailwind CSS.

👉 **JavaScript-like Tasks with Tailwind**: Discover how Tailwind CSS can be used to achieve tasks that typically require JavaScript code

while building a beautiful Nike Website with a,

👉 **Complex Hero Section**: A visually appealing hero section showcasing key elements.

👉 **Popular Products Showcase**: A section highlighting popular Nike products

👉 **About Us Section**: An informative "About Us" section with a unique design.

👉 **Special Offers**: Showcase special offers in an eye-catching manner

👉 **Testimonials**: A testimonials section for a captivating user experience

👉 **Newsletter Integration**: A newsletter section with Tailwind styling, encouraging user engagement

👉 **Footer**: A comprehensive footer section containing various links

👉 **Mobile Responsive**: The entire website is responsive across various devices, emphasizing Tailwind's mobile-friendly capabilities.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)




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



