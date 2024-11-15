<script>
  import Header from "./lib/Header.svelte"
  import Members from "./lib/Members.svelte"
  import Contact from "./lib/Contact.svelte"
</script>

<main class="bg-ctp-base text-ctp-text min-h-screen">
  <Header />
  <div class="grid md:grid-cols-2 gap-4 p-8 overflow-visible">
    <div class="flex flex-col justify-center items-center text-center">
      <h1 class="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-ctp-peach via-ctp-pink to-ctp-green">
        Building software with lots of 🐱
      </h1>
      <p>...and ❤️ too.</p>
    </div>
    <div>
      <pre class="flex justify-center items-center">
        <span class="font-mono text-2xl text-transparent bg-clip-text bg-gradient-to-br from-ctp-peach via-ctp-pink to-ctp-green font-black">
 /| ､
(°､ ｡ 7
 |､  ~ヽ
 じしf_,)〳

        </span>
      </pre>
    </div>
  </div>
  <Members />
  <Contact />
</main>

