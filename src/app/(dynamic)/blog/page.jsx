import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

export const metadata = {
  title: 'Shop - Products',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
}

async function getData() {
  const res = await fetch('https://dummyjson.com/products');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Blog() {
  const data = await getData();
  const products = data.products.slice(0, 6);

  return (
    <div className={styles.mainContainer}>
      {
       products.map((product) => (
        <Link href={`/blog/${product.id}`}className={styles.post} key={product.id}>
          <div className={styles.imageContainer}>
              <Image
                className={styles.Image}
                src={product.thumbnail}
                width={350}
                height={250}
                alt="post image"
              />
              <div className={styles.content}>
                <h1 className={styles.title}>{product.title}</h1>
                <p className={styles.text}>{product.description}</p>
              </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

