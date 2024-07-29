'use client'
/* eslint-disable react/no-unescaped-entities */
// components/SpotifyPage.tsx
import { useState } from 'react'
import { Container } from '@/components/Container'
import Image, { StaticImageData } from 'next/image'
import spotifyPlaylistImage from '@/images/spotify-playlist.jpg'
import album1Image from '@/images/album1.jpg'
import album2Image from '@/images/album2.jpg'
import album3Image from '@/images/album3.jpg'
import album4Image from '@/images/album4.jpg'

interface Album {
  id: number
  title: string
  artist: string
  year: number
  image: StaticImageData
  link: string
  description: string
}

const albums: Album[] = [
  {
    id: 1,
    title: 'De Volta Ao Novo - Volume 1',
    artist: 'Jota Quest',
    year: 2023,
    image: album1Image,
    link: 'https://open.spotify.com/album/1aVg4WwzPENRZ46K9cgYcC?si=4iVDEwU5S9qcaaD4tqSyoA',
    description:
      'Após 8 anos, a banda lança um novo álbum com músicas inéditas. Produzido por Rick Bonadio, o álbum traz uma sonoridade mais pop, mas com a mesma pegada groove, principalmente do PJ no baixo. Minhas músicas favoritas desse álbum são "Loco-Loco (Amor Loco)", "Fique Bem" (com participação do Herbert Vianna, dos Paralamas do Sucesso) e "Seguindo Meu Flow". Jota Quest é uma das minhas bandas favoritas no pop brasileiro, e este álbum é bem elaborado. Vale a pena ouvi-lo por uma semana inteira.', // Add a closing double quote here
  },
  {
    id: 2,
    title: 'This Is Why',
    artist: 'Paramore',
    year: 2023,
    image: album2Image,
    link: 'https://open.spotify.com/album/6tG8sCK4htJOLjlWwb7gZB?si=4YTK3RvqTDC6elbg5OPRyw',
    description:
      '"This Is Why" é o primeiro álbum após uma pausa que a banda fez de quase seis anos. Embora o álbum traga uma sonoridade eletrônica, ele ainda mantém a essência do Paramore. Zac Farro, nesse álbum, brinca de tocar bateria, mostrando como ele é versátil. O álbum foi produzido por Carlos de la Garza, conhecido pela banda já. Minhas músicas favoritas desse álbum são "The News," "Big Man, Little Dignity," "You First," "Figure 8," e "Liar."',
  },
  {
    id: 3,
    title: 'Garden Window',
    artist: "O'Brother",
    year: 2011,
    image: album3Image,
    link: 'https://open.spotify.com/album/2aoHaH2GuKZSs24Agr0RZN?si=FE8ubEfDQtCg9KlK-yMNTA',
    description:
      '"Garden Window" é o álbum de estreia da banda O`Brother. A banda é conhecida por misturar rock alternativo, post-rock e elementos de sludge metal, criando um som denso e atmosférico. O álbum foi produzido por Mike Sapone, cuja produção rica e texturizada destaca a intensidade emocional da música. Minhas músicas favoritas desse álbum são "Lo," "Poison!," "Lay Down," "Easy Talk (Open Your Mouth)" e "Bear."',
  },
  {
    id: 4,
    title: 'Live in Texas',
    artist: 'Linkin Park',
    year: 2003,
    image: album4Image,
    link: 'https://open.spotify.com/album/0ZBE7rVC0zKFVt5osvXlnz?si=uanBXw6lQAuhTaoSuhf_6Q',
    description:
      '"Live in Texas" é um álbum ao vivo do Linkin Park, lançado em 18 de novembro de 2003. O álbum captura a energia vibrante das performances da banda durante sua turnê de 2003 em Houston e Dallas, no Texas. Saudades!',
  },
]

export default function SpotifyPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)

  const openModal = (album: Album) => {
    setSelectedAlbum(album)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedAlbum(null)
  }

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
            {albums.map((album) => (
              <li key={album.id}>
                <button
                  onClick={() => openModal(album)}
                  className="w-full text-left"
                >
                  <div className="relative flex items-center gap-4 overflow-hidden rounded-lg bg-zinc-100 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800">
                    <div className="relative h-24 w-24 flex-none">
                      <Image
                        src={album.image}
                        alt={`Álbum ${album.id}`}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                        {album.title}
                      </h3>
                      <p className="text-base text-zinc-600 dark:text-zinc-400">
                        {album.artist}
                      </p>
                      <p className="text-sm">{album.year}</p>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Modal */}
      {isModalOpen && selectedAlbum && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 dark:bg-zinc-800">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {selectedAlbum.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-zinc-900 dark:text-zinc-100"
              >
                &times;
              </button>
            </div>
            <p className="mt-4 text-zinc-600 dark:text-zinc-400">
              {selectedAlbum.description}
            </p>
            <a
              href={selectedAlbum.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block rounded-md bg-green-600 px-4 py-2 text-white"
            >
              Ouvir agora
            </a>
          </div>
        </div>
      )}
    </Container>
  )
}
