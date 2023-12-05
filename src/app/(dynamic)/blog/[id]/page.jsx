import Image from 'next/image'
import styles from './page.module.css'


async function getData(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export async function generateMetadata({ params } ) {
  // read route params
  const id = params.id
 
  // fetch data
  const product = await getData(params.id);
  
  return {
    title: product.title,
    description: product.description,
  }
};
 


export default async function Post({params}) {
  
  const product = await getData(params.id);
  
  return (

    <div className={styles.container}>

      <header className={styles.header}>
           <div className={styles.info}>
            <h1 className={styles.title}>{product.title}</h1>
            <p className={styles.desc}>{product.description}</p>
           </div>
           <div className={styles.imageContainer}>
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill={true}
              className={styles.postImage}
            />
            <span className={styles.author}>{product.category}</span>
           </div>

      </header>

      <div className={styles.content}>

        <div className={styles.gallery}>
          {product.images.map((imge) => ( 
            <Image
              key={product.id}
              src={imge}
              alt={product.title}
              width={125}
              height={125}
            />
          ))}
        </div>
        
         <p className={styles.text}>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaer
           at molestias rem, nostrum, placeat pariatur excepturi magni cum co
           rrupti corporis obcaecati quam fugit, voluptatum exercitationem adipisci iusto
           ratione laudantium. Autem, repudiandae!
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaer
           at molestias rem, nostrum, placeat pariatur excepturi magni cum co
           rrupti corporis obcaecati quam fugit, voluptatum exercitationem adipisci iusto
           ratione laudantium. Autem, repudiandae!
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaer
           at molestias rem, nostrum, placeat pariatur excepturi magni cum co
           rrupti corporis obcaecati quam fugit, voluptatum exercitationem adipisci iusto
           ratione laudantium. Autem, repudiandae!
         </p>
    

    </div>

    </div>
)
}