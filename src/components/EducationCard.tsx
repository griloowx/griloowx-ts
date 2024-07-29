// components/EducationCard.tsx
import { type ImageProps } from 'next/image'
import Image from 'next/image'

interface EducationCardProps {
  institution: string
  degree: string
  logo: ImageProps['src']
  start: string
  end: string
}

export function EducationCard({
  institution,
  degree,
  logo,
  start,
  end
}: EducationCardProps) {
  return (
    <div className="flex gap-4 items-center border border-zinc-200 rounded-lg p-4 dark:border-zinc-700 dark:border-zinc-700/40 text-sm-common">
      <div className="relative h-14 w-14 flex-none">
        <Image src={logo} alt="" layout="fill" objectFit="contain" />
      </div>
      <div>
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {institution}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">{degree}</p>
        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          {start} - {end}
        </p>
      </div>
    </div>
  )
}
