import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
  const navigationOpen = useSignal(false);
  const stickyMenu = useSignal(false);

  useOnWindow(
    "scroll",
    $(() => {
      stickyMenu.value = window.scrollY >= 80;
    }),
  );

  return (
    <header
      class={`z-99999 fixed left-0 top-0 w-full py-7 ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div class="max-w-c-1390 relative mx-auto items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div class="flex w-full items-center justify-between xl:w-1/4">
          <Link href="/">
            <img
              src="/images/logo/logo-dark.svg"
              alt="logo"
              width={119.03}
              height={30}
              class="hidden w-full dark:block"
            />
            <img
              src="/images/logo/logo-light.svg"
              alt="logo"
              width={119.03}
              height={30}
              class="w-full dark:hidden"
            />
          </Link>

          <button
            aria-label="hamburger Toggler"
            class="block xl:hidden"
            onClick$={() => {
              navigationOpen.value = !navigationOpen.value;
            }}
          >
            <span class="h-5.5 w-5.5 relative block cursor-pointer">
              <span class="absolute right-0 block h-full w-full">
                <span
                  class={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  class={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  class={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
              <span class="du-block absolute right-0 h-full w-full rotate-45">
                <span
                  class={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-[0]" : "h-full"
                  }`}
                ></span>
                <span
                  class={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!h-0 delay-200" : "h-0.5"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        <div
          class={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar p-7.5 shadow-solid-5 dark:bg-blacksection !visible mt-4 h-auto max-h-[400px] rounded-md bg-white xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          {/*<HeaderNav />*/}

          <div class="mt-7 flex items-center gap-6 xl:mt-0">
            {/*<ThemeToggler />*/}

            <Link
              href="#"
              class="text-regular text-waterloo hover:text-primary font-medium"
            >
              GitHub Repo 🌟
            </Link>

            <Link
              href="#"
              class="bg-primary px-7.5 text-regular hover:bg-primaryho flex items-center justify-center rounded-full py-2.5 text-white duration-300 ease-in-out"
            >
              Get Pro 🔥
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
});
