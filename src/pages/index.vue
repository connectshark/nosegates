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
        <div class="col-span-10 md:col-span-5 md:order-2 p-4">
          <div class="rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] bg-primary overflow-hidden aspect-square">
            <img class="object-contain h-full object-bottom w-full" src="../assets/backup/hero.png" alt="nosegates">
          </div>
        </div>
        <div class=" col-start-2 col-span-10 md:col-span-5">
          <h1 class=" text-4xl font-bold leading-loose font-ubuntu">Hi! I'am&nbsp;Chambers</h1>
          <p class="dark:text-white text-gray-500 md:leading-loose mb-5 font-bold">Frontend developer</p>
          <p class="dark:text-white text-gray-500 md:leading-relaxed mb-10">High Level experience in web development knowledge, producing
            quality work.</p>
          <LinkContainer href="#contact">
            Contact Me <i class='bx bx-send'></i>
          </LinkContainer>
        </div>
      </section>
      <SectionContainer title="Vue.js developer" subTitle="I'm a certified Vue.js developer." name="certificate">
        <div class=" max-w-3xl w-4/5 mx-auto">
          <figure class="dark:hidden">
            <img src="../assets/certificate/light.jpg" alt="light certificate">
          </figure>
          <figure class=" hidden dark:block">
            <img src="../assets/certificate/dark.jpg" alt="dark certificate">
          </figure>
          <div class="text-center">
            <p class=" pt-20">
              <a class=" underline" href="https://certificates.dev/vuejs/certificates/9aae9c9c-1198-4f71-97ff-1973dad68d02" target="_blank" rel="noopener noreferrer">View on certificates.dev.<i class='bx bx-link-external'></i></a>
            </p>
          </div>
        </div>
      </SectionContainer>
  
      <SectionContainer title="About me" subTitle="My introduction" name="about">
        <div class=" max-w-5xl w-4/5 mx-auto space-y-10 md:space-x-10 flex items-center justify-center flex-col md:flex-row">
          <figure class="md:w-1/2 scroller-watcher">
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
          <div class="text-center md:text-left">
            <p class="mb-4">
              <LinkContainer href="https://cdn.jsdelivr.net/gh/connectshark/resume@latest/en-Chambers.pdf" class=" inline-block">Download Resume <i class='bx bx-download'></i></LinkContainer>
            </p>
            <p>
              <LinkContainer href="https://cdn.jsdelivr.net/gh/connectshark/resume@latest/tw-Chambers.pdf" class=" inline-block">下載履歷 <i class='bx bx-download'></i></LinkContainer>
            </p>
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
            <a class=" group-even:order-1 md:w-5/12" :href="item.link" target="_blank">
              <BlurImg :src="item.img" />
            </a>
            <div class=" md:w-6/12 py-4">
              <h3 class=" text-primary font-bold text-xl/relaxed font-ubuntu">{{ item.title }}</h3>
              <p class="dark:text-white text-gray-500 mb-5 whitespace-pre-line text-sm">{{ item.description }}</p>
              <p>
                <a :href="item.link" target="_blank" rel="noopener noreferrer" aria-label="Read more about my portfolio" class="hover:opacity-80 transition bg-primary py-2 px-3 rounded-xl text-white inline-block leading-8 mx-2">
                  Demo
                </a>
                <a :href="item.github" target="_blank" aria-label="Read more about my portfolio on github" rel="noopener noreferrer" class="hover:opacity-80 transition bg-primary py-2 px-3 rounded-xl text-white inline-block leading-8 mx-2">
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
            <h2 class="text-2xl font-bold leading-loose tracking-tighter text-white font-ubuntu">You have a new project</h2>
            <p class="text-white mb-10">Contact me now and get a 10% discount on your new project</p>
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
  import DefaultLayout from '../layouts/default.vue'
  import ServiceSection from '../components/serviceSection.vue'
  import SkillsSection from '../components/skillsSection.vue'
  import ContactSection from '../components/contactSection.vue'
  import SectionContainer from '../components/container/sectionContainer.vue'
  import LinkContainer from '../components/container/linkContainer.vue'
  import BlurImg from '../components/blurImg.vue'
  
  
  const portfolio = [
    {
      link: 'https://ai-image-generator-wheat.vercel.app',
      title: 'AIPicker',
      description: `This website serves as an innovative AI-driven graphical platform that enables users to swiftly register and commence their utilization through their Google accounts.\nBy simply inputting a selection of prompts, the AI will autonomously generate suitable images based on the provided content, eliminating the need for any drawing skills or software.`,
      github: 'https://github.com/connectshark/ai-image-picker',
      img: 'https://cdn.jsdelivr.net/gh/connectshark/ai-image-picker@latest/readme/cover.png'
    },
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
    },
    {
      link: 'https://nosegates.com',
      title: 'This website',
      description: 'Just this website.',
      github: 'https://github.com/connectshark/nosegates',
      img: '/__og_image__/og.png'
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

<style src="../assets/css/scroller.css"></style>