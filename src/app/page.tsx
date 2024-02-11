import Image from 'next/image';
import Link from 'next/link';

import avatarOnChairPng from '~/svg/avatar-on-chair.svg';
import logoPng from '~/img/logo.png';

export default function Home() {
  return (
    <div className="max-w-screen-3xl mx-auto grid h-screen grid-cols-12 overflow-hidden">
      <div className="order-3 hidden flex-col gap-4 py-8 pr-1 md:col-span-2 md:flex md:text-xl lg:pr-4">
        <nav className="flex flex-col gap-4 text-right uppercase">
          <Link href="#about">About</Link>
          <Link href="#work">Work</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <Link
          href="#contact"
          className="ml-auto mt-auto flex aspect-square w-full max-w-[92px] items-center justify-center rounded-full bg-primary text-center font-bold italic text-primary-foreground sm:text-sm lg:text-xl xl:text-2xl"
        >
          Say
          <br /> Hello
        </Link>
      </div>

      <div className="scrollbar-hide order-2 col-span-12 max-w-screen-2xl overflow-y-scroll p-4 md:col-span-8">
        <main className="space-y-12">
          <section className="flex h-screen flex-col justify-center text-center">
            <p className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl">
              <span className="text-primary">Hi</span>, am a Graphic{' '}
              <span className="text-primary">designer</span>
            </p>
            <h1 className="text-center font-display text-4xl font-black sm:text-5xl lg:text-7xl 2xl:text-9xl">
              Crafting Dreams
              <br /> Pixel by Pixel
            </h1>

            <div className="relative flex items-center justify-center lg:-mt-9">
              <svg
                viewBox="0 0 352 352"
                fill="none"
                width="352px"
                height="352px"
                className="absolute top-0 -z-10 size-[230px] -translate-y-10 md:size-[300px] lg:size-[352px] lg:-translate-y-1/4"
              >
                <path
                  d="M176 352c97.202 0 176-78.798 176-176S273.202 0 176 0 0 78.798 0 176s78.798 176 176 176Z"
                  fill="#F8B133"
                />
              </svg>
              <Image
                src={avatarOnChairPng}
                style={{ width: 'auto' }}
                className="h-[430px]"
                alt="portrait drawing of me"
                priority
              />
            </div>
          </section>

          <div className="space-y-8 pb-8">
            <section>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
                rerum accusamus ratione accusantium consequatur nulla saepe
                temporibus molestias delectus eligendi voluptatem atque quisquam
                officia dolor et ipsum, placeat possimus in.
              </p>
            </section>
            <section>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                inventore incidunt quod. Tenetur error odio quasi accusantium
                modi debitis commodi atque, alias architecto odit libero harum
                natus, sed unde animi soluta? Totam est fuga veniam voluptatibus
                in! Dolores, ullam? Numquam quam pariatur repudiandae inventore.
                Sed at molestias, tempora harum ratione neque aliquam alias amet
                asperiores inventore nihil dolorum expedita veniam maxime
                accusantium doloremque aspernatur atque laboriosam a nam quaerat
                perspiciatis.
              </p>
            </section>
            <section>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                inventore incidunt quod. Tenetur error odio quasi accusantium
                modi debitis commodi atque, alias architecto odit libero harum
                natus, sed unde animi soluta? Totam est fuga veniam voluptatibus
                in! Dolores, ullam? Numquam quam pariatur repudiandae inventore.
                Sed at molestias, tempora harum ratione neque aliquam alias amet
                asperiores inventore nihil dolorum expedita veniam maxime
                accusantium doloremque aspernatur atque laboriosam a nam quaerat
                perspiciatis.
              </p>
            </section>
            <section>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                inventore incidunt quod. Tenetur error odio quasi accusantium
                modi debitis commodi atque, alias architecto odit libero harum
                natus, sed unde animi soluta? Totam est fuga veniam voluptatibus
                in! Dolores, ullam? Numquam quam pariatur repudiandae inventore.
                Sed at molestias, tempora harum ratione neque aliquam alias amet
                asperiores inventore nihil dolorum expedita veniam maxime
                accusantium doloremque aspernatur atque laboriosam a nam quaerat
                perspiciatis.
              </p>
            </section>
            <section>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                inventore incidunt quod. Tenetur error odio quasi accusantium
                modi debitis commodi atque, alias architecto odit libero harum
                natus, sed unde animi soluta? Totam est fuga veniam voluptatibus
                in! Dolores, ullam? Numquam quam pariatur repudiandae inventore.
                Sed at molestias, tempora harum ratione neque aliquam alias amet
                asperiores inventore nihil dolorum expedita veniam maxime
                accusantium doloremque aspernatur atque laboriosam a nam quaerat
                perspiciatis.
              </p>
            </section>
            <section>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                inventore incidunt quod. Tenetur error odio quasi accusantium
                modi debitis commodi atque, alias architecto odit libero harum
                natus, sed unde animi soluta? Totam est fuga veniam voluptatibus
                in! Dolores, ullam? Numquam quam pariatur repudiandae inventore.
                Sed at molestias, tempora harum ratione neque aliquam alias amet
                asperiores inventore nihil dolorum expedita veniam maxime
                accusantium doloremque aspernatur atque laboriosam a nam quaerat
                perspiciatis.
              </p>
            </section>
            <section>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque
                inventore incidunt quod. Tenetur error odio quasi accusantium
                modi debitis commodi atque, alias architecto odit libero harum
                natus, sed unde animi soluta? Totam est fuga veniam voluptatibus
                in! Dolores, ullam? Numquam quam pariatur repudiandae inventore.
                Sed at molestias, tempora harum ratione neque aliquam alias amet
                asperiores inventore nihil dolorum expedita veniam maxime
                accusantium doloremque aspernatur atque laboriosam a nam quaerat
                perspiciatis.
              </p>
            </section>
          </div>
        </main>

        <footer className="mx-auto max-w-screen-lg border-t pb-4 pt-6 text-center md:pb-10 md:pt-12">
          <p className="sm:text-lg">
            &copy;{new Date().getFullYear()} Made by Rachid. All Rights Reserved
          </p>
        </footer>
      </div>

      <nav className="order-1 hidden flex-col gap-4 py-8 pl-4 text-left md:col-span-2 md:flex md:text-xl">
        <Link href="/" className="shrink-0">
          <Image
            src={logoPng}
            alt="logo"
            width="88"
            height="88"
            className="aspect-square shrink-0"
          />
        </Link>
      </nav>
    </div>
  );
}
