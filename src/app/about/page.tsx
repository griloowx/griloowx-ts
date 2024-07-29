import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/astronaut.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Eu sou Jhonnyssom Silva. Eu moro em Curitiba e sou desenvolvedor de front-end.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Sobre mim:
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Eu sou Jhonnyssom Silva, também conhecido como Grilo. Sou pai da
              pequena Mariana e estou casado com a Bruna há nove anos. Juntos,
              formamos uma família muito feliz, sempre aprendendo algo novo um
              com o outro, o que nos mantém alegres e unidos.
            </p>
            <p>
              Atualmente, trabalho como desenvolvedor front-end na Nivello
              Tecnologia, a empresa que me deu minha primeira oportunidade na
              área de desenvolvimento. Aqui, tenho o privilégio de colaborar com
              pessoas maravilhosas que estão comprometidas em evoluir a cada
              dia, oferecendo suporte e conselhos que me ajudam a crescer como
              profissional. Tem sido uma experiência incrível.
            </p>
            <p>
              Mantenho uma vida organizada e me dedico a praticar esportes, como
              ciclismo e corrida de rua, ao longo da semana. Meu objetivo é
              preservar minha saúde para garantir uma vida longa, realizar meus
              sonhos e alcançar meus objetivos.
            </p>
            <p>
              Adoro escrever e compartilhar minhas ideias, invenções e
              novidades. Sou apaixonado por séries, e a minha favorita é, sem
              dúvida, <strong>D A R K</strong>. Além disso, tenho um grande
              interesse por tudo relacionado ao espaço, à lua, aos astronautas e
              afins. Também amo música, ouvir podcasts e valorizo a ideia de
              minimalismo. Considero-me uma pessoa divertida, protetora e, acima
              de tudo, grata pela vida.
            </p>
            <p>Bem-vindo ao meu espaço!</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/griloowx" icon={XIcon}>
             Meu `X` twitter
            </SocialLink>
            <SocialLink
              href="https://instagram.com/griloowx"
              icon={InstagramIcon}
              className="mt-4"
            >
             Meu Instagram
            </SocialLink>
            <SocialLink
              href="https://github.com/griloowx"
              icon={GitHubIcon}
              className="mt-4"
            >
             Meu GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/jhonnyssomsilva"
              icon={LinkedInIcon}
              className="mt-4"
            >
             Meu LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:jhonnyssomux@icloud.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jhonnyssomux@icloud.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
