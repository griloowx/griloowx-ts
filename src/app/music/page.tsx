/* eslint-disable react/no-unescaped-entities */
// components/SpotifyPage.tsx
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import Image from 'next/image'
import spotifyPlaylistImage from '@/images/spotify-playlist.jpg'
import album1Image from '@/images/album1.jpg'
import album2Image from '@/images/album2.jpg'
import album3Image from '@/images/album3.jpg'
import album4Image from '@/images/album4.jpg'

export default function SpotifyPage() {
  return (
    <Container className="mt-16 lg:mt-32">
      <div className="mx-auto max-w-2xl">
        <header className="flex flex-col">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Spotify
          </h1>
          <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
            Aqui estão minhas recomendações de música do mês, incluindo a
            playlist principal e álbuns que estou curtindo.
          </p>
        </header>
        <section className="mt-8">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Playlist do Mês
          </h2>
          <a
            href="https://open.spotify.com/playlist/74P17AkGH1nVUE6237U9hM?si=a36bba08e04b43ae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative mt-4 h-64 overflow-hidden rounded-lg bg-zinc-100 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
              <Image
                src={spotifyPlaylistImage}
                alt="Playlist do Mês"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <span className="text-lg font-semibold text-white">
                  Ouça a Playlist
                </span>
              </div>
            </div>
          </a>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
            Álbuns do Mês
          </h2>
          <ul className="mt-4 space-y-8">
            <li>
              <a
                href="https://open.spotify.com/album/1aVg4WwzPENRZ46K9cgYcC?si=4iVDEwU5S9qcaaD4tqSyoA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative flex items-center gap-4 overflow-hidden rounded-lg bg-zinc-100 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
                  <div className="relative h-24 w-24 flex-none">
                    <Image
                      src={album1Image}
                      alt="Album 1"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      De Volta Ao Novo - Volume 1
                    </h3>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      Jota Quest
                    </p>
                    <p className="text-sm">2023</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/album/6tG8sCK4htJOLjlWwb7gZB?si=4YTK3RvqTDC6elbg5OPRyw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative flex items-center gap-4 overflow-hidden rounded-lg bg-zinc-100 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
                  <div className="relative h-24 w-24 flex-none">
                    <Image
                      src={album2Image}
                      alt="Álbum 2"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      This Is Why
                    </h3>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      Paramore
                    </p>
                    <p className="text-sm">2023</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/album/2aoHaH2GuKZSs24Agr0RZN?si=FE8ubEfDQtCg9KlK-yMNTA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative flex items-center gap-4 overflow-hidden rounded-lg bg-zinc-100 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
                  <div className="relative h-24 w-24 flex-none">
                    <Image
                      src={album3Image}
                      alt="Álbum 3"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      Garden Window
                    </h3>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      O'Brother
                    </p>
                    <p className="text-sm">2011</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://open.spotify.com/album/0ZBE7rVC0zKFVt5osvXlnz?si=uanBXw6lQAuhTaoSuhf_6Q"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative flex items-center gap-4 overflow-hidden rounded-lg bg-zinc-100 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
                  <div className="relative h-24 w-24 flex-none">
                    <Image
                      src={album4Image}
                      alt="Album 4"
                      layout="fill"
                      objectFit="cover"
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      Live in Texas
                    </h3>
                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                      Linkin Park
                    </p>
                    <p className="text-sm">2003</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Container>
  )
}
