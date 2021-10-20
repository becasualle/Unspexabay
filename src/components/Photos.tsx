import React from 'react'
import styles from './Photos.module.css'
import Photo from './Photo'

const Photos = () => {
    const id = "A5E-ym6WyGM";
    const regular = "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjY2Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTYzNDcxOTQ2OA&ixlib=rb-1.2.1&q=80&w=1080";
    const alt_description = "gray and black laptop computer on brown wooden table";
    const liked_by_user = false;
    const name = "Camylla Battani";
    const portfolio_url = "http://westwavephoto.com/";
    const medium = "https://images.unsplash.com/profile-1534348121140-71ba5518c01d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64";
    const isLikedFilterOn = false;
    const handleLike = (id: string) => console.log(id);
    const handleDelete = (id: string) => console.log(id);

    return (
        <section className={styles.photos}>
            <div className={styles.photosCenter}>
                {/* {photos.map(photo => <Photo key={photo.id} {...photo} />)} */}
                <Photo
                    key={id}
                    id={id}
                    regular={regular}
                    alt_description={alt_description}
                    liked_by_user={liked_by_user}
                    name={name}
                    portfolio_url={portfolio_url}
                    medium={medium}
                    isLikedFilterOn={isLikedFilterOn}
                    handleLike={handleLike}
                    handleDelete={handleDelete}
                />
            </div>
            {/* {isLoading && <h2 className={styles.loading}>Loading...</h2>} */}
        </section>
    )
}

export default Photos
