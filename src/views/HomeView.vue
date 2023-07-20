<template>
<DefaultLayout>
  <main>
    <section id="home" class="mx-auto container grid grid-cols-12 gap-2 pt-5 mb-20 items-center">
      <div class="col-span-2 grid place-items-center md:col-span-1">
        <div class=" space-y-4" v-once>
          <a v-for="btn in socials" :key="btn.icon" class=" block text-primary" :href="btn.link" target="_blank" rel="noopener noreferrer">
            <i class='bx text-3xl' :class="btn.icon"></i>
          </a>
        </div>
      </div>
      <div class=" col-span-10 md:col-span-5 md:order-2">
        <div class="rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-primary overflow-hidden aspect-square">
          <img class=" object-contain object-top w-full" src="../assets/backup/hero.png" alt="">
        </div>
      </div>
      <div class=" col-start-2 col-span-10 md:col-span-5">
        <h1 class=" text-4xl font-bold leading-loose">Hi! I'am&nbsp;Chambers</h1>
        <p class="dark:text-white text-gray-500 md:leading-loose mb-5">Frontend developer</p>
        <p class="dark:text-white text-gray-500 md:leading-relaxed mb-10">High Level experience in web development knowledge, producing
          quality work.</p>
        <LinkContainer href="#contact">
          Contact Me <i class='bx bx-send'></i>
        </LinkContainer>
      </div>
    </section>

    <SectionContainer title="About me" subTitle="My introduction" name="about">
      <div class=" max-w-5xl w-4/5 mx-auto space-y-10 md:space-x-10 flex items-center justify-center flex-col md:flex-row">
        <figure ref="target" :class="[
          { 'translate-y-0 blur-none scale-100': isSectionShow },
          { 'blur-xl translate-y-5 scale-50': !isSectionShow }
        ]" class="md:w-1/2 duration-1000 transition-all ease-in-out">
          <img class="rounded-2xl object-fill max-w-xs mx-auto" loading="lazy" src="../assets/hero.jpeg" alt="hero">
        </figure>
        <div class="md:w-1/2 space-y-10">
          <p class="text-gray-500 dark:text-gray-300">Web developer, with extensive knowledge and years of experience, working in web
            technologies and delivering quality work.</p>
          <ul class="w-full flex items-center justify-center" v-once>
            <li class=" text-center w-1/3" v-for="(item, i) in experience" :key="i">
              <p class=" text-2xl font-bold leading-relaxed">{{ item.number }}+</p>
              <p class=" text-gray-500 dark:text-gray-300">{{ item.content }}</p>
              <p class=" text-gray-500 dark:text-gray-300">{{ item.last }}</p>
            </li>
          </ul>
        <div class=" text-center md:text-left">
          <LinkContainer href="https://cdn.jsdelivr.net/gh/connectshark/resume@latest/%E8%91%89%E6%81%A9%E9%A8%B0resume.pdf" class=" inline-block">
            Download Resume <i class='bx bx-download'></i>
          </LinkContainer>
        </div>
        </div>
      </div>
    </SectionContainer>

    <SectionContainer title="Skills" subTitle="My technical collection" name="skills">
      <SkillsSection/>
    </SectionContainer>
    <SectionContainer title="Services" subTitle="What I offer" name="services">
      <ul class=" w-5/6 mx-auto max-w-3xl grid grid-cols-2 grid-rows-1 gap-6">
        <ServiceSection v-once v-for="item in services" :key="item.icon"
          :title="item.title"
          :icon="item.icon"
          :description="item.description"
        />
      </ul>
    </SectionContainer>
    <SectionContainer title="Portfolio" subTitle="Most recent work" name="portfolio">
      <div class="mx-auto relative max-w-4xl px-10">
        <div v-once v-for="item in portfolio" :key="item.link" class="p-5 md:pb-20 md:flex md:justify-between items-center group">
          <a class=" group-even:order-1 md:w-5/12" :href="item.link">
            <img class="object-cover shadow-lg rounded-lg group-even:md:shadow-[.5rem_.5rem_.9rem_#a3a3a3] group-odd:md:shadow-[-.5rem_.5rem_.9rem_#a3a3a3]" :src="item.img" alt="image1">
          </a>
          <div class=" md:w-6/12 p-4">
            <h3 class=" text-primary leading-loose font-bold text-2xl">{{ item.title }}</h3>
            <p class="dark:text-white text-gray-500 mb-5">{{ item.description }}</p>
            <p>
              <a :href="item.link" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition bg-primary py-2 px-3 rounded-xl text-white inline-block leading-8 mx-2">
                Demo
              </a>
              <a :href="item.github" target="_blank" rel="noopener noreferrer" class="hover:opacity-80 transition bg-primary py-2 px-3 rounded-xl text-white inline-block leading-8 mx-2">
                <i class='bx bxl-github text-2xl align-middle'></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>

    <section class="mb-20 py-10 lg:scroll-m-20">
      <div class=" max-w-4xl w-5/6 rounded-3xl mx-auto bg-gradient-to-r from-primary to-primary/70 p-10 lg:flex dark:bg-black dark:bg-none  transition">
        <div class=" lg:w-4/6 mb-5 lg:mb-0">
          <h2 class="text-2xl font-bold leading-loose tracking-tighter text-white">You have a new project</h2>
          <p class="text-white mb-10 tracking-tighter">Contact me now and get a 10% discount on your new project</p>
          <a class="hover:opacity-80 dark:bg-primary dark:text-white p-4 rounded-xl text-primary bg-white" href="#contact">
            Contact Me <i class='bx bx-send'></i>
          </a>
        </div>
        <div class="lg:w-2/6 bg-[url('/s4.png')] py-40 lg:p-30  lg:ml-0 -lg:mt-10 -mb-10 -mx-10 bg-no-repeat bg-contain bg-bottom" ></div>
      </div>
    </section>
    <SectionContainer title="Contact Me" subTitle="Get in touch" name="contact">
      <ContactSection />
    </SectionContainer>
  </main>
</DefaultLayout>
</template>

<script setup>
import { ref } from 'vue'
import DefaultLayout from '../layouts/default.vue'
import ServiceSection from '../components/serviceSection.vue'
import SkillsSection from '../components/skillsSection.vue'
import ContactSection from '../components/contactSection.vue'
import SectionContainer from '../components/container/sectionContainer.vue'
import LinkContainer from '../components/container/linkContainer.vue'
import { useIntersectionObserver } from '@vueuse/core'


const target = ref(null)
const isSectionShow = ref(false)

useIntersectionObserver(
  target,
  ([{ isIntersecting }]) => {
    isSectionShow.value = isIntersecting
  },
  { rootMargin: '-20px 0px -20px 0px' }
)

const portfolio = [
  {
    link: 'https://www.npmjs.com/package/prodia-ai',
    title: 'Prodia-AI npm package',
    description: `Your gateway to seamless Prodia API integration. This GitHub repository simplifies accessing Prodia's APIs, offering a user-friendly interface for effortless integration.`,
    github: 'https://github.com/connectshark/prodia-ai',
    img: '/portfolio/prodiai.png'
  },
  {
    link: 'https://connectshark.github.io/ip-address-tracker/#/',
    title: 'IP address tracker',
    description: 'This project can query IP addresses and display the current IP address on a map, and also query the location of a specific IP address on the map.',
    github: 'https://github.com/connectshark/ip-address-tracker',
    img: '/portfolio/ipaddresstracker.png'
  },
  {
    link: 'https://connectshark.github.io/interactive-card-details-form-solution/#/',
    title: 'Interactive card details form',
    description: `This project dynamically displays the currently entered credit card information and checks if the user's input information is correct.`,
    github: 'https://github.com/connectshark/interactive-card-details-form-solution',
    img: '/portfolio/Interactive-card-details.png'
  },
  {
    link: 'https://connectshark.github.io/countries-with-color-theme-switcher-solution/#/',
    title: 'REST Countries API with color theme switcher',
    description: 'This project integrates a national flag API, allowing users to filter and display countries by region and search for information about a single country. Additionally, the project includes a dark mode feature.',
    github: 'https://github.com/connectshark/countries-with-color-theme-switcher-solution',
    img: '/portfolio/countries.png'
  },
  {
    link: 'https://connectshark.github.io/multi-steps-form-solution/#/',
    title: 'Multi Steps Form',
    description: 'This project demonstrates a multi-step form demo, where users need to fill out each form accurately before proceeding to the next step. The project also includes a responsive design.',
    github: 'https://github.com/connectshark/multi-steps-form-solution',
    img: '/portfolio/multiples.png'
  },
  {
    link: 'https://connectshark.github.io/battery-level-panel/',
    title: 'Battery Level Panel',
    description: 'The project utilizes the Battery API to display the battery status of the device. Additionally, it includes a custom battery feature that allows users to view the battery changes across different battery levels.',
    github: 'https://github.com/connectshark/battery-level-panel',
    img: '/portfolio/battery.png'
  },
  {
    link: 'https://shopee.nosegates.com/',
    title: 'Shopee Hero',
    description: 'This project allows users to generate a Shopee-specific short URL by pasting a Shopee URL. The backend was developed using NodeJS and integrated with the official Shopee GraphQL API, while the frontend was developed using the Vue framework.',
    github: 'https://github.com/connectshark/shopee-short-link',
    img: '/portfolio/shopeehero.png'
  },
  {
    link: 'https://connectshark.github.io/responsive-coffee-website/index.html',
    title: 'Responsive coffee website',
    description: 'This project involves slicing and coding a coffee website, and implementing a responsive design.',
    github: 'https://github.com/connectshark/responsive-coffee-website',
    img: '/portfolio/coffeewebsite.png'
  },
  {
    link: 'https://connectshark.github.io/responsive-gym-website/index.html',
    title: 'Responsive gym website',
    description: 'This project involves slicing and coding a fitness center website, and implementing a responsive design.',
    github: 'https://github.com/connectshark/responsive-gym-website',
    img: '/portfolio/gymwebsite.png'
  }
]

const services = [
  {
    icon: 'bx-code-alt',
    title: 'Frontend Developer',
    description: ['Web page development', 'Build responsive sites', 'I develop the user interface']
  },
  {
    icon: 'bx-data',
    title: 'Full-Stack Developer',
    description: ['Web API development', 'OAuth 2.0 login', 'JWT access token']
  }
]

const experience = [
  {
    number: '04',
    content: 'Years',
    last: 'experience'
  },
  {
    number: '50',
    content: 'Completed',
    last: 'projects'
  },
  {
    number: '03',
    content: 'Companies',
    last: 'worked'
  }
]
const socials = [
  {
    link: 'https://github.com/connectshark',
    icon: 'bxl-github'
  },
  {
    link: 'https://www.linkedin.com/in/%E6%81%A9%E9%A8%B0-%E8%91%89-935867189/',
    icon: 'bxl-linkedin'
  }
]
</script>